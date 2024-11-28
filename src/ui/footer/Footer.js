/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React from "react";
import { storage } from "../../utils";
import logo from "../../assets/img/logo.svg";

import "../../assets/css/footer.css";

const { saveToLocalStorage, getFromLocalStorage, clearFromLocalStorage } =
  storage;

const Footer = () => {
  const handleReset = () => {
    clearFromLocalStorage();
    alert("Local Browser Storage Cleared!!!");
  };

  return (
    <footer className="fixed p-1 bottom-0 left-0 right-0 text-center bg-zinc-950">
      <div>
        <img src={logo} className="footer-logo" alt="logo" />
        <div>
          {/* heading */}
          <h1 className="text-xl text-gray-400 font-semibold text-muted-foreground mb-1">
            reimagined-memory...
          </h1>
          {/* <p className="mb-4 text-gray-300 text-muted-foreground">
            Select a provider from the dropdown.
          </p> */}

          {/* inputs */}
          <div>
            <input
              type="text"
              placeholder=" reimagined-memory..."
              className="w-2/4 p-2 rounded-lg shadow-xl bg-zinc-800 text-white mb-4"
            />
          </div>

          {/* buttons */}
          <div>
            <button className="bg-lime-500 text-black hover:bg-lime-800 hover:text-white text-xl font-semibold p-2 rounded-lg shadow-xl mr-16">
              SEND
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 text-black hover:bg-red-800 hover:text-white text-xl font-semibold p-2 rounded-lg shadow-xl"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
