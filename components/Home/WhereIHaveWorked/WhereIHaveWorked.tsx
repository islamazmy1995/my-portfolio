import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function WhereIHaveWorked() {
  return (
    <div
      id="experience"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"
          />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Freelance Experience Section */}
      <section className="max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          For the past <span className="font-bold">3 years</span>, I’ve been working as a{" "}
          <span className="text-AAsecondary font-semibold">freelancer</span> on platforms like{" "}
          <span className="italic">Freelancer.com, Upwork, and Fiverr</span>. I’ve handled a wide range of tasks — from building full websites to solving real-world problems for clients globally.
          <br /><br />
          I’m highly skilled in technologies such as{" "}
          <span className="text-AAsecondary">React.js, Next.js, Tailwind CSS, Node.js, MongoDB</span>,
          and I’ve used these tools in many successful projects. My focus is always on delivering clean, maintainable code and ensuring a smooth user experience.
        </motion.p>
      </section>
    </div>
  );
}
