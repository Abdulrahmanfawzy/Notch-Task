import React, { useState } from "react";
import heroImg from "/hero.webp";
import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
import above from "/above.webp";
import "./HeroSection.css";
import { faArrowTrendUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div id="home" className="bg-white mb-[100px] mx-auto relative">
      <div className="w-50 h-50 blur-2xl rounded-full absolute bottom-0 left-0 bg-[#F6DC43]/10"></div>

      <div className="flex-wrap flex-col justify-center flex py-20 pt-30 lg:py-0 lg:h-screen lg:flex-row lg:justify-between items-center w-[87%] mx-auto">
        <div className="lg:w-[43%] lg:text-left w-full text-center">
          <div className="space-y-5">
            <p className="text-[#F55B47] font-semibold mx-auto lg:mx-0 shadow-gray-200 shadow-xs text-sm w-fit capitalize p-3 rounded-md mb-3">
              {" "}
              <span>
                <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>
              </span>{" "}
              Digital marketing agency
            </p>
            <h1 className="text-6xl font-semibold capitalize">
              Smarter marketing bigger{" "}
              <span className="text-[#F55B47] italic">impacts</span>
            </h1>

            
            
            <section className="font-semibold text-gray-600">
              marketive gives you tools to engage, and convert without chaos.
              from automated campaigns to real-time insights.
            </section>

            <button className="relative  cursor-pointer mr-3 bg-gradient-to-r from-[#F6DC43] to-[#FF2DF1] text-[#410445] px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FF2DF1]/30 transition-all duration-300 transform hover:-translate-y-1">
              <a href="#" data-discover="true">
                <span className="relative z-10">Get Started</span>
              </a>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
            </button>

            <button className="relative cursor-pointer border-2 border-[#F55B47]/50 text-[#F55B47] px-7 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">See Our Work</span>
              <div className="absolute inset-0 bg-[#F55B47] opacity-0 group-hover:opacity-5 transition-opacity rounded-xl"></div>
            </button>

            <div className="justify-center lg:justify-start flex gap-1 items-center">
              <img
                src={person1}
                className="w-10 h-10 border-4 border-white object-center rounded-full object-cover"
                alt="person image"
              />
              <img
                src={person2}
                className="w-10 h-10 border-4 border-white -ml-4 object-center rounded-full object-cover"
                alt="person image"
              />
              <img
                src={person3}
                className="w-10 h-10 border-4 border-white -ml-4 object-center rounded-full object-cover"
                alt="person image"
              />
              <FontAwesomeIcon
                className="text-[#F4E230]"
                icon={faStar}
              ></FontAwesomeIcon>
              <b className="ml-1">4.8</b>
              <span className="text-gray-500 font-semibold">(150k)</span>
            </div>
          </div>
        </div>

        <div className="w-[50%] hidden lg:block relative">
          <img
            src={heroImg}
            className={`w-[83%] custom-animation relative z-30 transition-transform duration-100 ease-in-out ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            loading="lazy"
            alt="hero-section image"
          />

          <img
            src={above}
            className="absolute -bottom-30 custom-animation transition-transform duration-500 ease-in-out right-0"
            alt="above image"
          />

          <div className="overlay w-[80%] z-10 h-full absolute top-8 mx-auto rounded-full blur-xl bg-gradient-to-r from-[#FF2DF1]/20 to-[#F6DC43]/20 animate-pulse"></div>

          <div className="absolute -left-20 custom-animation transition-transform duration-500 ease-in-out -bottom-20 z-20 flex gap-4 px-7 py-8 items-center bg-white/50  rounded-2xl backdrop-blur-lg border border-white/50">
            <FontAwesomeIcon
              className="text-xl bg-[#F6DC43] p-3 rounded-xl"
              icon={faArrowTrendUp}
            />
            <div className="space-y-2">
              <section className="text-gray-500">Daily Active Clients</section>
              <section className="text-[#F6DC43]">12000+</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
