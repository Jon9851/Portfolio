document.addEventListener('DOMContentLoaded', function(){
   
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    let slider = document.querySelectorAll('.slider');
    M.Slider.init(slider);
});