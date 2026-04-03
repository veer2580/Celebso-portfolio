import { Github, Linkedin, Twitter, Mail, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import image from "../../assets/veer-sir.jpeg";
import image1 from "../../assets/meena.jpeg";
import image2 from "../../assets/harpreet.jpeg";
import image3 from "../../assets/arti.jpeg";
import image4 from "../../assets/om.jpeg";
import image5 from "../../assets/ansh.png";
import image6 from "../../assets/sammer.png";
import image7 from "../../assets/harshwardhan.png";
import image8 from "../../assets/anurag.png";
import image9 from "../../assets/ashish.png";
import image10 from "../../assets/tulsi.png";
import image11 from "../../assets/arpan.jpeg";
import image12 from "../../assets/sudhanshu.jpeg";
import image13 from "../../assets/arti.jpeg";
import image14 from "../../assets/bablu.jpeg";
import image15 from "../../assets/aryan.jpeg";
import image16 from "../../assets/preeti.jpeg";
import image17 from "../../assets/asaram.png";
import image19 from "../../assets/monu.jpeg";
import image18 from "../../assets/royal.jpeg";




export function Teams() {
  const teams = [
    {
      name: "Management Team",
      members: [
        {
          name: "Veer Singh",
          role: "Founder & CEO",
          image: image
        },
        {
          name: "Arti Acharya",
          role: "Co-Founder & CoO",
          image: image3
        },
        {
          name: "Harpreet",
          role: " Operations Director",
          image: image2
        },
        {
          name: "Om Singh",
          role: "Director of Sales",
          image: image4
        },
        {
          name: "Meena Dhakad",
          role: "Business Analytics Lead",
          image: image1
        },
      ]
    },

    {
      name: "Technology Team",
      members: [
        { name: "Arti Acharya", role: "Senior Product Head", image: image13 },
        { name: "Asaram", role: " Senior Developer", image: image17 },
        { name: "Sudhanshu", role: "Senior Tech Lead", image: image12 },
        { name: "Arpan", role: "Senior Developer", image: image11 },

        { name: "Harshvardhan", role: "Full Stack Developer", image: image7 },
        // { name: "Radha Pandey", role: "Frontend Developer", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { name: "Tushar Prasad", role: "Full Stack Developer", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { name: "Anurag Sen", role: "Frontend Developer", image: image8 },
        { name: "Ashish", role: "Full Stack Developer", image: image9 },
        { name: "Ayatullah Qamar", role: "Data Analytics", image: image6 },
        { name: "Anshu Singh", role: " Full Stack Developer", image: image5 },
        // { name: "Tulshi Prasad Pandey", role: " Full Stack Developer",image: image10},
      ]
    },
    {
      name: "Marketing & Growth Team",
      members: [
        { name: "Bablu Kumar", role: "Senior Marketing Head", image: image14 },
        { name: "Preeti", role: "influencing marketing head", image: image16 },
        { name: "Monu Sharma", role: "Meta ads expert", image: image19 },
        { name: "Royal Kendra", role: "Outdoor marketing head", image: image18 },
      ]
    },
    {
      name: "Legal Department",
      members: [
        { name: "Aryan", role: "Legal advisor Rajasthan High court", image: image15 },
      ]
    },

  ];

  return (
    <section className="py-24 px-6 relative " id="team">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-24">
          {teams.map((team, idx) => (
            <div key={idx} className="space-y-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold flex items-center gap-3"
              >
                {idx === 0 ? <span className="text-xl">🧠</span> : <span className="text-xl">📈</span>}
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
                      {/* Image Container with Glow */}
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#00A3FF]/20 group-hover:border-[#00A3FF] transition-all duration-500 z-10">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={cn(
                            "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110",
                            member.name === "Meena Dhakad" && "object-[70%_10%]",
                            member.name === "Arti Acharya" && "object-[50%_35%] scale-[1.25]",
                            member.name === "Aryan" && "object-[50%_20%] scale-[1.2]",
                            member.name !== "Meena Dhakad" &&
                            member.name !== "Arti Acharya" &&
                            member.name !== "Aryan" &&
                            "object-center"
                          )}
                        />
                      </div>
                      {/* Hover Glow Effect */}
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
          ))}
        </div>

      </div>
    </section>
  );
}
