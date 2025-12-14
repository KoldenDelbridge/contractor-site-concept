    const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change hamburger to X when active
    if(navLinks.classList.contains('active')) {
      hamburger.innerHTML = '&times;'; // X symbol
    } else {
      hamburger.innerHTML = '&#9776;'; // Hamburger
    }
  });

