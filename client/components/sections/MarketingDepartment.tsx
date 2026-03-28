import {
  TrendingUp,
  BarChart3,
  Users,
  Share2,
  Target,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function MarketingDepartment() {
  const departments = [
    {
      title: "Marketing & Growth",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      description: "Data-driven marketing systems that convert interest into revenue.",
      features: [
        { name: "Influencer Marketing (micro & macro influencers)", icon: <Search className="w-4 h-4" /> },
        { name: "PR Marketing (brand visibility & media reach)", icon: <Target className="w-4 h-4" /> },
        { name: "Viral Marketing Campaigns", icon: <Users className="w-4 h-4" /> },
        { name: "Meta Ads (Facebook & Instagram Ads)", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "SEO (Search Engine Optimization)", icon: <Share2 className="w-4 h-4" /> },
        { name: "Lead Generation & Funnel Optimization", icon: <TrendingUp className="w-4 h-4" /> },
      ],
      color: "from-purple-500/20 to-pink-500/20",
      id: "marketing",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden/" id="marketing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Marketing & Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Data-driven marketing systems that convert interest into revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, x: 30 }}
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
