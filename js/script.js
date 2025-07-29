document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const closeMenu = document.getElementById("close-menu");

  [menuToggle, closeMenu].forEach(btn =>
      btn.addEventListener("click", () => navMenu.classList.toggle("active"))
  );

  // Declarar función de pestañas
  function openMerch(evento, productName) {
    // Ocultar pestañas
    document.querySelectorAll(".tabcontent").forEach(el => el.style.display = "none");
    // Remover la clase active de todos los botones
    document.querySelectorAll(".tablinks").forEach(el => el.classList.remove("active"));
    // Mostrar la pestaña seleccionada y activar botón
    document.getElementById(productName).style.display = "block";
    evento.currentTarget.classList.add("active");
  }

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-nav');
    if (window.scrollY > 10) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  });

  const elementos = document.querySelectorAll('.iconos-text .nosotros-square');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // solo se anima una vez
      }
    });
  }, {
    threshold: 0.2 // 20% del elemento visible
  });

  elementos.forEach(el => observer.observe(el));

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 10000);

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  function updateSliderImages() {
    const slides = document.querySelectorAll('.slide img');

    slides.forEach((img, index) => {
      if (window.innerWidth <= 768) {
        // móvil
        if (index === 0) img.src = 'fitforceimg/banner1movil.png';
        else if (index === 1) img.src = 'fitforceimg/banner2tablet.png';
        else if (index === 2) img.src = 'fitforceimg/banner3tablet.png';
      } else if (window.innerWidth <= 992) {
        // tablet
        if (index === 0) img.src = 'fitforceimg/banner1tablet.png';
        else if (index === 1) img.src = 'fitforceimg/banner2tablet.png';
        else if (index === 2) img.src = 'fitforceimg/banner3tablet.png';
      } else {
        // escritorio
        if (index === 0) img.src = 'fitforceimg/banner1.png';
        else if (index === 1) img.src = 'fitforceimg/banner2.png';
        else if (index === 2) img.src = 'fitforceimg/banner3.png';
      }
    });
  }

  window.addEventListener('resize', updateSliderImages);
  window.addEventListener('load', updateSliderImages);

});
