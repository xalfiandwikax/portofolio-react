import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/70 backdrop-blur-lg border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Alfian Dwika M. P <span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {menus.map((menu) => (
            <li key={menu}>
              <Link
                to={menu}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/20">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {menus.map((menu) => (
              <li key={menu}>
                <Link
                  to={menu}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}