import React, { useState } from 'react';
import { FloatingLabel } from "flowbite-react";
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Assuming you are using react-icons for icons

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false); // Initially assume passwords don't match

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    setPasswordMatch(confirmPassword === newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Reset form fields when role changes
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
    setPasswordMatch(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);
    const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!containsUppercase || !containsLowercase || !containsNumber || !containsSpecialChar) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setPasswordError('Password strength: Strong');
    }
  };

  const handleSubmit = () => {
    // Handle signup submission based on the role
    if (password === confirmPassword) {
      console.log('Passwords match');
      // Proceed with signup process
    } else {
      console.log('Passwords do not match');
      // Show error message or take appropriate action
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-md p-8 w-[500px]">
        <h2 className="text-3xl font-semibold mb-6">Sign Up as {role === 'admin' ? 'Admin' : 'User'}</h2>
        <div className="mb-6">
          <FloatingLabel
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="mb-6 relative">
          <FloatingLabel
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            className="w-full pr-12"
          />
          <button
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-2 text-sm" style={{ color: passwordError.includes('Strong') ? 'green' : 'red' }}>
          {passwordError}
        </div>
        <div className="mb-6 relative">
          <FloatingLabel
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            variant="outlined"
            className="w-full pr-12"
          />
          <button
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {password && confirmPassword && (
          <div className="mb-2 text-sm" style={{ color: passwordMatch ? 'green' : 'red' }}>
            {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
          Sign Up
        </button>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
      </div>
    </div>
  );
}
