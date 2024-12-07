/**
 *
 * src/ui/main/Main.js
 *
 */

import React from "react";
import Footer from "../footer/Footer";
import Chat from "../chatbox/Chat";

import "../../assets/css/main.css";

const Main = () => {
  return (
    <div>
      <Chat />
      <Footer />
    </div>
  );
};

export default Main;
