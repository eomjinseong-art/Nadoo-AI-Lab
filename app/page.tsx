"use client";

import React, { useState } from "react";
import { PROJECTS, YOUTUBE_CHANNELS, Project } from "@/data/projects";
import { 
  Sparkles, 
  Youtube, 
  ExternalLink, 
  Send, 
  Bot, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function Home() {
  const [filter, setFilter] = useState<string>("ALL");
  const [formStatus, setFormStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS">("IDLE");

  const categories = ["ALL", "AI Automation", "Web/SaaS", "Webtoon/Content", "Audio/Video"];

  const filteredProjects = filter === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Formspree 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");
    const form = e.currentTarget;
    const data = new FormData(form);

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpadyby";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("SUCCESS");
        form.reset();
      } else {
        alert("제출 중 오류가 발생했습니다. Formspree ID를 확인해주세요.");
        setFormStatus("IDLE");
      }
    } catch (err) {
      alert("제출 실패. 네트워크를 확인해주세요.");
      setFormStatus("IDLE");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-accent-glow border border-indigo-500/30">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>AI LAB & AUTOMATION STUDIO</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-indigo-400">
          Nadoo AI Lab
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200/80 font-light tracking-wide italic">
          &ldquo;Create your world&rdquo;
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          최신 AI 기술을 실험하고, 자동화 파이프라인과 실전 웹 프로덕트를 창작합니다.
          아이디어를 검증 가능한 현실의 비즈니스 도구로 구현합니다.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
          >
            <span>제작 및 프로젝트 문의</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl glass-card text-gray-300 hover:text-white transition-all border border-gray-800"
          >
            프로젝트 둘러보기
          </a>
        </div>
      </section>

      {/* 2. YOUTUBE CHANNELS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Youtube className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl font-bold text-white">Official YouTube Channels</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {YOUTUBE_CHANNELS.map((ch, idx) => (
            <a
              key={idx}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card transition-all group flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-100 group-hover:text-red-400 transition-colors flex items-center gap-2">
                    {ch.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                </div>
                <p className="text-xs text-gray-400 mt-2">{ch.description}</p>
              </div>
              <div className="text-[11px] text-red-400/80 font-semibold uppercase tracking-wider">
                Subscribe Channel →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. PROJECTS GRID SECTION */}
      <section id="projects" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800/80 pb-6">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Lab Projects ({PROJECTS.length})</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "glass-card text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                      project.status === "LIVE"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : project.status === "AUTOMATED"
                        ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-gray-900/80 text-gray-400 px-2 py-0.5 rounded border border-gray-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTACT / INQUIRY SECTION (FORMSPREE) */}
      <section id="contact" className="p-8 md:p-12 rounded-3xl glass-card border border-indigo-500/20 space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Project & Automation Inquiry</h2>
          <p className="text-sm text-gray-400">
            필요한 AI 도구 제작, 웹툰/콘텐츠 제작, 업무 자동화 파이프라인 구축 문의를 남겨주세요.
            검토 후 신속히 연락드립니다.
          </p>
        </div>

        {formStatus === "SUCCESS" ? (
          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center space-y-3 max-w-md mx-auto">
            <CheckCircle2 className="w-10 h-10 text-indigo-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">문의가 성공적으로 전달되었습니다!</h3>
            <p className="text-xs text-gray-300">내용을 확인한 후 빠르게 답변드리겠습니다.</p>
            <button
              onClick={() => setFormStatus("IDLE")}
              className="text-xs text-indigo-400 underline pt-2"
            >
              추가 문의 작성하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">성함 / 기업명</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">회신받을 이메일</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@domain.com"
                  className="w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">문의 유형</label>
              <select
                name="category"
                className="w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="AI 자동화 구축">AI 자동화 구축 문의</option>
                <option value="AI 웹툰/콘텐츠 제작">AI 웹툰/콘텐츠 제작 문의</option>
                <option value="웹/SaaS 개발">웹사이트 / SaaS 개발 문의</option>
                <option value="기타 제휴">기타 제휴 및 협업</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">문의 내용</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="구현하고 싶으신 아이디어나 자동화 요구사항을 자유롭게 작성해 주세요."
                className="w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === "SUBMITTING"}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{formStatus === "SUBMITTING" ? "전송 중..." : "문의하기 송신"}</span>
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-600 border-t border-gray-900 pt-8">
        <p>© {new Date().getFullYear()} Nadoo AI Lab. All rights reserved.</p>
      </footer>
    </main>
  );
}
