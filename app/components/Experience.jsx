"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Full Stack Projects",
    period: "2023 - Present",
    description:
      "Building full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed multiple projects including e-commerce platforms, training institutes, and multi-section web apps.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Git & GitHub",
    company: "Version Control",
    period: "2022 - Present",
    description:
      "Proficient in Git workflow and GitHub for version control, collaboration, branching strategies, pull requests, and managing code across multiple projects and teams.",
    tags: ["Git", "GitHub", "Branching", "Collaboration", "PRs"],
  },
  {
    title: "UI/UX Designer",
    company: "Design & Prototyping",
    period: "2022 - 2023",
    description:
      "Designed intuitive user interfaces and interactive prototypes. Focused on creating clean, user-centric designs with modern design systems and responsive layouts.",
    tags: ["Figma", "Design Systems", "Prototyping", "Wireframing"],
  },
  {
    title: "Java Developer",
    company: "Object-Oriented Programming",
    period: "2022 - 2023",
    description:
      "Developed applications using Java with a strong foundation in object-oriented programming, data structures, and algorithms. Built console-based and GUI applications.",
    tags: ["Java", "OOP", "Data Structures", "Algorithms"],
  },
  {
    title: "Python Developer",
    company: "Scripting & Automation",
    period: "2022 - 2023",
    description:
      "Built automation scripts, weather API integrations, chatbots, and data processing solutions using Python. Worked with Flask, REST APIs, and NLP libraries.",
    tags: ["Python", "Flask", "REST API", "NLP", "Automation"],
  },
  {
    title: "Junior Developer",
    company: "Web Development",
    period: "2020 - 2021",
    description:
      "Started my professional journey building websites and learning best practices. Collaborated on frontend and backend tasks to deliver clean, functional web solutions.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export default function Experience() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#EEEEEE] animate-on-scroll">
          My <span className="text-[#00ADB5]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden animate-on-scroll delay-${Math.min(index + 1, 7)}`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ADB5]/30 via-transparent to-[#00ADB5]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#393E46]/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#EEEEEE]/5 group-hover:border-[#00ADB5]/20 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,173,181,0.1)] group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-0 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE] group-hover:text-[#00ADB5] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-[#00ADB5]/80 text-sm font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-[#EEEEEE]/40 text-xs sm:text-sm shrink-0 font-mono bg-[#00ADB5]/5 px-2 py-0.5 rounded-md border border-[#00ADB5]/10">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#EEEEEE]/60 text-sm leading-relaxed mb-4 group-hover:text-[#EEEEEE]/75 transition-colors duration-300">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-[#00ADB5]/10 text-[#00ADB5]/80 rounded-md border border-[#00ADB5]/15 group-hover:bg-[#00ADB5]/15 group-hover:border-[#00ADB5]/25 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
