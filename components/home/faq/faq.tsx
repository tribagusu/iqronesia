import React from "react";
import FaqAccordion from "./faq-accordion";

const Faq = () => {
  return (
    <div className="container my-[5rem]">
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl mb-2">FAQ</h2>
          <p className="">Frequently Asked Questions</p>
        </div>
      </div>

      {/* faq goes here */}
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col md:mr-[5rem] mb-10">
          <h2 className="text-xl font-semibold mb-5">About Iqronesia</h2>
          <p>
            This organisation began in a simple form of study circles, focusing
            to improve Al Quran reading skill for its members. As the time goes
            by, there is a growing demand for a media to refresh our souls. This
            simple forum then further combined with contemporary Islamic
            lectures to further strengthen its members beliefs about the truth
            of Islam. Islam is truly a peaceful, compassionate and humane
            religion.
          </p>
        </div>
        <div className="md:min-w-[60%]">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
