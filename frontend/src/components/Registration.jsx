import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom"; // Import useHistory hook for navigation
import callAxios from "../API/callAxios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userNameError: "",
    formError: "",
  });

  const history = useHistory(); // Initialize history here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before checking
    setErrors({ userNameError: "", formError: "" });

    // Basic validation for required fields
    if (!formData.name || !formData.userName || !formData.password) {
      setErrors({ formError: "All fields except email are required" });
      return;
    }

    // Mock userName uniqueness check
    if (formData.userName === "existinguserName") {
      setErrors({ userNameError: "userName is already taken" });
    } else {
      setErrors({ userNameError: "" });

      try {
        const response = await callAxios(
          "post",
          "users/register",
          JSON.stringify(formData)
        );

        if (response?.success === true) {
          toast.success(response.message);
          history.push("/");
        } else {
          toast.warning(response?.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
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
            name='userName'
            value={formData.userName}
            onChange={handleChange}
            placeholder='Choose a unique userName'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
          {errors.userNameError && (
            <p className='text-red-500 text-sm'>{errors.userNameError}</p>
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
