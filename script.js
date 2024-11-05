window.addEventListener('scroll',function(){
    var navcantainer = document.getElementById('nav-cantainer');
    console.log("ScrollY:", window.scrollY);
    if(window.scrollY > 50){
        navcantainer.classList.add('scrolled');
    }else{
        navcantainer.classList.remove('scrolled')
    }
});