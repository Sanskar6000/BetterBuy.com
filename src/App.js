import './App.css';
import Minter from './Minter'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route path="/" element={<Header />} />
          <Route path="/product" element={<Minter />} />
          
           <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
