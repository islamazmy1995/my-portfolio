import React from "react";
import { motion } from "framer-motion";

export default function MyName(props: { finishedLoading: boolean }) {
  return (
    <div className="h-full flex flex-col justify-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-72 py-24 sm:py-40">
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: props.finishedLoading ? 0 : 10.4,
          duration: 0.4,
        }}
        className="text-AAsecondary font-mono text-sm sm:text-base"
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: props.finishedLoading ? 0 : 10.5,
          duration: 0.4,
        }}
        className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
      >
        Eslam Azmy
      </motion.h1>

      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: props.finishedLoading ? 0 : 10.6,
          duration: 0.4,
        }}
        className="text-gray-400 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4"
      >
        Full Stack Web Developer
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: props.finishedLoading ? 0 : 10.7,
          duration: 0.4,
        }}
        className="text-gray-400 font-Header text-sm md:text-base mt-6 tracking-wide max-w-3xl text-justify"
      >
        I'm a 21-year-old full stack developer with a passion for building modern web applications using React.js, Next.js, laravel, and Mysql. I enjoy turning complex problems into clean, efficient code and delivering exceptional user experiences.
      </motion.p>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: props.finishedLoading ? 0 : 10.8,
          duration: 0.4,
        }}
        className="mt-10"
      >
        <a href="/cv.pdf" target="_blank" rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border border-AAsecondary rounded px-6 py-3 hover:bg-AAsecondary hover:text-AAprimary transition duration-300">
            Download Resume
          </button>
        </a>
      </motion.div>
    </div>
  );
}
