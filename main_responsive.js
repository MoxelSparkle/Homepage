const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index_responsive)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index_responsive / 7 + 0.3}s`
                // Animation der Mobilen Navbar
            }
            // console.log(index_responsive / 7);
    
        });
        burger.classList.toggle('toggle');
    });
  
}

navSlide();