// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function setTheme(dark){
  if(dark){
    root.classList.add('dark');
    themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    root.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
  localStorage.setItem('dark', dark? '1':'0');
}
themeToggle.addEventListener('click', ()=> setTheme(!root.classList.contains('dark')));
// init
setTheme(localStorage.getItem('dark') === '1');

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300) scrollTopBtn.style.display = 'block'; else scrollTopBtn.style.display = 'none';
});
scrollTopBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Reveal sections and active nav highlighting
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#navbarLinks a');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      const id = e.target.id;
      navLinks.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    }
  });
},{threshold:0.25});
sections.forEach(s=> io.observe(s));

// Contact form basic handler (no backend)
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thank you — message captured locally. Replace handler with your backend endpoint.');
  e.target.reset();
});
