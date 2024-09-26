import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import Styles from "./Parent.module.css"

function Parent () {
  console.log("entered parent");

  const emptystr = "";
  return (
    <div>
      <Navbar searchData={emptystr}/>
      <Hero />
      <div className={Styles.divele}>
      <Section name="Top Albums"/>
      <Section name="New Albums"/>
      </div>
    </div>
  );
}

export default Parent;
