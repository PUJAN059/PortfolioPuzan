"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const roles = [
  "Software Engineer",
  "UI/UX Designer",
  "Full Stack Developer",
  "Problem Solver",
];

export default function Banner() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 sm:pt-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-[#00ADB5] text-base sm:text-lg font-medium">Hello! I Am</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#EEEEEE]">
            Pujan Subedi
            <span className="text-[#00ADB5]">.</span>
          </h1>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-[#00ADB5] text-base sm:text-lg font-medium tracking-wide">A Developer who</p>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#EEEEEE] uppercase tracking-tight">Breaks</span>
              <span className="text-sm sm:text-base text-[#EEEEEE]/40 font-light lowercase italic">bugs.</span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-[#EEEEEE]/30 font-light uppercase tracking-widest">Not</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#EEEEEE] uppercase tracking-tight">Production.</span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3 pt-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00ADB5] uppercase tracking-tight">Builds</span>
              <span className="text-sm sm:text-base text-[#EEEEEE]/50 font-light lowercase italic">products</span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-[#EEEEEE]/30 font-light uppercase tracking-widest">people can</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#EEEEEE] uppercase tracking-tight">Rely on.</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <span className="text-xs sm:text-sm text-[#00ADB5]/60 font-light uppercase tracking-[0.2em]">Clean</span>
              <span className="w-1 h-1 rounded-full bg-[#00ADB5]/40" />
              <span className="text-xs sm:text-sm text-[#00ADB5]/60 font-light uppercase tracking-[0.2em]">Fast</span>
              <span className="w-1 h-1 rounded-full bg-[#00ADB5]/40" />
              <span className="text-xs sm:text-sm text-[#00ADB5]/60 font-light uppercase tracking-[0.2em]">Scalable</span>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <p className="text-base sm:text-lg md:text-xl text-[#EEEEEE]">
              I&apos;m a{" "}
              <span className="text-[#00ADB5] font-semibold">{text}</span>
              <span className="animate-pulse text-[#00ADB5]">|</span>
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#EEEEEE]/70 max-w-lg leading-relaxed">
            I&apos;m a passionate developer with a love for creating beautiful,
            functional, and user-centric digital experiences. I specialize in
            building modern web applications with cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#projects"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-[#222831] rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 border border-[#00ADB5]/50 hover:border-[#00ADB5] text-[#EEEEEE] rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image - visible on all screens */}
        <div className="flex justify-center items-center relative shrink-0">
          {/* Deep outer glow */}
          <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#00ADB5]/20 blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
          {/* Mid glow */}
          <div className="absolute w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] lg:w-96 lg:h-96 rounded-full bg-[#00ADB5]/25 blur-[40px] sm:blur-[50px] lg:blur-[60px]" />
          {/* Inner glow */}
          <div className="absolute w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-72 lg:h-72 rounded-full bg-[#00ADB5]/30 blur-[25px] sm:blur-[35px] lg:blur-[40px]" />

          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#00ADB5]/10 flex items-center justify-center relative">
            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full bg-gradient-to-b from-[#00ADB5]/40 to-[#00ADB5]/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,173,181,0.5),0_0_80px_rgba(0,173,181,0.3),0_0_120px_rgba(0,173,181,0.15)] border-2 border-[#00ADB5]/40">
              <Image
                src="/logo/logo.jpg"
                alt="Pujan Subedi"
                width={220}
                height={220}
                loading="eager"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            {/* Floating elements */}
            <div className="hidden sm:flex absolute top-4 right-8 w-10 h-10 lg:w-12 lg:h-12 bg-[#393E46]/80 rounded-lg backdrop-blur-sm border border-[#EEEEEE]/10 items-center justify-center">
              <span className="text-lg lg:text-xl text-[#EEEEEE]">&lt;/&gt;</span>
            </div>
            <div className="hidden sm:flex absolute bottom-8 left-4 w-10 h-10 lg:w-12 lg:h-12 bg-[#00ADB5]/20 rounded-lg backdrop-blur-sm border border-[#EEEEEE]/10 items-center justify-center">
              <span className="text-lg lg:text-xl text-[#EEEEEE]">{"{ }"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
