import React from "react";
import analytics from "/analytics.png";
import brand from "/brand.png";
import content from "/content.png";
import influncer from "/influncer.png";
import seo from "/seo.png";
import shape from "/shape.png";
import rocket from "/rocket.png";
import "../HeroSection/HeroSection.css";

function Services() {
  const data = [
    {
      id: 1,
      image: content,
      alt: "content image",
      title: "Content Marketing",
      subtitle: "Content marketing isnt just about words; its about connection. By help into loyal customers.",
      top: "lg:mt-40"
    },
    {
      id: 2,
      image: seo,
      alt: "SEO Optimization",
      title: "SEO Optimization",
      subtitle: "We optimize every click, every keyword, and every page to a brand of search results.",
      top: "lg:mt-20"
    },
    {
      id: 3,
      image: analytics,
      alt: "Analytics & Report",
      title: "Analytics & Report",
      subtitle: "our analytics and reporting, youll gain a clear picture of your the opportunities to grow.",
      top: "lg:mt-0"
    },
    {
      id: 4,
      image: brand,
      alt: "Brand Strategy",
      title: "Brand Strategy",
      subtitle: "Your brand journey starts with a powerful strategy aligns vision with impact your unique story.",
      top: "lg:mt-20"
    },
    {
      id: 5,
      image: influncer,
      alt: "Influencer Marketing",
      title: "Influencer Marketing",
      subtitle: "Turn influence into impact of With influencer marketing, we connect and your driving and brand",
      top: "lg:mt-40"
    },
  ];

  return (
    <div id="services" className="mb-[100px] scroll-mt-20">
      <div className="text-center mb-10 w-[90%] md:w-[60%] mx-auto">
        <h3 className="text-[#F55B47] font-semibold">Our Services</h3>
        <h2 className="text-5xl font-bold">
          Achieve Top Rankings with Cutting-Edge SEO Services!
        </h2>
      </div>

      <div className="flex justify-between items-start relative gap-3 flex-wrap w-[90%] mx-auto">
        <div className="absolute top-35 -z-10">
          <img src={shape} className="rotate-180" alt="" />
        </div>
        {data.map(item=><div key={item.id} className={`lg:w-[19%] md:w-[49%] text-center lg:text-left w-full space-y-6 ${item.top || ''} py-7 px-5 bg-gray-100 rounded-2xl`}>
          <img src={item.image} className="mx-auto lg:mx-0" alt={item.alt} />
          <h2 className="my-2 font-semibold text-xl">{item.title}</h2>
          <p>
            {item.subtitle}
          </p>
        </div>)}
        
      </div>

      <div className="rocket">
        <img
          src={rocket}
          className="mx-auto hidden lg:block lg:-mt-30 custom-animation transition-transform duration-500 ease-in-out"
          alt="rocket image"
        />
      </div>
    </div>
  );
}

export default Services;
