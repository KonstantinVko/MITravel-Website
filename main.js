let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    loopedSlides: 3,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});



function changeBlock() {
   let block = document.getElementById('stories');
   block.style.background = "url('images/Surf-2.webp') no-repeat";
   block.style.backgroundSize = 'cover';
}
