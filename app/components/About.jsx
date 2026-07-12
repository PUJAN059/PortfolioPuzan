export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-[#EEEEEE]">
          About <span className="text-[#00ADB5]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#EEEEEE]/80 text-base sm:text-lg leading-relaxed">
              I&apos;m a passionate developer who loves turning ideas into
              reality through clean code and thoughtful design. With experience
              in full-stack development, I build applications that are not only
              functional but also delightful to use.
            </p>
            <p className="text-[#EEEEEE]/80 text-base sm:text-lg leading-relaxed">
              I&apos;m currently looking to join a{" "}
              <span className="text-[#00ADB5] font-medium">
                cross-functional team
              </span>{" "}
              that values improving people&apos;s lives through accessible
              design and innovative technology.
            </p>
            <p className="text-[#EEEEEE]/80 text-base sm:text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or diving into
              the latest design trends.
            </p>
          </div>

          <div className="flex justify-center md:-mt-20">
            <div className="float-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-black text-[#00ADB5] leading-none">1+</div>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 sm:mt-6 md:mt-8 float-3">🚀</span>
              </div>
              <div className="text-center text-sm sm:text-base md:text-lg text-[#EEEEEE]/40 font-light tracking-widest uppercase mt-1 sm:mt-2">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
