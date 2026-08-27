# Nadoo AI Lab

최신 AI 기술을 실험하고, 자동화 파이프라인과 실전 웹 프로덕트를 창작합니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + Tailwind CSS
- **Components**: Lucide React Icons
- **Form**: Formspree (xnpadyby)
- **Deployment**: Vercel

## 프로젝트 구조

```
14. nadoo-ai-lab-fixed/
├── app/
│   ├── data/
│   │   └── projects.ts       # 프로젝트 & YouTube 채널 데이터
│   ├── globals.css           # 글로벌 스타일
│   ├── layout.tsx            # Root 레이아웃
│   └── page.tsx              # 메인 페이지
├── public/                   # 정적 파일
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 설치 및 실행

### 개발 모드
```bash
npm install
npm run dev
```

### 빌드 및 배포
```bash
npm run build
npm start
```

## Vercel 배포

1. GitHub에 푸시
2. Vercel에서 프로젝트 생성
3. 자동 배포 진행

## 주요 기능

- ✅ AI 프로젝트 포트폴리오 전시
- ✅ YouTube 채널 링크
- ✅ 카테고리 필터 (AI Automation, Web/SaaS, Webtoon/Content, Audio/Video)
- ✅ Formspree 기반 문의 폼 (xnpadyby 설정됨)
- ✅ 반응형 디자인 (Mobile-first)
- ✅ Dark theme with glassmorphism

## 문의 기능

폼 제출 시 Formspree로 자동 전송됩니다.
- 성함/기업명
- 이메일
- 문의 유형
- 상세 메시지

## License

© 2024 Nadoo AI Lab. All rights reserved.
