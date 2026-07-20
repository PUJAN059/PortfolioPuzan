"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "SQL", icon: "mysql" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
];

const creative = [
  { name: "Video Editing", icon: "video" },
  { name: "Photography", icon: "camera" },
  { name: "Graphic Design", icon: "design" },
  { name: "Music Production", icon: "music" },
  { name: "UI/UX Design", icon: "uiux" },
];

const hobbies = [
  { name: "Gaming", icon: "game" },
  { name: "Traveling", icon: "travel" },
  { name: "Riding", icon: "ride" },
  { name: "Playing Guitar", icon: "guitar" },
  { name: "Singing", icon: "sing" },
];

const techIcons = ["html5","css3","javascript","typescript","python","java","csharp","dotnet","react","nodedotjs","mysql","docker","git","figma"];

function SkillIcon({ icon }) {
  if (techIcons.includes(icon)) {
    return (
      <img
        src={`/projects/icons/${icon}.svg`}
        alt={icon}
        className="w-8 h-8"
        loading="lazy"
      />
    );
  }

  const svgIcons = {
    video: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="15.5" r="2.5" />
        <circle cx="8.5" cy="15.5" r="2.5" />
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 0 0 2.5-2.5c0-.61-.23-1.17-.59-1.61-.37-.44-.59-1.01-.59-1.64 0-1.38 1.12-2.5 2.5-2.5H20c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z" />
      </svg>
    ),
    music: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    uiux: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    game: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        <circle cx="18" cy="11" r="1" fill="currentColor" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </svg>
    ),
    travel: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    ride: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
    guitar: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 2l-2.5 2.5M15.5 6.5L18 4M9 12l-5.66 5.66a2 2 0 1 0 2.83 2.83L11.83 14.83" />
        <circle cx="12" cy="12" r="3" />
        <path d="M18.5 15.5l3 3M21.5 18.5l-3-3" />
      </svg>
    ),
    sing: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  };

  return svgIcons[icon] || <span className="text-lg font-bold text-[#00ADB5]">?</span>;
}

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-[#EEEEEE] animate-on-scroll">
          Skills & <span className="text-[#00ADB5]">Tools</span>
        </h2>
        <p className="text-[#EEEEEE]/60 text-center mb-8 sm:mb-12 animate-on-scroll delay-1">
          Technologies I work with & things I love
        </p>

        {/* Tech Skills */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-16">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`animate-on-scroll delay-${Math.min(i + 2, 12)}`}
            >
              <div
                className={`float-${(i % 15) + 1} group flex flex-col items-center gap-2 p-4 rounded-xl bg-[#393E46]/30 border border-[#EEEEEE]/5 hover:border-[#00ADB5]/50 hover:bg-[#00ADB5]/10 transition-all duration-300 cursor-default`}
              >
                <div className="text-[#EEEEEE]/70 group-hover:text-[#00ADB5] transition-colors duration-300">
                  <SkillIcon icon={skill.icon} />
                </div>
                <span className="text-xs text-[#EEEEEE]/60 group-hover:text-[#EEEEEE] transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Skills */}
        <h3 className="text-xl font-semibold mb-6 text-center text-[#EEEEEE] animate-on-scroll delay-3">
          Creative <span className="text-[#00ADB5]">& Passion</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto">
          {creative.map((skill, i) => (
            <div
              key={skill.name}
              className={`animate-on-scroll delay-${Math.min(i + 4, 12)}`}
            >
              <div
                className={`float-${(i % 15) + 6} group flex flex-col items-center gap-2 p-5 rounded-xl bg-[#393E46]/30 border border-[#00ADB5]/20 hover:border-[#00ADB5]/50 hover:bg-[#00ADB5]/10 transition-all duration-300 cursor-default`}
              >
                <div className="text-[#00ADB5] group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon icon={skill.icon} />
                </div>
                <span className="text-sm text-[#EEEEEE]/80 group-hover:text-[#EEEEEE] transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hobbies */}
        <h3 className="text-xl font-semibold mb-6 text-center text-[#EEEEEE] animate-on-scroll delay-5">
          Hobbies & <span className="text-[#00ADB5]">Interests</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-2xl mx-auto">
          {hobbies.map((hobby, i) => (
            <div
              key={hobby.name}
              className={`animate-on-scroll delay-${Math.min(i + 6, 12)}`}
            >
              <div
                className={`float-${(i % 15) + 11} group flex flex-col items-center gap-2 p-4 rounded-xl bg-[#393E46]/20 border border-[#EEEEEE]/5 hover:border-[#00ADB5]/30 transition-all duration-300 cursor-default`}
              >
                <div className="text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors duration-300">
                  <SkillIcon icon={hobby.icon} />
                </div>
                <span className="text-xs text-[#EEEEEE]/50 group-hover:text-[#EEEEEE]/80 transition-colors duration-300 text-center">
                  {hobby.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
