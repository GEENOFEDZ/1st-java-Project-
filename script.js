function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitBtn = document.getElementById("submitBtn");

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name cannot be empty";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Minimum 6 characters required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Button enable / disable
  if (isValid) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
    submitBtn.classList.add("bg-blue-600", "hover:bg-blue-700", "cursor-pointer");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("bg-gray-400", "cursor-not-allowed");
    submitBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
  }
}