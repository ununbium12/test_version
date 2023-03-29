import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
