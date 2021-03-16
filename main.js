let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
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


// Get the video
let video1 = document.getElementById('beach_vid');
let video2 = document.getElementById('muntains_vid');
let video3 = document.getElementById('sand_vid');



// Get the button
let btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function playVideo1() {
    if (video1.paused) {
        video1.play();
    } else {
        video1.pause();
    }
}
function playVideo2() {
    if (video2.paused) {
        video2.play();
    } else {
        video2.pause();
    }
}
function playVideo3() {
    if (video3.paused) {
        video3.play();
    } else {
        video3.pause();
    }
}
