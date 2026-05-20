import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMdArrowDown } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Alfian Dwika
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              <TypeAnimation
                sequence={[
                  "System Administrator",
                  2000,
                  "DevOps Engineer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
              Passionate in building scalable infrastructure, developing
              modern web applications, and managing secure network systems.
              Experienced with React.js, Laravel, Linux Server, Docker,
              and cloud-based deployment workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:your@email.com"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-xl">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

              {/* Terminal Card */}
              <div className="relative bg-[#0d1117]/90 border border-cyan-500/20 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden backdrop-blur-xl">

                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                  <p className="text-sm text-gray-400 ml-4">
                    devops-terminal.sh
                  </p>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base space-y-4">

                  <div>
                    <span className="text-cyan-400">$</span>{" "}
                    <span className="text-white">
                      whoami
                    </span>
                    <p className="text-green-400 mt-1">
                      alfian_dwika
                    </p>
                  </div>

                  <div>
                    <span className="text-cyan-400">$</span>{" "}
                    <span className="text-white">
                      skills --list
                    </span>

                    <div className="flex flex-wrap gap-3 mt-3">
                      {[
                        "React.js",
                        "Laravel",
                        "Docker",
                        "Linux",
                        "Cisco",
                        "Mikrotik",
                        "Tailwind",
                        "Git",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-cyan-400">$</span>{" "}
                    <span className="text-white">
                      status
                    </span>

                    <p className="text-green-400 mt-2">
                      ● Available For Work
                    </p>
                  </div>

                  <div>
                    <span className="text-cyan-400">$</span>{" "}
                    <span className="text-white">
                      docker ps
                    </span>

                    <div className="mt-3 text-gray-400 leading-7">
                      <p>portfolio-react-app</p>
                      <p>nginx-production</p>
                      <p>laravel-booking-system</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <IoMdArrowDown className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
}