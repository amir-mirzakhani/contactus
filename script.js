const emptyFiled = document.querySelectorAll(".input-checks");
const submitBtn = document.querySelector(".btn-submit");
const email = document.querySelector("#email");
const queryError = document.querySelector(".query-error");
const checkbox = document.querySelector(".team-checkbox");
const checkboxError = document.querySelector(".checkboxerr");
const slideMsg = document.querySelector(".success-msg");
submitBtn.addEventListener("click", () => {
  check();
});

function check() {
  // Remove all existing error messages first
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Track if any error exists
  let hasError = false;

  // Validation of empty fields
  emptyFiled.forEach((input) => {
    if (input.value.trim() === "") {
      const errorMsg = document.createElement("p");
      errorMsg.className = "error-message";
      errorMsg.style.color = "red";
      errorMsg.style.marginTop = "4px";
      errorMsg.textContent = "This field is required.";

      // Append error after the input's parent (to keep layout clean)
      input.parentNode.appendChild(errorMsg);
      hasError = true;
    }
  });

  // Validation of email
  if (email.value.trim() !== "") {
    if (!email.checkValidity()) {
      const errorMsg = document.createElement("p");
      errorMsg.className = "error-message";
      errorMsg.style.color = "red";
      errorMsg.style.marginTop = "4px";
      errorMsg.textContent = "Please enter a valid email.";
      email.parentNode.appendChild(errorMsg);
      hasError = true;
    }
  }

  // Validation of radio group
  const selected = document.querySelector('input[name="query"]:checked');
  if (!selected) {
    queryError.style.display = "block";
    hasError = true;
  } else {
    queryError.style.display = "none";
  }
  // Validation of checkbox
  if (!checkbox.checked) {
    checkboxError.style.display = "block";
    hasError = true;
  } else {
    checkboxError.style.display = "none";
  }
  // Optional: Prevent form submission if there's an error
  if (hasError) {
    console.log("Validation failed");
  } else {
    slideMsg.classList.add("show");

    
    setTimeout(() => {
      slideMsg.classList.remove("show");
    }, 5000); 
  }
}
