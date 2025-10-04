// disappearing header 

const mainHeader = document.getElementById('mainHeader');
const scrollHeader = document.getElementById('scrollHeader');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    // Scrolling down
    if (currentScroll > lastScrollY) {
      mainHeader.style.transform = 'translateY(-100%)';
      scrollHeader.classList.add('active');
    } 
    // Scrolling up
    else {
      if (currentScroll <= 150) {
        mainHeader.style.transform = 'translateY(0)';
        scrollHeader.classList.remove('active');
      }
    }
  } else {
    // Near top
    mainHeader.style.transform = 'translateY(0)';
    scrollHeader.classList.remove('active');
  }

  lastScrollY = currentScroll;
});

// disappearing header
 document.getElementById("myDiv").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
}); 
