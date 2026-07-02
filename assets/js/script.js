const header=document.getElementById('siteHeader');
const menuButton=document.getElementById('menuButton');
const mainNav=document.getElementById('mainNav');
function setHeader(){if(header)header.classList.toggle('scrolled',window.scrollY>20)}
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
if(menuButton&&mainNav){menuButton.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}
