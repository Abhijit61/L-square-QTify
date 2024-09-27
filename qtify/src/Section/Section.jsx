import React from 'react';
import Styles from "./Section.module.css";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Mycard  from '../Mycard/Mycard';
import { Collapse } from '@mui/material';
import MyCarousel from "../Carousel/MyCarousel"

const Section = ({name,url,genre}) => {
  console.log("genre:")
  console.log(genre);
  const [res,setres] = useState([]);
  const [buttonname,setbuttoname] = useState("Show all")

  const handleclick = () => {
    if(buttonname === "Show all")
    {
      setbuttoname("Collapse");
    }
    else
    {
      setbuttoname("Show all");
    }
  } 

  useEffect(() => {

    let getdata = async() => {
      let temp = await axios.get(url);
      console.log(temp.data);
      setres(temp.data);
    };

    getdata();
   },[])

  return (
    <div className={Styles.section}>
    <div className={Styles.header}>
      <h3 className={Styles.headtitle}>{name}</h3>
      {name!=="Songs" && <button className={Styles.collapsebutton} onClick={handleclick}>{buttonname}</button>}
    </div>
    {
      name==="Songs" ? (
        <>
          {genre==="All" ? (<MyCarousel name={name} data={res} />) : (
            <MyCarousel name={name} data={res.filter( item => item.genre.label===genre)} />
          )}
        </>
      ) : (
        buttonname ==="Collapse" ? (
          <div className={Styles.grid}>
          {
            res.map((item) => (
              <Mycard image={item.image} follows={item.follows} songs={item.songs} title={item.title}/>
            ))
          }
      </div>
        ):(
          <MyCarousel name={name} data={res}/>
        )
      )
    }
    
    </div>
  );
}

export default Section;