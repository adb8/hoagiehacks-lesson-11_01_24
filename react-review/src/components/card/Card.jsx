import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ImageCard = ({ image, text }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt="Card image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;