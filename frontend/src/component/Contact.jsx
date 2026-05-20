import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Interested in collaboration, infrastructure projects,
            DevOps engineering, or web development? Feel free to
            contact me anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#0d1117]/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <p className="text-gray-400">
                  yourmail@email.com
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#0d1117]/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaWhatsapp />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  WhatsApp
                </h3>

                <p className="text-gray-400">
                  +62 812-XXXX-XXXX
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-5 pt-4">

              <a
                href="#"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-[#0d1117]/80 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-500/30 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-[#0d1117]/80 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-500/30 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-[#0d1117]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-500 outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-500 outline-none transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-3 text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-500 outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:opacity-80 transition"
                >
                  Send Message
                </button>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}