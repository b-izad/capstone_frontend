import logo from './logo.svg';
import './App.css';
import Form from './form.js';
import Login from './login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        <div>
          <Form/>
          <Login/>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
    
        </a> */}
      </header>
    </div>
  );
}

export default App;
