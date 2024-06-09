import React from 'react';
import { Grid } from '@mui/material';

function Images() {
    const imageStyle = {
        width: '300px', 
        height: '450px',
        borderRadius: '10px',
        boxShadow: '0 10px 8px rgba(0, 0, 0, 0.8)',
        margin: '5px',
        transition: 'transform 0.3s', 
    };

    const handleImageHover = (event) => {
        event.target.style.transform = 'scale(1.05)';
    };

    const handleImageLeave = (event) => {
        event.target.style.transform = 'scale(1)'; 
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Ryan_Gosling_in_2018.jpg"
                alt="Ryan Gosling"
                style={imageStyle}
                onMouseOver={handleImageHover}
                onMouseOut={handleImageLeave}
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Ryan_Gosling_Cannes_2014.jpg"
                alt="Ryan Gosling"
                style={imageStyle}
                onMouseOver={handleImageHover}
                onMouseOut={handleImageLeave}
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ryan_Gosling_TIFF_Drive_premiere.jpg"
                alt="Ryan Gosling"
                style={imageStyle}
                onMouseOver={handleImageHover}
                onMouseOut={handleImageLeave}
            />
        </div>
    );
}

export default Images;
