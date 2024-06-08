// MyPage.js
import React from 'react';
import Cards from '../components/cards'; // Correct import path

const data = [
  { title: 'Drive(2011)', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg', description: "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver." },
  { title: 'Bladerunner 2049', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png', description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years." },
  { title: 'The Big Short', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/16/The_Big_Short_%282015_film_poster%29.png', description: "In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is." },
  { title: 'The Notebook', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg', description: "An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes." },
  { title: 'The Nice Guys', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png', description: "In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of an actress." },
];

const App = () => {
  return (
    <div>
      <Cards data={data} />
    </div>
  );
};

export default App;
