import { motion } from "framer-motion";
import {
  FaServer,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Passionate About <br />
            <span className="text-cyan-400">
              Technology & Infrastructure
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

              {/* Card */}
              <div className="relative bg-[#0d1117]/80 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">

                <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                  Who Am I?
                </h3>

                <p className="text-gray-300 leading-8 mb-6">
                  I am an IT enthusiast with experience in system
                  administration, web development, and network
                  infrastructure. Passionate about building scalable
                  applications, managing servers, and creating modern
                  digital solutions.
                </p>

                <p className="text-gray-400 leading-8">
                  Currently focusing on DevOps engineering, Linux
                  server administration, React.js development,
                  Docker containerization, and infrastructure
                  automation.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-5 mt-10">

                  <div className="text-center border border-white/10 rounded-2xl py-5 bg-white/5">
                    <h4 className="text-3xl font-bold text-cyan-400">
                      2+
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Years Learning
                    </p>
                  </div>

                  <div className="text-center border border-white/10 rounded-2xl py-5 bg-white/5">
                    <h4 className="text-3xl font-bold text-cyan-400">
                      10+
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Projects
                    </p>
                  </div>

                  <div className="text-center border border-white/10 rounded-2xl py-5 bg-white/5">
                    <h4 className="text-3xl font-bold text-cyan-400">
                      5+
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Technologies
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Card 1 */}
            <div className="group bg-[#0d1117]/80 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-8 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaServer className="text-cyan-400 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                System Administration
              </h3>

              <p className="text-gray-400 leading-7">
                Managing Linux servers, deployment environments,
                VPS configuration, monitoring systems, and
                infrastructure optimization.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#0d1117]/80 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-8 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaCode className="text-cyan-400 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Web Development
              </h3>

              <p className="text-gray-400 leading-7">
                Building responsive web applications using React.js,
                Laravel, TailwindCSS, and modern frontend
                development practices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#0d1117]/80 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-8 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaNetworkWired className="text-cyan-400 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Networking & Infrastructure
              </h3>

              <p className="text-gray-400 leading-7">
                Experienced with network configuration, Mikrotik,
                Cisco devices, CCTV systems, and infrastructure
                implementation.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}