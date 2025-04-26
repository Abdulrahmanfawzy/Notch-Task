import React from "react";

function Contact() {
  return (
    <div id="contact" className="mb-[100px] scroll-mt-20 w-[90%] mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">CONTACT US</h2>
      <div className="flex flex-wrap space-y-5 justify-between">
        <div className="w-[100%] lg:w-[49%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.434034779468!2d31.298620499999995!3d29.995691199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838e7f5b60c6d%3A0xfc1466417bc44d00!2sDYAR%20PALMS!5e0!3m2!1sen!2seg!4v1745646360738!5m2!1sen!2seg"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-[100%] lg:w-[49%]">
          <h3 className="text-xl -mt-2 font-medium">
            Send us a <span className="text-[#F55B47]">message</span>
          </h3>
          <form action="">
            <div className="flex mt-5 flex-wrap gap-y-2 justify-between items-center">
              <input
                type="text"
                className="border border-gray-300 outline-0 rounded-xl p-3 w-[100%] md:w-[49%]"
                placeholder="First Name"
                name="fName"
              />
              <input
                type="text"
                className="border border-gray-300 outline-0 rounded-xl p-3 w-[100%] md:w-[49%]"
                placeholder="Last Name"
                name="lName"
              />
            </div>
            <input
              type="number"
              className="appearance-none border my-3 border-gray-300 outline-0 rounded-xl p-3 w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Enter your mobile no."
              name="phone"
            />
            <input
              type="email"
              className="border mb-3 border-gray-300 outline-0 rounded-xl p-3 w-[100%]"
              placeholder="Enter your e-mail"
              name="email"
            />
            <textarea
              type="email"
              className="border mb-3 h-48 border-gray-300 outline-0 rounded-xl p-3 w-[100%]"
              placeholder="Write message..."
              name="msg"
            ></textarea>
            <button className="w-full block cursor-pointer border transition duration-200 border-[#F55B47] hover:bg-transparent hover:text-[#F55B47] text-white bg-[#F55B47] rounded-4xl py-3 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
