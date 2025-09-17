import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col items-center py-20 bg-AAprimary"
    >
      {/*  */}
      <div className="flex flex-row items-center mb-6">
        <ArrowIcon className="h-5 md:h-6 w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm sm:text-base">
            04.
          </span>
          <span className="text-AAsecondary font-sans text-base">
            Get In My Mail
          </span>
        </div>
      </div>

      <h2 className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85 mb-4">
        Get In My Mail
      </h2> {/* العنوان */}
      {/* النص */}
      <form 
        action="https://formspree.io/f/xpwrewbk"
        method="POST"
        className="flex flex-col space-y-4 w-[90%] max-w-md text-sm sm:text-base"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded border border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-AAsecondary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded border border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-AAsecondary"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="px-4 py-2 rounded border border-gray-600 bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-AAsecondary"
        ></textarea>
        <button
          type="submit"
          className="font-mono text-AAsecondary border border-AAsecondary px-8 py-3 rounded hover:bg-AAsecondary hover:text-AAprimary transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
