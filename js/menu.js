function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}



window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active" , window.scrollY > 1200)
})


function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}