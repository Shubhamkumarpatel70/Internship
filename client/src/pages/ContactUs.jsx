import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Professional Website', // Default subject
    otherSubject: '', // New state for other subject text
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: 'Professional Website', // Reset subject to default
      otherSubject: '', // Reset other subject
      message: ''
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block font-semibold mb-2">Subject:</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="Professional Website">Professional Website</option>
              <option value="Regarding Internship">Regarding Internship</option>
              <option value="Regarding Certificate">Regarding Certificate</option>
              <option value="Regarding Offer Letter">Regarding Offer Letter</option>
              <option value="Other">Other</option> {/* Add "Other" option */}
            </select>
            {/* Show text box for other subject if selected */}
            {formData.subject === 'Other' && (
              <input
                type="text"
                id="otherSubject"
                name="otherSubject"
                value={formData.otherSubject}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter Other Subject"
                required
              />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
}
