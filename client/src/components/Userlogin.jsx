import React, { useState } from 'react';
import { FloatingLabel } from "flowbite-react";
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-md p-8 w-[500px]"> {/* Increased width to w-96 */}
        <h2 className="text-3xl font-semibold mb-6">Login as User</h2> {/* Increased text size to text-3xl */}
        <div className="mb-6"> {/* Increased margin bottom */}
          <FloatingLabel
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <FloatingLabel
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            className="w-full"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
          Sign In
        </button>
        <p className="mt-4 text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}
