// ── CONFIG ──────────────────────────────────────────────
// Change this to your actual ASP.NET API URL
const API_URL = "localhost:5080/api/Admin/login";
// ────────────────────────────────────────────────────────

// Allow Enter key to submit
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleLogin();
});

async function handleLogin() {
  const username  = document.getElementById("username").value.trim();
  const password  = document.getElementById("password").value;
  const errorMsg  = document.getElementById("errorMsg");
  const loginBtn  = document.getElementById("loginBtn");

  // Basic client-side check
  if (!username || !password) {
    showError("Please fill in both fields.");
    return;
  }

  // Show loading state
  loginBtn.textContent = "Verifying…";
  loginBtn.disabled = true;
  errorMsg.classList.remove("visible");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();

      // Save the token so protected pages can check it
      sessionStorage.setItem("adminToken", data.token);

      // Redirect to admin hub
      window.location.href = "admin-hub.html";

    } else if (response.status === 401) {
      showError("Invalid username or password.");
    } else {
      showError("Something went wrong. Please try again.");
    }

  } catch (err) {
    // Network error or API unreachable
    showError("Could not reach the server. Check your connection.");
    console.error(err);
  } finally {
    loginBtn.innerHTML = "&#9823; &nbsp; Log in as admin";
    loginBtn.disabled = false;
  }
}

function showError(message) {
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = message;
  errorMsg.classList.add("visible");
  document.getElementById("password").value = "";
  document.getElementById("password").focus();
}
