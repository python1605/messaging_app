// src/components/HomePage.jsx
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Registration";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='text-center p-4 w-full max-w-md bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-bold text-blue-600 mb-6'>
          Welcome to Messaging Application
        </h1>

        <div className='space-x-4 mb-6'>
          <button
            onClick={handleLoginClick}
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Login
          </button>
          <button
            onClick={handleRegisterClick}
            className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
          >
            Register
          </button>
        </div>

        {showLogin && <Login />}
        {showRegister && <Register />}
      </div>
    </div>
  );
};

export default HomePage;
