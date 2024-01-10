window.addEventListener("load", () => {
    // const tl = gsap.timeline();
    // tl.call(section1Ani);

    // 로딩이 완료되면 로딩 화면 숨기기
    const loadingContainer = document.querySelector("#loading-screen");
    loadingContainer.style.display = "none";
    section1Ani();
});
// 섹션-1 애니
let pText1Section1 = document.querySelectorAll(".section-1 > .text-1 > p");
let spanText1Section1 = document.querySelectorAll(".section-1 > .text-1 > span > span");
let pText2Section1 = document.querySelector(".section-1 > .text-2 > p");
let rotateImg = document.querySelectorAll(".img-container > .img");

let tl = gsap.timeline();
function section1Ani() {
    // 텍스트 애니
    tl.from(spanText1Section1,{ 
        opacity:0, y:-10, duration: 0.5, 
        yoyo: true, stagger: { from: 'center', each: 0.1 }
    })
    .fromTo(pText1Section1,{ opacity:0, y:50 }, {
        opacity: 1, y: 0, duration: 1, stagger: 0.2
    },'-=0.8')
    .fromTo(rotateImg, { opacity: 0, rotateY: 0 }, {
        opacity: 1, rotateY: 180,  duration: 1, stagger: 0.5 }, "-=0.5")
    .from(pText2Section1, { opacity: 0,  x:-50, duration: 1 }, "-=0.5");
};