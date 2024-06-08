import React from 'react';
import { Grid } from '@mui/material';

function Images() {
    const imageStyle = {
        width: '300px', 
        height: '450px',
        borderRadius: '10px',
        boxShadow: '0 10px 8px rgba(0, 0, 0, 0.8)',
        margin: '5px',
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8} sm={6} md={2}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Ryan_Gosling_in_2018.jpg"
                    alt="Ryan Gosling"
                    style={imageStyle}
                />
            </Grid>
            <Grid item xs={8} sm={6} md={2}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/46/Ryan_Gosling_Cannes_2014.jpg"
                    alt="Ryan Gosling"
                    style={imageStyle}
                />
            </Grid>
            <Grid item xs={8} sm={6} md={2}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ryan_Gosling_TIFF_Drive_premiere.jpg"
                    alt="Ryan Gosling"
                    style={imageStyle}
                />
            </Grid>
        </Grid>
    );
}

export default Images;

/* There was literally no reason to use the grid system, I could've just used flex-wrap: wrap; */
