document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      button.classList.add("active");

      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("https://formspree.io/f/mzzejkye", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok && successMessage) {
          successMessage.classList.remove("hidden");
          successMessage.classList.add("show");

          setTimeout(() => {
            successMessage.classList.remove("show");
            successMessage.classList.add("hidden");
          }, 4000);

          contactForm.reset();
        } else {
          alert("Erreur lors de l'envoi du formulaire.");
        }
      } catch (error) {
        alert("Erreur de connexion ou réseau.");
        console.error(error);
      }
    });
  }
});
