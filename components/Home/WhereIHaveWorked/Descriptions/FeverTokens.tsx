import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Worked on implementing new features and functionalities and integrating with 3rd-party APIs.",
      keywords: ["features", "functionalities", "3rd-party APIs"],
    },
    {
      text: "Designed and implemented a scalable and resilient microservices architecture for the ABHI fintech platform, utilizing technologies such as Docker and Kubernetes to containerize and orchestrate services.",
      keywords: [
        "scalable",
        "microservices architecture",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      text: "Implemented communication protocols such as RESTful APIs and messaging queues (e.g., Kafka) to enable seamless communication between microservices.",
      keywords: [
        "communication protocols",
        "RESTful APIs",
        "Kafka",
        "microservices",
      ],
    },
    {
      text: "Implemented monitoring and logging solutions such as Prometheus and ELK stack to monitor the performance and health of the ABHI microservices, enabling proactive identification and resolution of issues.",
      keywords: ["monitoring", "logging"],
    },
    {
      text: "Proposed and wrote RFC documents for making system-wide changes and adopting new technologies.",
      keywords: ["RFC documents"],
    },
    {
      text: "Participated in on-call rotation to ensure the availability & reliability of the system and tackle operational issues.",
      keywords: ["availability", "reliability"],
    },
    {
      text: "Participated in design & architecture-related discussions for the new features and functionalities.",
      keywords: ["design", "architecture-related"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer{" "}
            <span className="text-AAsecondary">
              @ Node js | React js Developer
            </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2022 - Feb 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
