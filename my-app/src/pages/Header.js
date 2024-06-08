import React from 'react';
import Typography from '@mui/material/Typography';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
    marginTop: '20px', // Added margin-top to match Material-UI default spacing
  };

  const h1style = {
    fontFamily: 'Playball, cursive',
    fontSize: '60px',
    marginBottom: '20px', // Added margin-bottom to create space between heading and paragraphs
  };

  const pStyle = {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: '20px', // Added margin-bottom for spacing between paragraphs
  };

  return (
    <header style={headerStyle}>
      <Typography variant="h1" style={h1style}>
        Ryan Gosling
      </Typography>
      <Typography variant="body1" style={pStyle}>
        Ryan Gosling is a Canadian actor, musician, and filmmaker who rose to prominence for his versatile performances in a variety of film genres. Born on November 12, 1980, in London, Ontario, Canada, Gosling began his career as a child actor on Disney Channel's "The Mickey Mouse Club.". He gained wider recognition in the late 1990s and early 2000s with roles in films like "Remember the Titans" (2000) and "The Notebook" (2004), which solidified his status as a leading actor in romantic dramas. However, Gosling has consistently showcased his range by taking on diverse roles in independent and mainstream cinema. His performances in critically acclaimed films such as "Half Nelson" (2006), "Blue Valentine" (2010), "Drive" (2011), and "La La Land" (2016) have earned him widespread acclaim and several award nominations, including Academy Award nominations for Best Actor
      </Typography>
      <br />
      <Typography variant="body1" style={pStyle}>
        Beyond his work in film, Gosling is also a musician and has been involved in various musical projects, including the indie rock band Dead Man's Bones. With his talent, dedication, and versatility, Ryan Gosling continues to captivate audiences and leave a lasting impact on the world of entertainment.
      </Typography>
    </header>
  );
}

export default Header;
