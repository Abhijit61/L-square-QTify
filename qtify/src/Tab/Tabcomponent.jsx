import Styles from "./Tabcomponent.module.css";
import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Section from "../Section/Section";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Tabcomponent() {
  const [value, setValue] = useState(0);
  const [genredata,setgenredata] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    const getdata = async() => {

      let responce = await axios.get("https://qtify-backend-labs.crio.do/genres");
      console.log(responce.data.data);
      setgenredata(responce.data.data)
    }

    getdata();

  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#34C94B", // Custom underline color
          }
        }} >
        <Tab label="All" keys="All" style={{color : "white"}}/>
        {
          genredata.map((item,index) => (
            <Tab label={item.label} keys={item.key} style={{color : "white"}}/>
          ))
        }
      </Tabs>
      <TabPanel value={value} index={0}>
          <Section name="Songs" url="https://qtify-backend-labs.crio.do/songs" genre="All" />
      </TabPanel> 

      {
          genredata.map((item,index) => (
            <TabPanel value={value} index={index+1}>
                <Section name="Songs" url="https://qtify-backend-labs.crio.do/songs" genre={item.label} />
            </TabPanel>
          ))
      }
      
    </Box>
  );
}
