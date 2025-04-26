import { faEnvelope, faLocation, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 ">
      <div className=" mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">
            Notch<span className="text-3xl text-[#F15C45]">.</span>
          </h2>{" "}
          <p className="text-sm text-gray-400">
            We offer quality services to help your business grow.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">SEO Optimization</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400"><FontAwesomeIcon icon={faMapLocation}/> 123 Cairo, Egypt</p>
          <p className="text-sm text-gray-400"><FontAwesomeIcon icon={faPhone}/> +20 100 000 0000</p>
          <a href="mailto:shamii@notchtech.net" className="text-sm text-gray-400"><FontAwesomeIcon icon={faEnvelope}/> shamii@notchtech.net</a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Notch services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
