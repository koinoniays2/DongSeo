window.addEventListener("load", () => {
    // 로딩이 완료되면 로딩 화면 숨기기
    const loadingContainer = document.querySelector("#loading-screen");
    setTimeout(() => {
        loadingContainer.style.display = "none";
        // 섹션-1 애니메이션 실행
        sectionAni1();
        // 섹션-2 애니메이션 실행
        sectionAni2()
        // Partners 애니메이션 실행
        sectionAni3();
    }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
// --------------------섹션-1--------------------
const sectionTitleSpan1 = document.querySelectorAll(".section-1 > .title > span");
const sectionTitleP1 = document.querySelectorAll(".section-1 > .title > p");
const rotateImg = document.querySelectorAll(".img-container > div");
const sectionDescription1 = document.querySelector(".section-1 .description > p");
function sectionAni1() {
    const tl = gsap.timeline();
    // 타이틀 애니
    tl.from(sectionTitleSpan1, {
        opacity: 0, y: -10, duration: 0.5,
        yoyo: true, stagger: { from: 'center', each: 0.1 }
    })
        .fromTo(sectionTitleP1, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, stagger: 0.2
        }, '-=0.8')
    // 이미지 애니(rotate)
        .fromTo(rotateImg, { opacity: 0, rotateY: 180 }, {
            opacity: 1, rotateY: 0, duration: 1, stagger: 0.2, ease: Power2.easeInOut
        }, "-=1")
    // 내용 애니
        .from(sectionDescription1, { opacity: 0, y: 50, duration: 1 }, "-=0.5"); // 텍스트 애니
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
// 이미지 마우스 오버/아웃
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
const sectionTitleSpan2 = document.querySelectorAll(".section-2 > .title > span");
const sectionTitleP2 = document.querySelectorAll(".section-2 > .title > p");
const bookImg = document.querySelector("#book-container");
function sectionAni2() {
    const tl = gsap.timeline();
    // 타이틀 애니
    tl.from(sectionTitleSpan2, {
        opacity: 0, y: -10, duration: 0.5,
        stagger: { from: 'start', each: 0.1 }
    })
        .fromTo(sectionTitleP2, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, stagger: 0.2
        }, '-=1')
    // 책 애니
        .from(bookImg, { x: 1000, duration: 1.5, ease: "power3.out" }, "-=1") // 책 애니
    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top center",
        end: "bottom center",
        animation: tl
    });
    ScrollTrigger.refresh();
}
// 책 클릭 애니
const page = document.querySelector("#page-1");
const pOn = document.querySelector("#book-container > .book-text > p");
const bookButton = document.querySelector(".book-click");
page.addEventListener("click", () => {
    // 책 클릭 시 펼쳐짐
    page.classList.toggle("clicked");
    // 클릭 시 텍스트 on
    pOn.classList.toggle("on");
    if (pOn.classList.contains("on")) {
        pOn.style.transform = "scale(1)";
        bookButton.style.display = "none";
    } else {
        pOn.style.transform = "scale(0)";
        bookButton.style.display = "block";
    }
});

//--------------------섹션-3--------------------
const partners = document.querySelector("#partners");
const partnersT = document.querySelector("#partners-t-img");
const partnersB = document.querySelector("#partners-b-img");
const partnersP = document.querySelector("#partners > p")
const partnersImg = document.querySelectorAll("#partners > .logo-container > div");
const sectionDescription3 = document.querySelectorAll(".section-3 > .description > p");
function sectionAni3() {
    const tl = gsap.timeline();
    // partners 배경
    tl.from(partnersT, { opacity:0, x: 1000, duration: 0.8, })
    .from(partnersB, { opacity:0, x: -1000, duration: 0.8, }, "-=0.6")
    .from(partners, { opacity:0, x: 1000, duration: 0.8, },"-=1")
    // 타이틀
    .from(partnersP, { opacity:0, y: 20, duration: 0.5, })
    // 로고 이미지
    .from(partnersImg, { opacity:0, scale: 0, stagger: 0.3, ease: "back.out", duration: 0.5 },"-=0.2")
    .from(sectionDescription3, { opacity:0, y:50, duration:1, stagger:0.3 }, "-=0.3")
    // partners bottom 배경
    ScrollTrigger.create({
        trigger: ".section-3",
        start: "top center",
        animation: tl
    });
    ScrollTrigger.refresh();
}
