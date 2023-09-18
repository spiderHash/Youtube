import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Video from './components/Video';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/results' element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
