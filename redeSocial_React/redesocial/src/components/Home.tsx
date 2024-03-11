import React from "react";
import Topo from "./Header";
import Asides from "./Asides";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Topo></Topo>
      </div>
      <div>
        <Asides></Asides>
      </div>
      <Footer />
    </div>
  );
}
