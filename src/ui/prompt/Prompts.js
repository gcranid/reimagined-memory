/**
 *
 * src/ui/prompts/Prompts.js
 *
 */

import React, { useState, useEffect } from "react";
import { storage } from "../../utils";

import "../../assets/css/prompts.css";

const { getFromLocalStorage, clearFromLocalStorage, saveToLocalStorage } =
  storage;

const Prompts = () => {
  return (
    <div>
      <p>Prompts!!!</p>
    </div>
  );
};

export default Prompts;
