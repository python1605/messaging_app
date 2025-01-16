// src/components/Register.jsx
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
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

    // Reset errors before checking
    setErrors({ usernameError: "", formError: "" });

    // Basic validation for required fields
    if (!formData.name || !formData.username || !formData.password) {
      setErrors({ formError: "All fields except email are required" });
      return;
    }

    // Mock username uniqueness check
    if (formData.username === "existingUsername") {
      setErrors({ usernameError: "Username is already taken" });
    } else {
      setErrors({ usernameError: "" });
      // Here, you would send the form data to your API for actual registration
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className='mt-6 p-4 border border-gray-300 rounded-md'>
      <h2 className='text-xl font-semibold'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-left mb-2'>Full Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-left mb-2'>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Choose a unique username'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
          {errors.usernameError && (
            <p className='text-red-500 text-sm'>{errors.usernameError}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block text-left mb-2'>Email (Optional)</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-left mb-2'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Create a password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>

        {errors.formError && (
          <p className='text-red-500 text-sm mb-4'>{errors.formError}</p>
        )}

        <button
          type='submit'
          className='w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
