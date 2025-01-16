import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import callAxios from "../API/callAxios";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({ formError: "" });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ formError: "" });

    if (!formData.userName || !formData.password) {
      setErrors({ formError: "userName and Password are required" });
      return;
    }

    try {
      const response = await callAxios(
        "post",
        "users/login",
        JSON.stringify(formData)
      );

      if (response?.success) {
        toast.success("Login successful!");

        // Store token in localStorage
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        // Redirect to the home page
        history.push("/chat-window");
      } else {
        toast.warning(response?.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during login");
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
            name='userName'
            value={formData.userName}
            onChange={handleChange}
            placeholder='Enter your userName'
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
