document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      button.classList.add("active")

      const tabId = button.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Form
  const contactForm = document.getElementById("contact-form")
  const successMessage = document.getElementById("form-success")

  if (contactForm) {
    // S'assurer que le message de succès est caché au chargement
    if (successMessage) {
      successMessage.classList.add("hidden")
      successMessage.classList.remove("show")
    }

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)

      try {
        const response = await fetch("https://formspree.io/f/mzzejkye", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok && successMessage) {
          // Afficher le message de succès
          successMessage.classList.remove("hidden")
          successMessage.classList.add("show")

          // Cacher le message après 4 secondes
          setTimeout(() => {
            successMessage.classList.remove("show")
            // Attendre la fin de l'animation avant de cacher complètement
            setTimeout(() => {
              successMessage.classList.add("hidden")
            }, 300)
          }, 4000)

          contactForm.reset()
        } else {
          alert("Erreur lors de l'envoi du formulaire.")
        }
      } catch (error) {
        alert("Erreur de connexion ou réseau.")
        console.error(error)
      }
    })
  }

    // Lightbox
    const lightbox = document.getElementById("lightbox")
    const lightboxImg = document.getElementById("lightbox-img")
    const closeBtn = document.querySelector(".lightbox-close")
  
    document.querySelectorAll(".screenshot-item img, .lightbox-trigger").forEach((img) => {
      img.style.cursor = "zoom-in"
      img.addEventListener("click", () => {
        lightboxImg.src = img.src
        lightbox.style.display = "flex"
      })
    })
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === closeBtn) {
        lightbox.style.display = "none"
      }
    })
  
})
