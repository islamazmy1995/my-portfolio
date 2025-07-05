import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  const router = useRouter();

  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8">
      {/* About */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.4,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 01.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            About
          </span>
        </ReactScrollLink>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.7,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-300}
          duration={200}
        >
          &gt; 02.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Experience
          </span>
        </ReactScrollLink>
      </motion.div>

      {/* Work */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="SomethingIveBuiltSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 03.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Work
          </span>
        </ReactScrollLink>
      </motion.div>

      {/* Contact */}
      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 04.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Contact
          </span>
        </ReactScrollLink>
      </motion.span>

      {/* Resume Button */}
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
        title="Download my resume"
      >
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.2,
          }}
          className="text-AAsecondary border border-AAsecondary py-2 px-4 rounded-sm hover:bg-ResumeButtonHover flex items-center gap-2 transition duration-300"
        >
          {/* Download Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M4 4h16v4H4V4z"
            />
          </svg>
          Resume
        </motion.button>
      </a>
    </div>
  );
}
