import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDisplay from './pages/MovieDisplay';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route
          path="/"
          element={<Home />}
          />
          <Route 
          path="/movieDisplay"
          element={<MovieDisplay />}
          />
        </Routes>
      </div>
      </BrowserRouter>
      <h2>hi</h2>
    </div>
  );
}

export default App;
