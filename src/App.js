
import './App.css';
import Login from './components/login.js';
import Home from './components/home.js';
import Signup from './components/signup';
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <nav>
      <h1> My Fuffy Friend</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Become a member</Link>

    </nav>
  
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
         
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
