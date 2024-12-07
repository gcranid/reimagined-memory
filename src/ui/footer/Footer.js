/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React, { useState } from "react";
// import { storage } from "../../utils";

import chocy from "../../assets/img/chocy.svg";
import send from "../../assets/img/send.svg";
import reset from "../../assets/img/reset.svg";
import prompt from "../../assets/img/prompt.svg";

import "../../assets/css/footer.css";

// const { getFromLocalStorage, clearFromLocalStorage } = storage;

const Footer = () => {
  /*const handleReset = () => {
    clearFromLocalStorage();
    setStorageCleared(storageCleared);
  }; */

  return (
    <footer className="fixed p-4 bottom-0 left-0 right-0 text-center bg-zinc-950">
      <div>
        {/* buttons */}
        <button
          className="border border-white p-1 rounded-lg shadow-xl mr-2"
          title="Send"
          aria-label="Send"
        >
          {/* SEND */}
          <img src={send} className="" alt="" />
        </button>
        <button
          className="border border-white p-1 rounded-lg shadow-xl mr-2"
          title="Reset"
          aria-label="Reset"
        >
          {/* RESET */}
          <img src={reset} className="" alt="" />
        </button>
        <button
          className="border border-white p-1 rounded-lg shadow-xl"
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
