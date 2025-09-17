import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

export default function AboutMe() {
  const technologies = [
    ["PHP", "Typescript", "Laravel", "RESTful APIs"],
    ["React.js", "Next.js", "Redux", "JavaScript (ES6+)", "Tailwind CSS"],
    ["MySQL", "GitLab CI/CD"],
  ];

  const aboutMeParagraphs = [
    "Hello! I'm Islam Azmy, a passionate problem solver and enthusiastic full stack developer. I'm 21 years old with experience in building and maintaining full-featured web applications.",
    "As a Full Stack Developer, I specialize in building fast and scalable web applications using modern technologies like MongoDB, Express.js, React.js, and php. I have solid experience in developing full-stack solutions, particularly in e-commerce and SaaS platforms, including features like authentication systems, online payments, shopping carts, and admin dashboards.",
    "I enjoy turning complex ideas into clean and efficient code, and I’m always striving to improve my skills and stay updated with new technologies. I strongly believe in writing maintainable code and following best practices in the world of software development.",
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
             About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          <div className="w-full md:w-7/12 space-y-6">
            {aboutMeParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-400 leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}

            <div className="font-Header tracking-wide mt-6">
              <span className="text-gray-400">
             technologies
              </span>
            </div>

            <div className="font-Header tracking-wide flex flex-wrap gap-8 mt-4">
              {technologies.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {column.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className="h-3 w-3 text-AAsecondary" />
                      <span className="text-gray-400 sm:text-sm text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* صورة على الشاشات الكبيرة */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/hero-bg.jpg"}
                className="object-contain rounded-lg"
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* صورة على الموبايل */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/hero-bg.jpg"}
                className="object-contain rounded-lg"
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
