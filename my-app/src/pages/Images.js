function Images(){
    const imageStyle = {
        width: '300px',
        height: '450px',
        borderRadius: '10px',
        boxShadow: '0 8px 8px rgba(0, 0, 0, 0.6)'
    }
    return(
        <images>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Ryan_Gosling_in_2018.jpg" alt="Ryan Gosling" class="image" style={imageStyle}></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Ryan_Gosling_Cannes_2014.jpg" alt="Ryan Gosling"
            style={{width: '300px',height: '500px',borderRadius: '10px',boxShadow: '0 8px 8px rgba(0, 0, 0, 0.6)'}}></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ryan_Gosling_TIFF_Drive_premiere.jpg" alt="Ryan Gosling" class="image"
            style={{
                width: '300px',
                height: '500px',
                borderRadius: '10px',
                boxShadow: '0 8px 8px rgba(0, 0, 0, 0.6)'
            }}></img>
            
        </images>
    );
}

export default Images