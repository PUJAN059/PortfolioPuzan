"use client";

import { useEffect, useRef } from "react";

const contactInfo = [
  {
    label: "Email (Primary)",
    value: "githubpujan059@gmail.com",
    href: "mailto:githubpujan059@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Email (Secondary)",
    value: "pujansubedi069@gmail.com",
    href: "mailto:pujansubedi059@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "9816668863",
    href: "tel:+9779816668863",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#EEEEEE] animate-on-scroll text-center">
          Get In <span className="text-[#00ADB5]">Touch</span>
        </h2>
        <p className="text-[#EEEEEE]/60 text-base sm:text-lg mb-10 sm:mb-14 text-center animate-on-scroll delay-1">
          Feel free to reach out — I&apos;d love to hear from you
        </p>

        {/* Name */}
        <div className="text-center mb-10 animate-on-scroll delay-2">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#393E46]/60 border border-[#EEEEEE]/5">
            <div className="w-10 h-10 rounded-full bg-[#00ADB5]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-[#EEEEEE]">Pujan Subedi</span>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {contactInfo.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative rounded-2xl overflow-hidden animate-on-scroll delay-${Math.min(i + 3, 12)}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ADB5]/30 via-transparent to-[#00ADB5]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#393E46]/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#EEEEEE]/5 group-hover:border-[#00ADB5]/20 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,173,181,0.1)] group-hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center mx-auto mb-3 text-[#00ADB5]/70 group-hover:text-[#00ADB5] group-hover:bg-[#00ADB5]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-xs sm:text-sm text-[#EEEEEE]/40 font-medium uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base text-[#EEEEEE]/80 group-hover:text-[#00ADB5] transition-colors duration-300 break-all">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
