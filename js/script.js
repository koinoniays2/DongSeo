window.addEventListener("load", () => {
    // const tl = gsap.timeline();
    // tl.call(section1Ani);
    section1Ani();
});
// 섹션-1 애니
let pText1Section1 = document.querySelectorAll(".section-1 > .text-1 > p");
let spanText1Section1 = document.querySelectorAll(".section-1 > .text-1 > span > span");
let imgSection1 = document.querySelectorAll(".img-container > div > img");
let pText2Section2 = document.querySelector(".section-1 > .text-2 > p");
let tl = gsap.timeline();
function section1Ani() {
    // 텍스트 애니
    tl.from(spanText1Section1,{ 
        opacity:0, y:-10, 
        yoyo: true, duration: 0.5, stagger: { from: 'center', each: 0.1 }
    })
    .fromTo(pText1Section1,{ opacity:0, y:50 }, {
        opacity: 1, y: 0,
        duration: 1, stagger: 0.2
    },'-=0.8')
    // 이미지 애니
    .from(imgSection1[0], { opacity:0, x:-500, duration: 1 }, "-=0.8")
    .from(imgSection1[1], { opacity:0, x: 500, duration: 1 }, "-=0.8")
    .from(pText2Section2, { x:-100, opacity: 0, duration: 1 }, "-=0.4");
};
