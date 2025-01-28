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
      className="h-screen relative flex overflow-hidden text-left md:text-left md:flex-row max-w-full    justify-evenly mx-auto items-center z-0 "
    >
      <h4 className="absolute top-[60px] tracking-[20px] uppercase text-accent text-5xl ">
        Contact Me
      </h4>
      <div className="flex flex-col space-y-10 mt-10">
        <h4 className="text-4xl font-semibold text-center relative mt-20">
          I Have Just Got What You Need.
          <br />
          <span className="decoration-accent/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-accent h-7 w-7 animate-pulse" />
            <p>+91 123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-accent h-7 w-7 animate-pulse" />
            <p>+91 hyd</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeOpenIcon className="text-accent h-7 w-7 animate-pulse" />
            <p>krishnasaiprakhya@gmail.com</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput p-2 rounded-lg"
              type="text"
            />
            <input
              placeholder="Email"
              className="contactInput p-2 rounded-lg"
              type="text"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput p-2 rounded-lg"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="contactInput p-2 rounded-lg"
          />
          <button className="bg-accent py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
