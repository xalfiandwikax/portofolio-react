import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Arena Booking System",
    description:
      "Online booking system with dynamic sessions, Midtrans payment gateway, and diamond top-up features.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    tech: ["Laravel", "MySQL", "Midtrans", "TailwindCSS"],
    github: "#",
    demo: "#",
  },

  {
    title: "Company Profile Website",
    description:
      "Modern SPA company profile website built using React.js and TailwindCSS with responsive design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },

  {
    title: "Server Monitoring Dashboard",
    description:
      "Infrastructure monitoring dashboard for server resource tracking and uptime monitoring.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    tech: ["Linux", "Docker", "Nginx", "Monitoring"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-[#0d1117]/80 border border-white/10 hover:border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:opacity-80 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}