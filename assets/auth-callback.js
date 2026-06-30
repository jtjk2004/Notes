(function () {
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const eyebrow = document.getElementById("eyebrow");
  const details = document.getElementById("details");
  const card = document.getElementById("status-card");

  const query = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  const error = query.get("error") || hash.get("error");
  const errorDescription =
    query.get("error_description") ||
    hash.get("error_description") ||
    query.get("message") ||
    hash.get("message");

  if (error) {
    card.classList.add("error");
    eyebrow.textContent = "Confirmation failed";
    title.textContent = "Something went wrong";
    message.textContent = decodeURIComponent(errorDescription || error);
    details.textContent = "Try requesting a fresh confirmation email from the app.";
    return;
  }

  const type = query.get("type") || hash.get("type");
  const code = query.get("code") || hash.get("code");
  const accessToken = hash.get("access_token");

  card.classList.add("success");
  eyebrow.textContent = "Email confirmed";
  title.textContent = "You are verified";
  message.textContent = "Return to Private Notes and sign in with your email and password.";

  if (type || code || accessToken) {
    details.textContent = "Supabase sent a valid confirmation response to this page.";
  } else {
    details.textContent = "If you opened this page directly, use the confirmation link from your email.";
  }
})();
