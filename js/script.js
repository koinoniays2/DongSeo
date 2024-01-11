window.addEventListener("load", () => {
    // const tl = gsap.timeline();
    // tl.call(section1Ani);
    // 로딩이 완료되면 로딩 화면 숨기기
    const loadingContainer = document.querySelector("#loading-screen");
    loadingContainer.style.display = "none";
    // 섹션-1 애니메이션 실행
    section1Ani();
    // 섹선-2 애니메이션 실행
    section2Banner();
});
// 섹션-1 애니
let pText1Section1 = document.querySelectorAll(".section-1 > .text-1 > p");
let spanText1Section1 = document.querySelectorAll(".section-1 > .text-1 > span > span");
let pText2Section1 = document.querySelector(".section-1 .text-2 > p");
let rotateImg = document.querySelectorAll(".img-container > div");

let tl = gsap.timeline();
function section1Ani() {
    tl.from(spanText1Section1, { // 텍스트 애니
        opacity: 0, y: -10, duration: 0.5,
        yoyo: true, stagger: { from: 'center', each: 0.1 }
    })
        .fromTo(pText1Section1, { opacity: 0, y: 50 }, { // 텍스트 애니
            opacity: 1, y: 0, duration: 1, stagger: 0.2
        }, '-=0.8')
        .fromTo(rotateImg, { opacity: 0, rotateY: 180 }, { // 이미지 애니
            opacity: 1, rotateY: 0, duration: 1, stagger: 0.2, ease: Power2.easeInOut
        }, "-=1")
        .from(pText2Section1, { opacity: 0, y: 50, duration: 1 }, "-=0.5"); // 텍스트 애니
};
// 섹션-1 이미지 마우스 오버/아웃
let imgs = document.querySelectorAll(".section-1 .img-container > .img");
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
// 섹션-2 배너 애니
const section2 = document.querySelector(".section-2");
const section2BannerImg = section2.querySelector(".bg-img");
gsap.registerPlugin(ScrollTrigger);
const section2Banner = () => {
    gsap.from(section2BannerImg, {
        width: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section2,
            start: "top+=100 bottom",
            toggleActions: "restart"
        }
    });
}