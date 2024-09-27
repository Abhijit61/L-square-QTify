import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import Styles from "./Parent.module.css";
import Tabcomponent from "./Tab/Tabcomponent";

function Parent () {
  console.log("entered parent");

  const emptystr = "";
  return (
    <div>
      <Navbar searchData={emptystr}/>
      <Hero />
      <div className={Styles.divele}>
      <Section name="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top"/>
      <Section name="New Albums" url="https://qtify-backend-labs.crio.do/albums/new"/>
      <Tabcomponent />
      </div>
    </div>
  );
}

export default Parent;
