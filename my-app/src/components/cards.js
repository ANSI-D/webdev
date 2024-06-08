import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Cards = ({ data }) => {
  const cardStyle = {
    transition: 'filter 0.3s', 
  };

  const handleCardHover = (event) => {
    event.target.style.filter = 'brightness(80%)'; 
  };

  const handleCardLeave = (event) => {
    event.target.style.filter = 'brightness(100%)'; 
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((card, index) => (
        <Grid item key={index} xs={8} sm={4} md={2}>
          <Card
            style={cardStyle}
            onMouseOver={handleCardHover}
            onMouseOut={handleCardLeave}
          >
            <CardMedia
              component="img"
              height="100%"
              image={card.imageUrl}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
