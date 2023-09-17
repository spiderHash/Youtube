import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import VideoCard from './components/VideoCard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<VideoCard id="MsRkesJ6vqM"/>} />
        <Route path='/video/:title' element={<VideoCard />} />
      </Routes>
    </Router>
  );
}

export default App;
