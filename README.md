# 📘 Mino

가볍고 빠르게 문서를 작성하고 관리할 수 있는 **개인용 Markdown 기반 노트 서비스**  
React + Vite + Supabase 기반의 Notion Lite 프로젝트

---

## 🚀 소개 (Overview)

**Mino**는 복잡하고 무거운 기능을 최소화하고,  
가볍고 직관적인 문서 작성 경험을 제공하기 위해 만들어진 개인용 노트 서비스입니다.

React + Vite 환경에서 빠른 개발 경험을 제공하며,  
Supabase의 Auth · Database · Storage를 활용해 완전한 풀스택 흐름을 구현할 수 있습니다.

Markdown 기반 에디터를 도입하여 Notion 스타일의 문서 작성 흐름을 간단하고도 유연하게 제공합니다.

---

## 🛠 기술 스택 (Tech Stack)

### **Frontend**

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Markdown Editor (react-markdown + remark plugins)

### **Backend / Infra**

- Supabase
  - Auth
  - PostgreSQL
  - Storage

### **Tools**

- ESLint / Prettier
- Vercel / Netlify (배포 예정)
- GitHub Actions (CI/CD 예정)

---

## 📄 주요 기능 (Features)

### 🔐 1. 사용자 인증

- 이메일/비밀번호 로그인
- Supabase Auth 기반 세션 관리
- 자동 로그인 유지

### 📝 2. 문서 관리 (CRUD)

- 문서 생성 / 삭제
- 문서 제목 및 내용 수정
- 최근 수정순 문서 리스트
- 실시간 UI 반영

### 🧾 3. Markdown 에디터

- Heading (H1~H3)
- Bold / Italic / Code
- 리스트 / 체크리스트
- 링크
- 이미지 삽입
- Preview 실시간 반영

### 🖼 4. 이미지 업로드

- Supabase Storage에 파일 업로드
- Markdown 이미지 태그 자동 생성
- 문서 내부 이미지 삽입

### 💾 5. 자동 저장

- 입력 후 debounce(800ms)로 자동 저장
- “Saving…” → “Saved” 상태 표시

### 🔍 6. 검색 기능

- 문서 제목 기준 검색
- 즉시 필터링

### 🧭 7. 사이드바

- 문서 목록
- 검색창
- 새 문서 생성 버튼
- 사이드바 접기 / 펼치기

---

## 🛠 설치 및 실행 (Getting Started)

> 진행 후 아래 내용을 채울 예정입니다.

---

## 🌐 배포 (Deployment)

- Vercel 또는 Netlify 배포 예정
- 환경 변수는 해당 플랫폼의 Environment Variables로 관리합니다.

---

## 📌 향후 개선 예정 (Plan)

- 태그 / 폴더 기능
- 다크 모드
- 문서 버전 히스토리
- 공유 링크 기능
- GPT 기반 문서 요약
- Drag & Drop 정렬 기능

---

## 🙋‍♂️ 개발자 소개

본 프로젝트는 React · Supabase · Markdown 기반 노트 서비스를 학습하고 직접 구현하기 위해 진행되는  
1인 개발 프로젝트입니다.

---

## 📜 License

MIT License
