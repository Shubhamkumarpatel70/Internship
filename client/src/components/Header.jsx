import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar fluid rounded className="bg-gray-800 text-white mb-5"> {/* Add Tailwind classes */}
      <Navbar.Brand as={Link} to="/" className="flex items-center">
        <img src="src\assets\logo.png" className="mr-3 h-9 sm:h-10" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Student Era</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
         
        <Navbar.Toggle />
      </div>
      <div className="ml-[550px]">
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-white" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-white">
            About
          </Navbar.Link>
          <Navbar.Link href="/internshipdomain" className="text-white">
            Internship Domain
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-white">
            Contact
          </Navbar.Link>
          <Link to="/login" className="ml-4 bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">Login</Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
