import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// Get project root safely
const projectRoot = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "0.0.0.0", // safer than "::"
    port: 8080,
    fs: {
      // FIX: allow full project access (important)
      allow: [
        projectRoot,
        path.resolve(projectRoot, "client"),
        path.resolve(projectRoot, "shared"),
      ],
      // security (keep this)
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },

  build: {
    outDir: "dist/spa",
  },

  plugins: [
    react(),
    expressPlugin(), // your backend integration
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// Express plugin (dev only)
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only for development
    configureServer(server) {
      const app = createServer();

      server.middlewares.use(app);
    },
  };
}