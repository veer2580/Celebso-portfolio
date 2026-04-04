import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import logo from "../assets/logo7.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Technology", to: "/technology" },
    { name: "Marketing", to: "/marketing" },
    { name: "Projects", to: "/projects" },
    { name: "Gallery", to: "/gallery" },
  ];

  const celebsoGroups = [
    "Tech Celebso",
    "Celebso Social Network",
    "Celebso Production",
    "Celebso Venture",
    "Personal Seek.AI",
    "Celebso Startup School",
    "Celebso Startup Valley",
    "ScanCartGo.com",
    "Celebso Group",
    "Aveen AI",
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 h-20 flex items-center",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center leading-none shrink-0 -ml-2 md:ml-0"
        >
          <img
            src={logo}
            alt="CELEBSO"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-yellow-400 transition-colors duration-300 outline-none">
                Celebso Groups
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-56 glass border-white/10 mt-2">
              {celebsoGroups.map((group) => (
                <DropdownMenuItem
                  key={group}
                  className="text-foreground/80 hover:text-primary hover:bg-white/5 focus:bg-white/5 cursor-pointer"
                >
                  {group}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="relative text-lg font-medium text-foreground/80
              hover:text-yellow-400 transition-colors duration-300
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-yellow-400
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </Button>

          <Link to="/">
            <Button className="rounded-full px-6 bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 bg-white/5 border border-white/10"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                  Celebso Groups
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-56 glass border-white/10">
                {celebsoGroups.map((group) => (
                  <DropdownMenuItem
                    key={group}
                    className="text-foreground/80 hover:text-primary hover:bg-white/5 focus:bg-white/5 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {group}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-yellow-400 hover:bg-yellow-400/10 px-2 py-2 rounded-lg transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}