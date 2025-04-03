"use client";
import {
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { motion } from "framer-motion";

interface Props {}

function Contact(props: Props) {
  const {} = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h4 className="absolute top-10 md:top-[60px] tracking-[10px] md:tracking-[20px] uppercase text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Contact Me
      </h4>

      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full px-4 sm:px-10 md:px-0 mt-20 md:mt-0">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          I Have Just Got What You Need.
          <br />
          <span className="decoration-accent/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <PhoneIcon className="text-accent h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm sm:text-base md:text-lg">+91 123456789</p>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <MapPinIcon className="text-accent h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm sm:text-base md:text-lg">Hyderabad, India</p>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <EnvelopeOpenIcon className="text-accent h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm sm:text-base md:text-lg">
              krishnasaiprakhya@gmail.com
            </p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-full max-w-xs sm:max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              placeholder="Name"
              className="contactInput p-2 rounded-lg text-sm sm:text-base"
              type="text"
            />
            <input
              placeholder="Email"
              className="contactInput p-2 rounded-lg text-sm sm:text-base"
              type="text"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput p-2 rounded-lg text-sm sm:text-base"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="contactInput p-2 rounded-lg text-sm sm:text-base h-24 sm:h-32"
          />
          <button className="bg-accent py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-md text-black font-bold text-sm sm:text-base md:text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
