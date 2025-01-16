// src/components/Register.jsx
import React from "react";

const Register = () => {
  return (
    <div className='mt-6 p-4 border border-gray-300 rounded-md'>
      <h2 className='text-xl font-semibold'>Register</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-left mb-2'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-left mb-2'>Password</label>
          <input
            type='password'
            placeholder='Create a password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
          />
        </div>
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
