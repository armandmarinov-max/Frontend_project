// ── auth-guard.js ────────────────────────────────────────
// Place <script src="auth-guard.js"></script> as the FIRST
// script tag on every page you want to protect.
// If no valid token is found the user is sent back to login.
// ─────────────────────────────────────────────────────────

(function () {
  const token = sessionStorage.getItem("adminToken");

  if (!token) {
    // No token at all → back to login
    window.location.replace("admin-login.html");
    return;
  }

  // Optional: verify the token is not expired by decoding the JWT payload.
  // JWT structure: header.payload.signature  (all base64url encoded)
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now) {
      // Token has expired
      sessionStorage.removeItem("adminToken");
      window.location.replace("admin-login.html");
    }
  } catch (e) {
    // Token is malformed
    sessionStorage.removeItem("adminToken");
    window.location.replace("admin-login.html");
  }
})();

// Call this from a logout button on any admin page
function adminLogout() {
  sessionStorage.removeItem("adminToken");
  window.location.replace("admin-login.html");
}
