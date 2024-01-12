window.addEventListener("load", () => {
    // 로딩이 완료되면 로딩 화면 숨기기
    const loadingContainer = document.querySelector("#loading-screen");
    loadingContainer.style.display = "none";

    // 섹션-1 애니메이션 실행
    section1Ani();
    // 섹션-2 애니메이션 실행
    section2Ani();
});
gsap.registerPlugin(ScrollTrigger);
// --------------------섹션-1--------------------
const pText1Section1 = document.querySelectorAll(".section-1 > .text-container > p");
const spanText1Section1 = document.querySelectorAll(".section-1 > .text-container > span > span");
const pText2Section1 = document.querySelector(".section-1 .text-2 > p");
const rotateImg = document.querySelectorAll(".img-container > div");
function section1Ani() {
    const tl = gsap.timeline();
    tl.from(spanText1Section1, { // span 애니
        opacity: 0, y: -10, duration: 0.5,
        yoyo: true, stagger: { from: 'center', each: 0.1 }
    })
        .fromTo(pText1Section1, { opacity: 0, y: 50 }, { // p 애니
            opacity: 1, y: 0, duration: 1, stagger: 0.2
        }, '-=0.8')
        .fromTo(rotateImg, { opacity: 0, rotateY: 180 }, { // 이미지 애니
            opacity: 1, rotateY: 0, duration: 1, stagger: 0.2, ease: Power2.easeInOut
        }, "-=1")
        .from(pText2Section1, { opacity: 0, y: 50, duration: 1 }, "-=0.5"); // 텍스트 애니
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top center",
        end: "bottom center",
        animation: tl
        // ,toggleActions: "restart none restart none"
        // ,markers: true
    });
    // ScrollTrigger 초기화
    ScrollTrigger.refresh();
};
// 섹션-1 이미지 마우스 오버/아웃
const imgs = document.querySelectorAll(".section-1 .img-container > .img");
imgs.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        const p = e.currentTarget.querySelector("p");
        if (p) {
            p.style.display = "block";
        }
        e.currentTarget.classList.add("show-bg");
    });
    item.addEventListener("mouseout", (e) => {
        const p = e.currentTarget.querySelector("p");
        if (p) {
            p.style.display = "none";
        }
        e.currentTarget.classList.remove("show-bg");
    });
});
// --------------------섹션-2--------------------
const pText1Section2 = document.querySelectorAll(".section-2 > .text-container > p");
const spanText1Section2 = document.querySelectorAll(".section-2 > .text-container > span > span");
const bookImg = document.querySelector(".section-2-container");
function section2Ani() {
    const tl = gsap.timeline();
    tl.from(spanText1Section2, { // span 애니
        opacity: 0, y: -10, duration: 0.5,
        yoyo: true, stagger: { from: 'start', each: 0.1 }
    })
        .fromTo(pText1Section2, { opacity: 0, y: 50 }, { // p 애니
            opacity: 1, y: 0, duration: 1, stagger: 0.2
        }, '-=0.8')
        .from(bookImg, { x: -1000, duration: 1 }, "-=1")
    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top center",
        end: "bottom center",
        animation: tl
    });
    ScrollTrigger.refresh();
}
const page1 = document.querySelector("#page-1");
const pOn = document.querySelector(".section-2-container > .text-1 > p");
page1.addEventListener("click", () => {
    page1.classList.toggle("clicked");
    // 클릭 시 텍스트 on
    pOn.classList.toggle("on");
    if (pOn.classList.contains("on")) {
        pOn.style.transform = "scale(1)";
    } else {
        pOn.style.transform = "scale(0)";
    }
});