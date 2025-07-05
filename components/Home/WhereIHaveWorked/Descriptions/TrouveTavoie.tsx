import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import { text } from "stream/consumers";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Build a trader platform from scratch that supports real time communication between different users.",
      keywords: ["scratch", "real time communication"],
    },
    {
      text: "Improved system performance by making proactive adjustments and resolving bugs.",
      keywords: ["system performance", "resolving"],
    },
    {
      text: "Actively adding new features using Node.js, and React Js.",
      keywords: ["Node.js", "React.js", "features"],
    },
    {
      text: "Coordinated with multiple cross-functional teams to leverage their APIs and data in our services.",
      keywords: ["APIs"],
    },
    {
      text: "Design the overall architecture of the microservices-based system.",
      keywords: ["architecture", "microservices"],
    },
    {
      text: "Performed on-call duty monitoring critical applications, efficiently handled production incidents, wrote post-mortem documents and did root-cause analysis for those incidents.",
      keywords: ["monitoring"],
    },
    {
      text: "Ensure that the architecture supports scalability, resilience, and maintainability.",
      keywords: ["scalability", "resilience", "maintainability"],
    },
    {
      text: "Developed and maintained unit tests for the microservices in the SunHub application, ensuring their individual functionality and reliability.",
      keywords: ["microservices", "functionality", "reliability"],
    },
    {
      text: "Utilized automated testing frameworks like Selenium to automate repetitive testing tasks and improve the efficiency of the testing process for the SunHub project.",
      keywords: ["automated testing", "Selenium"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* <span style={{ color: "#7C8493" }}>Title</span> */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer{" "}
            <span className="text-AAsecondary">@ MERN Stack Developer</span>
          </span>
          {/* <span style={{ color: "#7C8493" }}>Date</span> */}
          <span className="font-mono text-xs text-gray-500">
            Feb 2023 - Present
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
