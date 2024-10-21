const menuBtn = document.querySelector(".menu-btn-container");
const closeMenuBtn = document.getElementById("cross");
const body = document.body;

menuBtn.addEventListener('click', () => {

    const menuWrapper = document.querySelector(".menu-wrapper");

    setTimeout(() => {
        menuWrapper.style.display = "flex";
        setTimeout(() => {
            menuWrapper.style.opacity = 1;
            body.style.overflowY = "hidden";
        }, 300);
    }, 250);

});

closeMenuBtn.addEventListener('click', () => {

    const menuWrapper = document.querySelector(".menu-wrapper");

    setTimeout(() => {
        menuWrapper.style.opacity = 0;
        setTimeout(() => {
            menuWrapper.style.display = "none";
            body.style.overflowY = "auto";
        }, 300);
    }, 250);

});

const imagePoster1 = document.getElementById("poster1");
const imagePoster2 = document.getElementById("poster2");
const imagePoster3 = document.getElementById("poster3");

const aboutMe = document.querySelector(".about-text-container");

const wrapper = document.querySelector(".wrapper");

window.onload = function() {
    
    setTimeout(() => {
        wrapper.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        aboutMe.style.opacity = 1;
    }, 1100);

    setTimeout(() => {
        imagePoster1.style.opacity = 1;
        imagePoster1.style.transform = "scale(1)";
        imagePoster1.style.transform = "rotate(-45deg)";
    }, 500);
    setTimeout(() => {
        imagePoster2.style.opacity = 1;
        imagePoster2.style.transform = "scale(1)";
        imagePoster2.style.transform = "rotate(25deg)";
    }, 700);
    setTimeout(() => {
        imagePoster3.style.opacity = 1;
        imagePoster3.style.transform = "scale(1)";
    }, 900);
  };

imagePoster1,imagePoster2,imagePoster3.addEventListener('click', () => {
    window.location.href = "/sites/MORGUESITE/page/music.html";
});

imagePoster1.addEventListener('mouseover', () => {
    imagePoster1.style.transform = "scale(1.3) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1.3) rotate(25deg)";
    imagePoster3.style.transform = "scale(1.3)";
});

imagePoster2.addEventListener('mouseover', () => {
    imagePoster1.style.transform = "scale(1.3) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1.3) rotate(25deg)";
    imagePoster3.style.transform = "scale(1.3)";
});

imagePoster3.addEventListener('mouseover', () => {
    imagePoster1.style.transform = "scale(1.3) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1.3) rotate(25deg)";
    imagePoster3.style.transform = "scale(1.3)";
});

imagePoster1.addEventListener('mouseout', () => {
    imagePoster1.style.transform = "scale(1) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1) rotate(25deg)";
    imagePoster3.style.transform = "scale(1)";
});

imagePoster2.addEventListener('mouseout', () => {
    imagePoster1.style.transform = "scale(1) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1) rotate(25deg)";
    imagePoster3.style.transform = "scale(1)";
});

imagePoster3.addEventListener('mouseout', () => {
    imagePoster1.style.transform = "scale(1) rotate(-45deg)";
    imagePoster2.style.transform = "scale(1) rotate(25deg)";
    imagePoster3.style.transform = "scale(1)";
});


setInterval(animPostsAct, 10000); // 10000 мілісекунд = 10 секунд
setInterval(animPostsNoAct, 11000);


imagePoster1.addEventListener('mouseout', animPostsNoAct);
imagePoster2.addEventListener('mouseout', animPostsNoAct);
imagePoster3.addEventListener('mouseout', animPostsNoAct);

imagePoster1.addEventListener('mouseleave', animPostsNoAct);
imagePoster2.addEventListener('mouseleave', animPostsNoAct);
imagePoster3.addEventListener('mouseleave', animPostsNoAct);

    function animPostsAct() {
        imagePoster1.style.transform = "scale(1.3) rotate(-45deg)";
        imagePoster2.style.transform = "scale(1.3) rotate(25deg)";
        imagePoster3.style.transform = "scale(1.3)";
    }
    
    function animPostsNoAct() {
        imagePoster1.style.transform = "scale(1) rotate(-45deg)";
        imagePoster2.style.transform = "scale(1) rotate(25deg)";
        imagePoster3.style.transform = "scale(1)";
    }