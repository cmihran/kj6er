// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Signup form handler.
// While the form is still a placeholder (no provider wired up), we prevent the
// submission and show a friendly status. Once you set a real `action=` URL and
// remove data-placeholder="true", the browser will POST normally.
(function () {
  const form = document.querySelector(".signup");
  if (!form) return;

  const status = form.querySelector(".signup__status");
  const input = form.querySelector(".signup__input");

  form.addEventListener("submit", function (e) {
    if (form.dataset.placeholder === "true") {
      e.preventDefault();
      if (!input.value || !input.checkValidity()) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("is-error");
        input.focus();
        return;
      }
      status.classList.remove("is-error");
      status.textContent =
        "Thanks! The list isn't wired up yet — check back soon. 73.";
      input.value = "";
    }
  });
})();
