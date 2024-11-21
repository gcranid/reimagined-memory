/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React from "react";
import { storage } from "../../utils";

import "../../assets/css/footer.css";

const { saveToLocalStorage, getFromLocalStorage, clearFromLocalStorage } = storage;

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
};

export default Footer;
