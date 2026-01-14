import { Dialog } from '@mui/material';
import Header from './pages/Header.js'
import Images from './pages/Images.js'
import MovieCount from './pages/MovieCount.js'
import Form from './pages/Form.jsx'
import CardSection from './pages/CardSection.js';

function App() {
  return(
  <>
    <Header/>
    <Images/>
    <MovieCount/>
    <CardSection/>
    <Form/>
    
  </>
  );
}

export default App;
