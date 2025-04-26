import React from "react";
import team1 from "/team1.jpg";
import team2 from "/team2.jpg";
import team3 from "/team3.jpg";
import team4 from "/team4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  const teams = [
    { id: 1, image: team1, title: "Paul Flavius", subtitle: "Coordinator" },
    { id: 2, image: team2, title: "Simon Cyrene", subtitle: "Manager" },
    { id: 3, image: team3, title: "Mellissa Doe", subtitle: "Analyst" },
    { id: 4, image: team4, title: "Simmy Flavius", subtitle: "Vice president" },
  ];
  return (
    <div id="team" className="mb-[80px] scroll-mt-20 w-[90%] mx-auto">
      <div className="flex mb-10 space-y-3 justify-between flex-wrap items-center">
        <h2 className="text-5xl w-[100%] md:w-[49%] font-bold">
          Meet our Friendly <br />
          Team Member
        </h2>
        <p className="md:w-[50%] w-[100%] text-gray-600 font-medium">
          So, make the decision to move forward. Commit your decision to paper,
          just to bring it into focus. Then, go for it!
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {teams.map((person) => (
          <div
            key={person.id}
            className="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-2xl shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {/* صورة + أيقونات فوقها */}
            <div className="relative">
              <img
                src={person.image}
                className="w-full h-60 object-top object-cover"
                alt={person.title}
              />
              <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 flex gap-2">
                {[faFacebookF, faTwitter, faLinkedinIn, faBehance].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F55B47]/10 transition-colors cursor-pointer"
                      >
                      <FontAwesomeIcon icon={icon} className="text-[#F55B47]" />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* النص */}
            <div className="p-5 pt-10 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {person.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {person.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
