import { motion } from "framer-motion";
import {
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaReact,
  FaLaravel,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";

import {
  SiNginx,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    title: "Linux",
    icon: <FaLinux />,
    level: "Advanced",
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    level: "Intermediate",
  },
  {
    title: "Git & GitHub",
    icon: <FaGitAlt />,
    level: "Advanced",
  },
  {
    title: "React.js",
    icon: <FaReact />,
    level: "Intermediate",
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
    level: "Intermediate",
  },
  {
    title: "Networking",
    icon: <FaNetworkWired />,
    level: "Advanced",
  },
  {
    title: "Nginx",
    icon: <SiNginx />,
    level: "Intermediate",
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
    level: "Intermediate",
  },
  {
    title: "TailwindCSS",
    icon: <SiTailwindcss />,
    level: "Intermediate",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    level: "Intermediate",
  },
  {
    title: "Server Management",
    icon: <FaServer />,
    level: "Advanced",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full"></div>

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
            Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-[#0d1117]/80 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {skill.title}
              </h3>

              {/* Level */}
              <p className="text-gray-400 mb-4">
                {skill.level}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-cyan-400 ${
                    skill.level === "Advanced"
                      ? "w-[90%]"
                      : "w-[70%]"
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}