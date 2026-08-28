export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Webtoon/Content" | "AI Automation" | "Web/SaaS" | "Audio/Video";
  tags: string[];
  link?: string;
  youtubeUrl?: string;
  status: "LIVE" | "COMPLETED" | "AUTOMATED";
  featured?: boolean;
}

export interface YouTubeChannel {
  name: string;
  url: string;
  description: string;
}

export const YOUTUBE_CHANNELS: YouTubeChannel[] = [
  { name: "Nadoo AI", url: "https://www.youtube.com/@nadooai-365", description: "AI 기술 및 자동화 프로젝트 연구소" },
  { name: "Wait My Babe", url: "https://www.youtube.com/@waitmybabe", description: "크리에이티브 컨텐츠 & 영상 채널" },
  { name: "AVOIR (아브아르)", url: "https://www.youtube.com/@%EC%95%84%EB%B8%8C%EC%95%84%EB%A5%B4AVOIR", description: "브랜드 공식 영상 채널" },
  { name: "Spill English", url: "https://www.youtube.com/@SpillEnglish-j9b", description: "AI 활용 어학/콘텐츠 채널" },
  { name: "DJ ZENEX", url: "https://www.youtube.com/@DJZENEX2", description: "음원 제작 및 음악 생성 채널" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NCS고양이 웹툰 제작 프로젝트",
    description: "AI 이미지 생성 기술과 스토리텔링을 결합하여 제작한 고양이 캐릭터 기반 웹툰 콘텐츠.",
    category: "Webtoon/Content",
    tags: ["AI Webtoon", "Midjourney", "Image-to-Image"],
    status: "COMPLETED",
    featured: true,
  },
  {
    id: "2",
    title: "Juma 알바 생존기 웹툰 제작 프로젝트",
    description: "일관성 있는 캐릭터 생성을 통해 완성도를 높인 알바 에피소드 AI 웹툰 프로젝트.",
    category: "Webtoon/Content",
    tags: ["Character Consistency", "AI Webtoon"],
    status: "COMPLETED",
    featured: true,
  },
  {
    id: "3",
    title: "그날의 남녀 제작 프로젝트",
    description: "감성적인 연출과 AI 그래픽 생성을 활용한 스토리형 숏폼/웹툰 시네마틱 프로젝트.",
    category: "Webtoon/Content",
    tags: ["Storytelling", "AI Art"],
    status: "COMPLETED",
  },
  {
    id: "4",
    title: "아브아르 홈페이지 제작 프로젝트",
    description: "브랜드 정체성을 극대화한 인터랙티브 모던 웹사이트 구축 프로젝트.",
    category: "Web/SaaS",
    tags: ["Web Design", "Next.js", "Brand Landing"],
    status: "LIVE",
    featured: true,
  },
  {
    id: "5",
    title: "피드스캔 AI 제작 프로젝트",
    description: "피드 이미지 및 텍스트 데이터를 분석하여 최적화 분석 리포트를 제공하는 AI 서비스.",
    category: "Web/SaaS",
    tags: ["AI Analysis", "Computer Vision", "SaaS"],
    status: "LIVE",
  },
  {
    id: "6",
    title: "유튜브 쇼츠 자동화 제작 프로젝트",
    description: "대본 작성, 음성 합성(TTS), 자막 및 영상 합성까지 전 과정을 자동화한 파이프라인.",
    category: "AI Automation",
    tags: ["Python", "Shorts Automation", "FFmpeg", "TTS"],
    status: "AUTOMATED",
    featured: true,
  },
  {
    id: "7",
    title: "전자책 자동화 제작 프로젝트",
    description: "주제 선정부터 목차 구성, 내용 작성 및 PDF 디자인 레이아웃까지 자동 생성하는 시스템.",
    category: "AI Automation",
    tags: ["LLM Automation", "E-Book", "PDF AutoGen"],
    status: "AUTOMATED",
  },
  {
    id: "8",
    title: "음원 제작 및 믹싱 프로젝트",
    description: "Suno/Udio 등 AI 생성 음악과 전문 믹싱 파이프라인을 결합한 하이퀄리티 오디오 제작.",
    category: "Audio/Video",
    tags: ["AI Audio", "Mixing", "Music Gen"],
    status: "COMPLETED",
  },
  {
    id: "9",
    title: "자동화 생성 (카드뉴스) 제작 프로젝트",
    description: "트렌드 키워드를 수집하여 템플릿 기반으로 카드뉴스를 자동 생성 및 배포하는 도구.",
    category: "AI Automation",
    tags: ["Marketing Automation", "Image Gen"],
    status: "AUTOMATED",
  },
  {
    id: "10",
    title: "PDF 변환 사이트 제작 프로젝트",
    description: "대용량 문서 변환 및 AI 요약 기능을 포함한 웹 기반 PDF 유틸리티 툴.",
    category: "Web/SaaS",
    tags: ["PDF Tool", "AI Parser", "Web App"],
    status: "LIVE",
  },
  {
    id: "11",
    title: "나두 Ai (Nadoo AI) 제작 프로젝트",
    description: "AI 솔루션 연구 및 다채로운 프롬프트 엔지니어링 프로젝트를 아우르는 코어 플랫폼.",
    category: "Web/SaaS",
    tags: ["Core AI Lab", "Prompt Engineering"],
    status: "LIVE",
    featured: true,
  },
  {
    id: "12",
    title: "영상 투 텍스트 (Video-to-Text) 프로젝트",
    description: "유튜브 또는 영상 파일의 음성을 고정밀로 추출하고 핵심 내용을 요약해 주는 AI 툴.",
    category: "AI Automation",
    tags: ["Whisper API", "STT", "Summary AI"],
    status: "AUTOMATED",
  },
  {
    id: "13",
    title: "나두 오토메이션 (Nadoo Automation) 프로젝트",
    description: "반복적인 업무 프로세스를 AI 에이전트로 엮어 인건비를 줄이는 비즈니스 자동화 파이프라인.",
    category: "AI Automation",
    tags: ["AI Agent", "RPA", "Workflow"],
    status: "AUTOMATED",
  },
    {
    id: "14",
    title: "나두 탭링크 (Nadoo Automation) 프로젝트",
    description: "스마트폰으로 틱톡,유튜브 등 영상을 보다가 링크가 나오면 아이폰 뒷면 두번 두드리기로 바로가기 ",
    category: "AI Automation",
    tags: ["AI Agent", "RPA", "Workflow"],
    status: "AUTOMATED",
  },
];
