import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./JS/RegistrationForm";
import HomePage from "./JS/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Application</h1>

        {/* <Link to="/">Home</Link> | <Link to="/register">Register</Link> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
