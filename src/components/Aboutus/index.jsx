import React from "react";
import aboutImg from "/about.png";
import circle from "/circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function Aboutus() {
  return (
    <div id="about"  className="w-[90%] mb-[100px] scroll-mt-20 mx-auto flex flex-wrap justify-between">
      <div className="w-[100%] lg:w-[49%] overflow-hidden relative">
        <img src={aboutImg} className="w-[55%] mx-auto" alt="about image" />
        <div className="absolute -z-2 top-0">
            <img src={circle} className="w-full" alt="circle image" />
        </div>
        <div className="absolute bg-white shadow p-10 blur-2xl w-full h-50 -z-2 -bottom-30"></div>
      </div>
      <div className="w-[100%] lg:w-[45%] mt-8">
        <section className="text-[#F55B47] font-semibold uppercase text-sm">
          About Us
        </section>
        <h2 className="text-4xl font-semibold mb-5">
          Driving Growth with Our Expertise and Passion
        </h2>
        <p className="text-gray-600">
          At the core of our journey lies a commitment to driving growth fueled
          by a combination of expertise and passion. We believe growth is not
          just about numbers—it's about creating meaningful impact, fostering
          innovation, and building relationships that last. Our team brings a
          wealth of knowledge, experience, and dedication to every project.
        </p>

        <div className="flex justify-between border border-gray-200 rounded-2xl p-5 mt-4">
          <div className="w-[49%] bg-[#F7F7F7] py-6 space-y-2 p-4 rounded-2xl text-center">
            <h3 className="font-semibold text-2xl">Need Custom?</h3>
            <p className="text-gray-500">
              We completed 85% success project in business
            </p>
            <button className="uppercase mt-1 bg-[#F55B47] text-white py-3 px-6 rounded-4xl font-semibold text-[13px] ">
              Learn more{" "}
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>

          <div className="w-[46%] space-y-4">
            <li className="list-none"> 
                <FontAwesomeIcon className="text-[#F55B47] mr-2" icon={faArrowUpRightDots}></FontAwesomeIcon> Marketing professional    
            </li>
            <li className="list-none"> 
                <FontAwesomeIcon className="text-[#F55B47] mr-2" icon={faArrowUpRightDots}></FontAwesomeIcon> Help businesses increase 
            </li>
            <li className="list-none"> 
                <FontAwesomeIcon className="text-[#F55B47] mr-2" icon={faArrowUpRightDots}></FontAwesomeIcon> Latest technologies
            </li>
            <li className="list-none"> 
                <FontAwesomeIcon className="text-[#F55B47] mr-2" icon={faArrowUpRightDots}></FontAwesomeIcon> Measurable results
            </li>
            <li className="list-none"> 
                <FontAwesomeIcon className="text-[#F55B47] mr-2" icon={faArrowUpRightDots}></FontAwesomeIcon> Core of our journey lies
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
