import ProjectImage from "./ProjectImage";

const projects = [
  {
    title: "GroceryKart",
    description:
      "A full-stack grocery web application built as my final year project using the MERN stack. Features user authentication, product catalog with categories, shopping cart, secure payment processing, order management, and an admin dashboard for inventory control.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    link: "#",
    image: null,
  },
  {
    title: "Pacific Barista",
    description:
      "A comprehensive web application for Pacific Barista, a barista training institute. Built with the MERN stack, it features course listings, enrollment management, training schedules, and student progress tracking.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "#",
    image: null,
  },
  {
    title: "Pocomat Web App",
    description:
      "A multi-section web application for Pocomat featuring three distinct platforms: Computer Academy for tech courses, Abroad Study for international education guidance, and Web Designers for showcasing design services. Each section has its own dedicated pages and functionality.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    link: "https://pocomat.com",
    image: "/projects/pocomat.png",
  },
  {
    title: "Weather Detector",
    description:
      "A Python-based weather application that fetches real-time weather data for any city using a third-party weather API. Displays temperature, humidity, wind conditions, and forecasts with a clean interface.",
    tags: ["Python", "REST API", "Weather API", "JSON"],
    link: "#",
    image: null,
  },
  {
    title: "Smart Bridge System",
    description:
      "An IoT-based smart bridge system built using Arduino, sound sensors, water level sensors, and cloud computing. When water levels rise or a boat approaches, the system automatically opens the bridge and triggers a buzzer alert for safety.",
    tags: ["Arduino", "IoT", "Cloud Computing", "Sensors", "C++"],
    link: "#",
    image: null,
  },
  {
    title: "Chatbot",
    description:
      "A conversational chatbot built in my free time that holds natural, human-like conversations. Uses natural language processing to understand context and generate meaningful responses.",
    tags: ["Python", "NLP", "AI", "Machine Learning"],
    link: "#",
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#EEEEEE]">
          Featured <span className="text-[#00ADB5]">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : ""
                } relative group`}
              >
                <div className="rounded-3xl p-2 bg-gradient-to-br from-[#00ADB5]/20 to-transparent border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,173,181,0.15)]">
                  <div className="rounded-2xl overflow-hidden">
                    <ProjectImage src={project.image} alt={project.title} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } space-y-4`}
              >
                <p className="text-[#00ADB5] text-lg font-medium">
                  Featured Project
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#EEEEEE]">
                  {project.title}
                </h3>
                <div className="bg-[#393E46]/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-[#EEEEEE]/10">
                  <p className="text-sm sm:text-base text-[#EEEEEE]/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-[#00ADB5]/20 text-[#00ADB5] rounded-full border border-[#00ADB5]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors font-medium"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
