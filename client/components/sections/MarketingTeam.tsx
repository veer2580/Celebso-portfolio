import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import image14 from "../../assets/bablu.jpeg";
import image15 from "../../assets/aryan.jpeg";
import image16 from "../../assets/preeti.jpeg";
import image17 from "../../assets/monu.jpeg";
import image18 from "../../assets/royal.jpeg";

export function MarketingTeam() {
  const team = {
    name: "Marketing & Growth Team",
    members: [
       { name: "Bablu Kumar", role: "Senior Marketing Head", image: image14 },
        { name: "Preeti", role: "influencing marketing head", image: image16 },
      { name: "Monu Sharma", role: "Meta ads expert", image: image17 },
      { name: "Royal Kendra", role: "Outdoor marketing head", image: image18 },
    ]
  };

  return (
    <section className="py-24 px-6 relative scroll-mt-28" id="marketing-team">
      <div className="max-w-7xl mx-auto">

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold flex items-center gap-3 mb-12"
        >
          <span className="text-xl">📈</span>
          {team.name}
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
          {team.members.map((member, mIdx) => (
            <motion.div
              key={mIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: mIdx * 0.05 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#00A3FF]/20 group-hover:border-[#00A3FF] transition-all duration-500 z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 rounded-full bg-[#00A3FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              </div>

              <h4 className="font-bold text-sm md:text-base text-foreground transition-colors group-hover:text-[#00A3FF]">
                {member.name}
              </h4>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-foreground/40 font-bold mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
