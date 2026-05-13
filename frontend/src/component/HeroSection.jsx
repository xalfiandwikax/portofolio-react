import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: "url('/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/70 to-black/30"></div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-8"
          >
            🚀 ISP Terbaik 2026
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          >
            Anytime,
            <br />
            Anywhere
            <br />
            <span className="text-blue-400">
              Any Connectivity.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl"
          >
            PT. Teleport Data Persada menghadirkan internet tanpa batas wilayah.
            Akses dunia kapanpun dan dimanapun melalui Fiber Optic, Wireless,
            dan VSAT dengan koneksi cepat, stabil, dan terpercaya.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-xl font-semibold shadow-2xl transition duration-300">
              Berlangganan Sekarang
            </button>

            <button className="border border-white/20 hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition duration-300">
              Lihat Cakupan Area
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6 z-20">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center py-8">
            
            <div>
              <h3 className="text-3xl font-bold text-white">
                98%
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                SLA Guarantee
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                Support Center
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                ∞
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                Unlimited Access
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Dedicated
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                CIR Connection
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}