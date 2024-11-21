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
  return (
    <div className="fixed p-4 bottom-0 left-0 right-0 text-center bg-zinc-950">
      <div>
        {/* heading */}
        <h1 className="text-xl text-gray-300 font-semibold text-muted-foreground mb-1">
          reimagined-memory...
        </h1>
        <p className="mb-4 text-gray-300 text-muted-foreground">
          Select a provider from the dropdown.
        </p>

        {/* inputs */}
        <div>
          <input
            type="text"
            placeholder=" reimagined-memory..."
            className="w-2/4 p-2 rounded-lg shadow-xl bg-zinc-600 text-white mb-4"
          />
        </div>

        {/* buttons */}
        <div>
          <button className="bg-lime-500 text-black hover:bg-lime-800 hover:text-white text-xl font-semibold p-2 rounded-lg shadow-xl mr-16">
            SEND
          </button>
          <button className="bg-red-500 text-black hover:bg-red-800 hover:text-white text-xl font-semibold p-2 rounded-lg shadow-xl mb-2">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
