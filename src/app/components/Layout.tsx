import { Outlet, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Cover" },
    { path: "/personal-info", label: "Personal Info" },
    { path: "/career-objective", label: "Career Objective" },
    { path: "/her", label: "Her" },
    { path: "/skills", label: "Skills" },
    { path: "/achievements", label: "Achievements" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/hobbies", label: "Hobbies" },
    { path: "/portfolio", label: "Portfolio" },
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
          <div className="hidden md:flex gap-6 text-sm">
            {navItems.slice(0, 7).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${
                    isActive ? "border-b border-white" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
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
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
