import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Chip } from '@mui/material';
import Styles from "./Mycard.module.css";

const Mycard = ({image,follows,title,songs}) => {
  return (
    <>
    <Card className={Styles.Card}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Card Image"
      />
      <CardContent>
        {/* Chip component inside CardContent */}
        <Chip label={`${follows} Follows`} className={Styles.Chip}/> 
        <Typography variant="p" component="div">
        {title}
        </Typography>    
      </CardContent>
    </Card>
    </>
  );
};

export default Mycard;

