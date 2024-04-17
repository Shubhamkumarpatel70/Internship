import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { Card } from "flowbite-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 1 */}
        <h2 className="text-xl font-semibold mb-4">Featured Content</h2>
        <Carousel />
      </div>
      <div className="flex flex-wrap gap-2 mb-4"> {/* Flex container for cards */}
  {/* Cards */}
  <Card href="#" className="w-[300px] mb-4 transition duration-300 ease-in-out transform hover:scale-95"> {/* Reduced right margin */}
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card href="#" className="w-[300px] mb-4 transition duration-300 ease-in-out transform hover:scale-95"> {/* Reduced right margin */}
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card href="#" className="w-[300px] mb-4 transition duration-300 ease-in-out transform hover:scale-95"> {/* Reduced right margin */}
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card href="#" className="w-[300px] mb-4 transition duration-300 ease-in-out transform hover:scale-95"> {/* No right margin */}
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 2 */}
        <h2 className="text-xl font-semibold mb-4">About Us</h2>
        <About/>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 3 */}
        <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
        <Testimonial/>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 4 */}
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <Faq/>
      </div>
      {/* Additional container boxes */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 5 */}
        <h2 className="text-xl font-semibold mb-4">New Content 1</h2>
        <p>This is some new content for the fifth container box.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Container box 6 */}
        <h2 className="text-xl font-semibold mb-4">New Content 2</h2>
        <p>This is some new content for the sixth container box.</p>
      </div>
      {/* Add more container boxes as needed */}
    </div>
  );
}
