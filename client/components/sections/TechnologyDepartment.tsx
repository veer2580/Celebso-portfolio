import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TechnologyDepartment() {
  const departments = [
    {
      title: "Technology Department",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      description: "Custom-built enterprise solutions designed for scale and performance.",
      features: [
        { name: "Enterprise Web & App Development", icon: <Code2 className="w-4 h-4" /> },
        { name: "AI Automation & Internal Tools", icon: <Cpu className="w-4 h-4" /> },
        { name: "CRM / ERP & Custom Dashboards", icon: <Database className="w-4 h-4" /> },
        { name: "Cloud Infrastructure & DevOps", icon: <Cloud className="w-4 h-4" /> },
        { name: "Scalable SaaS Platforms", icon: <Database className="w-4 h-4" /> },
        { name: "Cyber Security & Data Protection Solutions", icon: <Shield className="w-4 h-4" /> },
      ],
      color: "from-blue-500/20 to-primary/20",
      id: "technology",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden/" id="technology">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technology Department
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Custom-built enterprise solutions designed for scale and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "relative group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2",
                "bg-gradient-to-br border border-white/10",
                dept.color
              )}
            >
              <div className="absolute inset-0 bg-background/40 backdrop-blur-xl rounded-3xl -z-10" />

              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{dept.title}</h3>
              <p className="text-foreground/70 mb-8">{dept.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + fIdx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-sm font-medium text-foreground/80">
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
