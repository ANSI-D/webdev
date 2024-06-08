// MyPage.js
import React from 'react';
import Cards from '../components/cards'; // Correct import path

const data = [
  { title: 'Card 1', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg', description: 'Description for Card 1' },
  { title: 'Card 2', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png', description: 'Description for Card 2' },
  { title: 'Card 3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/16/The_Big_Short_%282015_film_poster%29.png', description: 'Description for Card 3' },
  { title: 'Card 4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg', description: 'Description for Card 3' },
  { title: 'Card 3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png', description: 'Description for Card 3' },
];

const App = () => {
  return (
    <div>
      <Cards data={data} />
    </div>
  );
};

export default App;
