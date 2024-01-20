window.addEventListener("load", () => {
    // 로딩이 완료되면 로딩 화면 숨기기
    const loadingContainer = document.querySelector("#loading-screen");
    // setTimeout(() => {
        loadingContainer.style.display = "none";
        // 비디오 애니메이션 실행
        videoTextAni();
        // 섹션-1 애니메이션 실행
        sectionAni1();
        // 섹션-2 애니메이션 실행
        sectionAni2()
        // Partners 애니메이션 실행
        sectionAni3();
    // }, 1000);
});
// 스크롤 이벤트
window.addEventListener("scroll", function () {
    // 스크롤 위치가 맨 위로 올라갔을 때 헤더 보이기
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition === 0) {
        header.style.transform = "translateY(0)";
    }
    // 헤더 스타일 변경
    headerScroll();
    // 탑버튼 보이기
    topButtonScroll();
});
// 휠 이벤트
window.addEventListener("wheel", (e) => {
    if(0 < e.deltaY) {
        header.style.transform ="translateY(-100%)";
    }else {
        header.style.transform = "translateY(0)";
    }
})
// 휴대폰 휠 이빈트
let startY;
window.addEventListener("touchstart", function (e) {
    startY = e.touches[0].clientY;
});
window.addEventListener("touchmove", function (e) {
    var deltaY = startY - e.touches[0].clientY;
    if (deltaY > 0) {
        header.style.transform = "translateY(-100%)";
    } else if (deltaY < 0 ) {
        header.style.transform = "translateY(0)";
    }
    startY = e.touches[0].clientY;
});
// --------------------헤더--------------------
const header = document.getElementById("header");
const headerLogo = document.querySelector("#logo a");
const headerToggle = document.querySelector("#toggle-icon i");
const section1 = document.querySelector(".section-1");
function headerScroll() {
    const section = section1.getBoundingClientRect();
    if (section.top <= 0) {
        header.style.backgroundColor = "rgba(246, 246, 246, 0.5)";
        headerLogo.style.color = "#2457BD";
        headerToggle.style.color = "#2457BD";
    } else {
        // 스타일 초기화
        header.style.backgroundColor = "transparent";
        headerLogo.style.color = "#F6F6F6";
        headerToggle.style.color = "#F6F6F6";
    }
}
// --------------------탑버튼--------------------
const topButton = document.getElementById("top-btn");
const videoSection = document.querySelector("#video-container");
const videoSectionBottom = videoSection.getBoundingClientRect().bottom;
function topButtonScroll() {
    const section = section1.getBoundingClientRect();
    if(section.top < videoSectionBottom) {
        topButton.style.opacity = 1;
    }else {
        topButton.style.opacity = 0;
    }
}
// --------------------섹션-video--------------------
const videoText = document.querySelectorAll("#text-container > span");
function videoTextAni() {
    gsap.from(videoText, {
        y: 50,
        opacity: 0,        
        duration: 1,
        delay: 0.5,
        stagger: {
            each: 0.5
        }
    })
}
// --------------------섹션-1--------------------
gsap.registerPlugin(ScrollTrigger);
const sectionTitleSpan1 = document.querySelectorAll(".section-1 > .title > span");
const sectionTitleP1 = document.querySelectorAll(".section-1 > .title > p");
const rotateImg = document.querySelectorAll(".img-container > div");
const sectionDescription1 = document.querySelector(".section-1 .description > p");
function sectionAni1() {
    const tl = gsap.timeline();
    // 타이틀 애니
    tl.from(sectionTitleSpan1, {
        opacity: 0, y: -10, duration: 0.5,
        stagger: { from: 'center', each: 0.1 }
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
//--------------------탑버튼--------------------
