// import "./App.css";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Form from "./components/form.js";
import Login from "./components/login.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
