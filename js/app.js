window.addEventListener('scroll', function(){
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0);
})

function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle')
  const nav = document.querySelector('.nav')
  menuToggle.classList.toggle('active')
  nav.classList.toggle('active')
}
const sr = scrolReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('home-tilte')