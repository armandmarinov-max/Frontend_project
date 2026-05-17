
(function () {
  const token = sessionStorage.getItem("adminToken");

  if (!token) {
    window.location.replace("admin-login.html");
    return;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now) {
      sessionStorage.removeItem("adminToken");
      window.location.replace("admin-login.html");
    }
  } catch (e) {
    sessionStorage.removeItem("adminToken");
    window.location.replace("admin-login.html");
  }
})();

function adminLogout() {
  sessionStorage.removeItem("adminToken");
  window.location.replace("admin-login.html");
}
