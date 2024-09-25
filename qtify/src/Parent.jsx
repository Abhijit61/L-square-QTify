import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

function Parent () {
  console.log("entered parent");

  const emptystr = "";
  return (
    <div>
      <Navbar searchData={emptystr}/>
      <Hero />
    </div>
  );
}

export default Parent;
