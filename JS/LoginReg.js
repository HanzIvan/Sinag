document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  registerLink.addEventListener("click", () => {
    if (wrapper) {
      wrapper.classList.add("active");
    }
  });

  loginLink.addEventListener("click", () => {
    if (wrapper) {
      wrapper.classList.remove("active");
    }
  });
});
