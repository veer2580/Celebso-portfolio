import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

export function Layout() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />

      <main className="relative z-0">
        <Outlet /> {/* 🔥 THIS SHOWS PAGES */}
      </main>

      <Footer />
    </div>
  );
}
