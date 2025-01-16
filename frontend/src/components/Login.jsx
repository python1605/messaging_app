// src/components/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    formError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ formError: "" });

    // Basic validation for required fields
    if (!formData.username || !formData.password) {
      setErrors({ formError: "Username and Password are required" });
      return;
    }

    // Mock login validation (you can replace this with an API call)
    if (formData.username === "user" && formData.password === "password123") {
      console.log("Login successful");
      // You would typically redirect the user here or store authentication tokens
    } else {
      setErrors({ formError: "Invalid username or password" });
    }
  };

  return (
    <div className='mt-6 p-4 border border-gray-300 rounded-md'>
      <h2 className='text-xl font-semibold'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-left mb-2'>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter your username'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-left mb-2'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>

        {errors.formError && (
          <p className='text-red-500 text-sm mb-4'>{errors.formError}</p>
        )}

        <button
          type='submit'
          className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
