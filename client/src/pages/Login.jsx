import React, { useState } from "react";
import UserLogin from "../components/Userlogin";
import AdminLogin from "../components/Adminlogin";

function UserLoginForm() {
  return (
    <div> {/* Container box styling */}
      {/* User login form content */}
      <UserLogin/>
    </div>
  );
}

function AdminLoginForm() {
  return (
    <div> {/* Container box styling */}
      {/* Admin login form content */}
      <AdminLogin/>
    </div>
  );
}

export default function Login() {
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const handleToggle = (value) => {
    if (isAdminLogin !== value) {
      setIsAdminLogin(value);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center my-8">
        <button
          className={`px-4 py-2 rounded-md ${
            isAdminLogin ? 'bg-gray-200 text-gray-800' : 'bg-gray-500 text-white'
          }`}
          onClick={() => handleToggle(false)}
        >
          Login as User
        </button>
        <button
          className={`px-4 py-2 rounded-md ml-4 ${
            isAdminLogin ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleToggle(true)}
        >
          Login as Admin
        </button>
      </div>
      {isAdminLogin ? <AdminLoginForm /> : <UserLoginForm />}
    </div>
  );
}
