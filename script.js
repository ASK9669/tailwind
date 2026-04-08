const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  if (name.value === "" || email.value === "") {
    error.textContent = "⚠️ Please fill all fields";
    return;
  }

  if (!email.value.includes("@")) {
    error.textContent = "⚠️ Please enter a valid email";
    return;
  }

  error.textContent = "✅ Form submitted successfully!";
});