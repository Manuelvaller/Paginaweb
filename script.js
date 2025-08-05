
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".flip-card-front .button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const card = btn.closest(".flip-card");

        // Añade la clase 'flipped'
        card.classList.add("flipped");

        // Cuando el mouse salga del flip-card, se quita la clase 'flipped'
        card.addEventListener("mouseleave", function handler() {
          card.classList.remove("flipped");

          // Elimina este handler después de ejecutarse una vez
          card.removeEventListener("mouseleave", handler);
        });
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".flip-card-front .button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest(".flip-card");
      card.classList.add("flipped");

      card.addEventListener("mouseleave", function handler() {
        card.classList.remove("flipped");
        card.removeEventListener("mouseleave", handler);
      });
    });
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.getElementById("menu-links");

    menuToggle.addEventListener("click", function () {
      menuLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // (Opcional) cerrar menú al hacer clic en cualquier enlace
    const links = document.querySelectorAll('.menu-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  });





document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".flip-card-front .button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest(".flip-card");
      const plato = btn.closest(".plato");
      const platosContainer = btn.closest(".platos");


      document.querySelectorAll(".plato").forEach(p => p.classList.remove("highlight"));
      document.querySelectorAll(".platos").forEach(pc => pc.classList.remove("blur"));


      card.classList.add("flipped");
      plato.classList.add("highlight");
      platosContainer.classList.add("blur");


      plato.addEventListener("mouseleave", function handler() {
        card.classList.remove("flipped");
        plato.classList.remove("highlight");
        platosContainer.classList.remove("blur");
        plato.removeEventListener("mouseleave", handler);
      });
    });
  });
});
