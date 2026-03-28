import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const location = useLocation();

  const hideMenus =
    location.pathname === "/technology" ||
    location.pathname === "/marketing" ||
    location.pathname === "/projects"  ||
  location.pathname === "/gallery"

  return (
    <footer className="bg-background border-t border-white/5 pt-2 pb-10 px-6">
      <div className={`max-w-7xl mx-auto grid gap-12 ${hideMenus ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-4"
        }`}>


        {/* Left block (always visible) */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="text-xl font-bold tracking-tighter text-foreground">

            </span>
          </Link>

          <p className="text-foreground/60 max-w-sm mb-6">
            Building the next generation of technology and growth engines for
            startups and enterprises worldwide.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/techcelebso/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-5 h-5 text-foreground/70" />
            </a>

            <a
              href="https://www.instagram.com/celebso_/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all"
            >
              <Instagram className="w-5 h-5 text-foreground/70" />
            </a>

            <a
              href="mailto:info@celebso.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              <Mail className="w-5 h-5 text-foreground/70" />
            </a>
          </div>
        </div>

        {/* 👉 Only hide these two blocks on technology / marketing / projects */}
        {!hideMenus && (
          <>
            <div>
              <h3 className="font-bold mb-6">Departments</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#technology" className="text-foreground/60 hover:text-primary text-sm">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#marketing" className="text-foreground/60 hover:text-primary text-sm">
                    Marketing & Growth
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                    Cloud Infrastructure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#projects" className="text-foreground/60 hover:text-primary text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-foreground/60 hover:text-primary text-sm">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/60 hover:text-primary text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* ✅ This line will stay on EVERY page */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-foreground/40 mb-3">
          © 2025 Tech Celebso. All rights reserved.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-xs text-foreground/40 hover:text-foreground"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-foreground/40 hover:text-foreground"
          >
            Terms of Service
          </a>
        </div>
      </div>

    </footer>
  );
}
