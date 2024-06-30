document.addEventListener('DOMContentLoaded', () => {
   // Intersection Observer setup with options
   const sections = document.querySelectorAll('section');
   const options = {
     threshold: 0.3 // Adjust threshold as needed
   };
 
   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
         observer.unobserve(entry.target);
       }
     });
   }, options);
 
   sections.forEach(section => {
     observer.observe(section);
   });
 
   // Smooth scroll for navigation links
   const navLinks = document.querySelectorAll('nav a');
 
   navLinks.forEach(link => {
     link.addEventListener('click', (e) => {
       e.preventDefault();
       const targetId = e.target.getAttribute('href').substring(1);
       const targetSection = document.getElementById(targetId);
 
       smoothScroll(targetSection);
     });
   });
 
   
   const internalLinks = document.querySelectorAll('section a[href="#"]');
 
   internalLinks.forEach(link => {
     link.addEventListener('click', (e) => {
       e.preventDefault();
       const targetId = link.getAttribute('href').substring(1);
       const targetSection = document.getElementById(targetId);
 
       smoothScroll(targetSection);
     });
   });
 
   // Function for smooth scrolling
   function smoothScroll(target) {
     const headerHeight = 60; // Adjust according to header height
     const targetPosition = target.offsetTop - headerHeight;
     
     window.scrollTo({
       top: targetPosition,
       behavior: 'smooth'
     });
   }
 
   // Contact form submission
   const contactForm = document.getElementById('contactForm');
   contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for your message! We will get back to you soon.');
     contactForm.reset();
   });
 });
 