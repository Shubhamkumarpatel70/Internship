import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 flex flex-col mt-20 md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
          alt="About Us"
          className="rounded-full border-4 border-white p-2"
          style={{ maxWidth: '100%', width: '100%', height: 'auto', borderRadius: '5' }}
        />
      </div>
      <div className="w-full md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
  );
}
