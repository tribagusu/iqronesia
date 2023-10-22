import React from "react";
import Image from "next/image";
import img1 from "@/public/images/iqro-mosque.jpeg";
import { presidents } from "@/config/presidents";

const History = () => {
  return (
    <div className="container mt-10">
      {/* section 1 */}
      <div className="flex flex-col">
        <Image src={img1} alt="iqro" className="rounded-md mb-5" />
        <p className="text-center text-lg mb-5">
          Islamic Education and Social Welfare for the Indonesian and Australian
          Community.
        </p>
        <hr />
      </div>

      {/* section 2 */}
      <div className="flex flex-col md:flex-row my-10 gap-10">
        <div className="flex flex-col md:w-[60%]">
          <div className="flex flex-col mb-5">
            <h3 className="font-bold text-xl mb-2">Vision</h3>
            <p>
              To develop a solid community-based organisation applying and
              promoting comprehensive Islamic values to the Australian
              community.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-xl mb-2">Mission</h3>
            <ul className="list-disc list-outside">
              <li>
                To socialise moderate and contemporary Islamic teachings and
                values to the community through education, seminars, social,
                community and cultural events
              </li>
              <li>
                To promote a balanced mental, spiritual and physical growth and
                development
              </li>
              <li>
                To collaborate with various community groups, social
                organisations, Indonesian and Australian Government
                Representatives
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-lg rounded-md md:w-[40%] relative overflow-hidden">
          <div className="flex flex-col w-full">
            <h3 className="uppercase font-bold text-lg bg-lightGreen w-full text-white p-3 text-center">
              presidents
            </h3>
            <div className="flex flex-col p-5 text-left">
              {presidents.map((president) => (
                <div
                  key={president.id}
                  className="flex justify-start gap-2 w-full mb-2"
                >
                  <ul className="min-w-[30%]">
                    <li>
                      {president.started} - {president.ended}
                    </li>
                  </ul>
                  <ul className="md:w-[50%]">
                    <li>: {president.name}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col mb-20">
        <h3 className="font-bold text-xl mb-2">History</h3>
        <p>
          This organisation began in a simple form of study circles, focusing to
          improve Al Quran reading skill for its members. As the time goes by,
          there is a growing demand for a media to refresh our souls. This
          simple forum then further combined with contemporary Islamic lectures
          to further strengthen its members' beliefs about the truth of Islam.
          Islam is truly a peaceful, compassionate and humane religion.
          <br />
          <br />
          With this belief members are further encouraged to offer contribution
          to the society by sharing the noble values taught in Islam. This idea
          takes form in Al Quran reading courses, and Islamic teaching classes
          for children. To establish its existence in view to sustain the
          services offered to the society, members are agreed to formalise this
          organisation further. Under the name of IQRO Foundation, this
          organisation formally listed in Australia in 2000 as a non profit
          community organisation, with members primarily came from Indonesian
          Muslim background.
          <br />
          <br />
          Since then, IQRO Foundation has been managing various events for
          Muslim communities, including its focal group of Indonesian Muslims.
          These wide ranges of events include Seminars and Public Dialogues,
          Training and Workshops, Recreation, Family Lectures, and Cultural
          Exhibition.Based on the noble Islamic values, IQRO embraces dynamism,
          harmony and tolerance among individuals. It seek to follow examples of
          Islamic way of life set by Rasulullah Muhammad PBUH, to consistently
          radiates the love and compassion of Allah SWT to his surrounding.
        </p>
      </div>
    </div>
  );
};

export default History;
