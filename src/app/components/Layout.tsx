import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Cover" },
    { path: "/personal-info", label: "Personal Info" },
    { path: "/career-objective", label: "Career Objective" },
    { path: "/her", label: "Her" },
    { path: "/skills", label: "Skills" },
    { path: "/achievements", label: "Achievements" },
    { path: "/experience", label: "Experience" },
    { path: "/hobbies", label: "Hobbies" },
    { path: "/strengths", label: "Strengths" },
    { path: "/media-work", label: "Media Work" },
    { path: "/declaration", label: "Declaration" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-end gap-4 text-xs whitespace-nowrap overflow-x-auto max-w-[78%]" style={{ perspective: "1000px" }}>
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.1, rotateY: 15, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ transformStyle: "preserve-3d", display: "inline-block" }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `hover:text-gray-300 transition-colors block ${
                      isActive ? "border-b border-white" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-gray-300 transition-colors ${
                      isActive ? "text-gray-300" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16" style={{ perspective: "1500px", overflowX: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, rotateY: -90, z: -300 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: 90, z: -300 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} /* Custom fluid ease curve */
            style={{ transformStyle: "preserve-3d" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
