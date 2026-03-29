import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './components/Header';
//import MainSection from './components/MainSection';
import Homepage from './components/Homepage';
import FlavorsPage from './components/FlavorsPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/flavors" element={<FlavorsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
