import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages는 한이음 프로젝트 화면, page는 캡스톤디자인 졸작 화면으로 사용을 필요하지 않는 것은 주석처리 해주세요.
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
