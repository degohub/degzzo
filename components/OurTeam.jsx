"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "sara",
    role: "Designers",
    photo: "/images/our-team/Designers.webp",
    link: "/team/sara",
    description: "Crafts intuitive interfaces with a flair for modern aesthetics.",
  },
  {
    name: "mila",
    role: "VFX Artists",
    photo: "/images/our-team/VFX.webp",
    link: "/team/mila",
    description: "Connects users and devs with clear, strategic product direction.",
  },
  {
    name: "omar",
    role: "Video Post House Team",
    photo: "/images/our-team/VIDEO-HOUSE.webp",
    link: "/team/omar",
    description: "Our expert video editing team transforms raw footage into compelling visual stories that captivate and engage.",
  },
  {
    name: "leo",
    role: "Developer",
    photo: "/images/our-team/Developer.webp",
    link: "/team/leo",
    description: "Builds scalable web apps with clean, reusable code patterns.",
  },
];

export default function SuperOurTeamSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 xl:px-40">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        Our Team For you
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.a
              href={member.link}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition cursor-pointer"
            >
              <img
                src={member.photo}
                alt={member.role}
                className="object-cover"
              />
              <div className="p-4 text-left">
                {/* <h3 className="text-lg font-semibold capitalize text-gray-800">
                  {member.name}
                </h3> */}
                <p className="text-lg font-semibold capitalize text-gray-800">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2 leading-snug line-clamp-2">
                  {member.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
