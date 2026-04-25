const menuBtn  = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  }); 

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
  });
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .hero, .stats').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(40px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  revealObserver.observe(el);
});


const videos = document.querySelectorAll('video');

if (videos.length > 0) {
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.4 });

  videos.forEach(video => {
    video.muted = true;
    videoObserver.observe(video);
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if(contactForm){

  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    formMessage.textContent = "Message sent successfully.";
    formMessage.style.opacity = "1";

    contactForm.reset();

    setTimeout(()=>{
      formMessage.style.opacity = "0";
    },3000);

  });

}