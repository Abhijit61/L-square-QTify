import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";

function Parent () {
  console.log("entered parent");

  const emptystr = "";
  return (
    <div>
      <Navbar searchData={emptystr}/>
      <Hero />
      <Section />
    </div>
  );
}

export default Parent;
