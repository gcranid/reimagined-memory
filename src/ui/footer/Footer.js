/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React, { useState } from "react";
// import { storage } from "../../utils";

import chocy from "../../assets/img/chocy.svg";
import chat from "../../assets/img/chat.svg";
import reset from "../../assets/img/reset.svg";
import prompt from "../../assets/img/prompt.svg";

import "../../assets/css/footer.css";

// const { getFromLocalStorage, clearFromLocalStorage } = storage;

const Footer = () => {

  return (
    <footer className="fixed p-1.5 ml-64 mr-64 bottom-0 left-0 right-0 text-center bg-zinc-950 border border-white rounded-lg">
      <div className="border border-white rounded-lg p-1.5">
        {/* buttons */}
      <button
          className="border border-white p-1 hover:bg-teal-700 rounded-lg shadow-xl mr-1"
          title="Home"
          aria-label="Home"
        >
          {/* HOME */}
          <img src={chocy} className="" alt="" />
        </button>
        <button
          className="border border-white p-1 hover:bg-teal-700 rounded-lg shadow-xl mr-1"
          title="Chat"
          aria-label="Chat"
        >
          {/* CHAT */}
          <img src={chat} className="" alt="" />
        </button>
        <button
          className="border border-white p-1 hover:bg-teal-700 rounded-lg shadow-xl mr-1"
          title="Reset"
          aria-label="Reset"
        >
          {/* RESET */}
          <img src={reset} className="" alt="" />
        </button>
        <button
          className="border border-white p-1 hover:bg-teal-700 rounded-lg shadow-x1"
          title="Prompt"
          aria-label="Prompt"
        >
          {/* PROMPT */}
          <img src={prompt} className="" alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
