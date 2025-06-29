# 📷 Instagram Mockup Project

## 1. 프로젝트 개요

- **프로젝트명**: Instagram Mockup  
- **목적**: HTML, CSS, JavaScript를 활용해 인스타그램 메인 페이지를 구현함으로써 마크업, 스타일링, UI/UX 설계, DOM 구조, 반응형 설계의 기초 역량을 강화하기 위함  
- **개발 범위**: 프론트엔드 (HTML5, CSS3, JavaScript)  
- **사용 도구**: VSCode, GitHub  
- **개인 프로젝트**: 유현진  
- **구현 일정**: 2025.06.02 ~ 2025.06.05  

---

## 2. 기획 배경 및 벤치마킹

- **문제 인식**: HTML/CSS 이론 위주의 학습에서 벗어나 실전 프로젝트를 통해 구조와 스타일링을 체득할 필요성을 느낌  
- **벤치마킹 서비스**: Instagram Web 버전  
- **구현 목표**: HTML/CSS만으로 레이아웃과 상호작용 구현, 모바일 대응 일부 포함  

---

## 3. 서비스 플로우

| 페이지 | 구성 요소 | 기능 |
|--------|-----------|------|
| 메인 페이지 | 상단바, 사이드바, 피드, 스토리, 추천 | 인터페이스 구성 및 클릭 이벤트 |
| 피드 | 이미지, 사용자 정보, 좋아요/댓글 버튼 | 좋아요 토글, 댓글 입력 UI |
| 추천 영역 | 사용자 추천 목록 | 팔로우 버튼 인터랙션 |

---

## 4. 기능 명세서

| 기능명 | 설명 | 적용 기술 | 구현 여부 |
|--------|------|-----------|-----------|
| 상단 네비게이션 | 로고, 검색, 메뉴 아이콘 구성 | HTML, CSS | ✅ |
| 스토리 UI | 사용자 스토리 구현 | HTML, CSS | ✅ |
| 피드 카드 | 사진, 텍스트, 좋아요, 저장 버튼 구성 | HTML, CSS, JS | ✅ |
| 추천 팔로우 | 사이드바에 추천 사용자 표시 | HTML, CSS | ✅ |
| 반응형 레이아웃 | 모바일/데스크탑 레이아웃 전환 | CSS Media Query | ✅ |
| 기기 테마 | 어두운 테마, 밝은 테마 토글 기능 | HTML, CSS, JS | ✅ |

---

## 5. 페이지 구성 및 계층 구조

```
index.html
├── header 
│   ├── header__buttons (logo)
│   ├── header__search (search bar)
│   └── header__buttons (home, shop, messenger, login)
├── main
│   ├── section.content-container
│   │   ├── div.stories 
│   │   └── div.posts
│   └── div.side-menu
│       ├── side-menu__user-profile
│       ├── side-menu__suggestions-section
│       └── side-menu__footer
```

- **화면 흐름도**: 단일 페이지 구조로 사용자 진입 시 바로 피드 확인

---

## 6. 와이어프레임 및 목업

- Figma 기반으로 레이아웃을 설계 후 HTML/CSS로 구현  
- SVG 아이콘, 버튼 그룹, 사용자 카드 등 실제 인스타그램과 유사한 컴포넌트 구성 사용
![Image](https://github.com/user-attachments/assets/c491c1cb-4ce9-493a-900e-c6bc40da83c6)

![Image](https://github.com/user-attachments/assets/295f5910-c873-47ea-932c-154f16a078dd)

![Image](https://github.com/user-attachments/assets/feb89357-04fb-4f87-82f9-f109d3575ce3)

---

## 7. 기술 구현 설명

| 항목 | 설명 |
|------|------|
| HTML | 시멘틱 구조 구성(header, main, section, nav 등) |
| CSS | Flexbox 기반 레이아웃, 반응형 Media Query 사용 |
| JS | 기기 테마 토글 버튼 |
| 이미지 | SVG 아이콘 활용 및 재사용 가능한 클래스 네이밍 |

---

## 8. 개발 일정 및 기록

| 날짜 | 작업 내용 | 상태 |
|------|-----------|------|
| 6/2 | 웹서비스 기획 문서 작성 | 완료 |
| 6/2 ~ 6/3 | HTML 기본 구조 작성 및 스타일 적용 | 완료 |
| 6/3 | 반응형 레이아웃 적용 | 완료 |
| 6/4 | 기기 테마 토글 (다크 모드 기능 구현) | 문제 발생 (SVG 파일 로드 문제) |
| 6/5 | 기기 테마 전환 | 완료 |

---

## 9. 개선 및 확장 계획

- 로그인 기능 추가  
- 댓글 입력 기능 구현 및 로컬스토리지 저장 기능 추가

---

## 10. 결론 및 회고

- 실제 서비스의 UI/UX를 직접 구현하면서 구조 설계 감각 향상  
- 추후에는 API 기반의 실제 데이터 연동 및 사용자 인증 기능을 도입해보고 싶음
