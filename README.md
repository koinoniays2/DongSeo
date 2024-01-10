# 기획의도
클라이언트 : 한의원을 대상으로 약재 판매 및 수입/제조 회사  
사이트 용도와 타겟층 : 한의원 원장들에게 회사를 홍보, 영업하기 위한 사이트
# Design
- 모바일 그리드  
360 x 640 columns 4, gutter 24, width 60  
- 컬러  
배경색 #F6F6F6, 강조색 $\bf{\large{\color{#2457BD}2457BD}}$ $\bf{\large{\color{#5A8DF3}5A8DF3}}$
- 폰트  
header 더잠실체, body 세종병원체
---
## Day 1 : section-1 Mobile Mode
- transition: font-size 1.2s ease;  
화면 리사이즈에 따른 폰트 변화
- loading screen  
윈도우 load 전 로딩 화면 설정
- gsap stagger  
inline 태그는 block 태그로 해야 적용됨
## Day 2 : section-1 Mobile Mode
### Update
- display: grid
