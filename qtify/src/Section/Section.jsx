import React from 'react';
import Styles from "./Section.module.css";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Mycard  from '../Mycard/Mycard';

const Section = () => {
  const [res,setres] = useState([]);

  useEffect(() => {

    let getdata = async() => {
      let temp = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      console.log(temp.data);
      setres(temp.data);
    };

    getdata();
   },[])

  return (
    <div className={Styles.section}>
    <div className={Styles.header}>
      <h3 className={Styles.headtitle}>Top Albums</h3>
      <button className={Styles.collapsebutton}>Collapse</button>
    </div>
    <div className={Styles.grid}>
      {
        res.map((item) => (
          <Mycard image={item.image} follows={item.follows} songs={item.songs} title={item.title}/>
        ))
      }
    </div>
    </div>
  );
}

export default Section;