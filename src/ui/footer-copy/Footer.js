/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React, { useState } from "react";
import { storage } from "../../utils";

import logo from "../../assets/img/logo.svg";
import send from "../../assets/img/send.svg";
import reset from "../../assets/img/reset.svg";
import prompt from "../../assets/img/prompt.svg";

import "../../assets/css/footer.css";

const { getFromLocalStorage, clearFromLocalStorage } = storage;

const Footer = () => {
  const [storageCleared, setStorageCleared] = useState(
    "Browser Storage Cleared!!!",
  );
  const handleReset = () => {
    clearFromLocalStorage();
    setStorageCleared(storageCleared);
  };

  return (
    <footer className="fixed p-1 bottom-0 left-0 right-0 text-center bg-zinc-950">
      <div>
        <a href="/" title="Go home" aria-label="Go home">
          <img src={logo} className="footer-logo-right" alt="" />
        </a>
        <a href="/" title="Go home" aria-label="Go home">
          <img src={logo} className="footer-logo-left" alt="" />
        </a>
        <div>
          {/* heading */}
          <h1 className="text-xl text-gray-400 font-semibold text-muted-foreground mb-1">
            Gemini Chat
          </h1>

          {/* inputs */}
          <div>
            <input
              type="text"
              placeholder=" reimagined-memory..."
              className="w-2/4 p-2 rounded-lg shadow-xl bg-zinc-800 text-white mb-4"
            />
          </div>

          {/* buttons */}
          <div className="button-container">
            <button
              className="gradient-button p-2 rounded-lg shadow-xl mr-2"
              title="Send"
              aria-label="Send"
            >
              {/* SEND */}
              <img src={send} className="send" alt="" />
            </button>
            <button
              className="gradient-button p-2 rounded-lg shadow-xl mr-2"
              title="Prompt"
              aria-label="Prompt"
            >
              {/* PROMPT */}
              <img src={prompt} className="prompt" alt="prompt" />
            </button>
            <button
              className="gradient-button p-2 rounded-lg shadow-xl mb-4"
              onClick={handleReset}
              title="Reset"
              aria-label="Reset"
            >
              {/* RESET */}
              <img src={reset} className="reset" alt="reset" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
