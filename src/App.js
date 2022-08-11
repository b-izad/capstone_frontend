
import './App.css';
import Login from './login.js';
import Home from './home.js';
import Signup from './signup.js';
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
