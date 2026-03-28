import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";


export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = 50;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = "rgba(139, 92, 246, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Background Glows (Mockup Style) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mr-40 -mt-20 z-0" />
      <div className="absolute top-20 right-40 w-24 h-24 bg-red-600/30 rounded-full blur-[40px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
    
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
>
  <span className="text-white">
    Building The Future of <br className="hidden md:block" />
  </span>

  {/* Yellow left-to-right reveal */}
  <motion.span
  initial={{ clipPath: "inset(0 100% -12px 0)" }}
  animate={{ clipPath: "inset(0 0% -12px 0)" }}
  transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
  className="block text-yellow-400 leading-[1.15] pb-1"
   style={{ color: "rgba(245, 190, 30, 29,)" }}
>
  Technology & Growth
</motion.span>

</motion.h1>


        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We build systems, platforms, and growth engines that run businesses for years. 
          Specialized in enterprise-grade technology and data-driven marketing for startups and established brands.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-12"
        >
          

          {/* New Feature List (Celebso Groups) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {[
              { title: "Tech Celebso", desc: "Technology & Product Development" },
              { title: "Celebso Social Network", desc: "Community & Media Platform" },
              { title: "Celebso Venture", desc: "Startup & Investment Ecosystem" },
              { title: "Celebso Startup Valley", desc: "Innovation & Acceleration Hub" },
              { title: "Celebso Production", desc: "Creative & Digital Production" },
              { title: "Space Rentiya", desc: "Workspace & Space Rental Platform" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.08] cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base text-foreground/90">{item.title}</h3>
                  <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider font-semibold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
