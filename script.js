// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });
  }
});




