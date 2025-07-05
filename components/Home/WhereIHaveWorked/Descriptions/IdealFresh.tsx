import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Worked on developing an in-house RapidFlow workflow automation platform.",
      keywords: ["developing", "RapidFlow"],
    },
    {
      text: "Agile team work, building architecture from scratch (Node.js, Angular, Postgres, AWS).",
      keywords: ["Node.js", "Angular", "Postgres", "AWS"],
    },
    {
      text: "Enhanced DB architecture for better performance (indexing, partitioning, sharding).",
      keywords: ["indexing", "partitioning", "sharding"],
    },
    {
      text: "Addressed a memory leak issue to prevent server downtime.",
      keywords: ["memory leak"],
    },
    {
      text: "Worked on the implementation of new requirements and maintenance of RapidFlow & eCommerce modules.",
      keywords: ["implementation", "eCommerce"],
    },
    {
      text: "UtilizedAWS services for deployments (S3, CloudFront, Lightsail, RDS Postgres, EFS).",
      keywords: ["S3", "CloudFront", "Lightsail", "RDS", "Postgres", "EFS"],
    },
    {
      text: "Provided ongoing maintenance and troubleshooting support, addressing issues promptly to maintain a reliable and seamless experience for users.",
      keywords: ["support", "reliable", "seamless"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
            <span className="text-AAsecondary">@ MERN Stack Developer</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2021 - Dec 2022
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
