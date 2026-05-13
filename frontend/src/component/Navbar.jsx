import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Coverage", link: "#coverage" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-[999]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4">

        {/* Navbar Container */}
        <div
          className={`
            transition-all duration-300
            rounded-2xl
            px-6
            py-4
            shadow-2xl
            flex items-center justify-between

            ${
              scrolled
                ? "bg-white border border-gray-200"
                : "bg-white/10 backdrop-blur-xl border border-white/10"
            }
          `}
        >

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo2.png"
              alt="Teleport"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div
            className={`
              hidden md:flex items-center gap-10 font-medium

              ${
                scrolled
                  ? "text-gray-700"
                  : "text-white/80"
              }
            `}
          >
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-blue-500 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`
              md:hidden transition

              ${
                scrolled
                  ? "text-gray-700"
                  : "text-white"
              }
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3"
            >
              <div
                className={`
                  rounded-2xl
                  p-5
                  shadow-2xl
                  border
                  backdrop-blur-xl

                  ${
                    scrolled
                      ? "bg-white border-gray-200"
                      : "bg-white/10 border-white/10"
                  }
                `}
              >

                <div className="flex flex-col gap-5">

                  {menu.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        font-medium transition

                        ${
                          scrolled
                            ? "text-gray-700 hover:text-blue-500"
                            : "text-white hover:text-blue-400"
                        }
                      `}
                    >
                      {item.name}
                    </a>
                  ))}

                  <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-xl font-semibold transition duration-300">
                    Hubungi Kami
                  </button>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}