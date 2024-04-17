import React from 'react';

import { Carousel as FlowbiteCarousel } from "flowbite-react";

export default function CustomCarousel() {
  return (
    <div className="mx-2">
      <FlowbiteCarousel slideInterval={5000} className='h-96'>
        <img src="https://images.unsplash.com/photo-1566932521009-a726ce64e092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.unsplash.com/photo-1557952138-7ed256c23bc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </FlowbiteCarousel>
    </div>
  );
}
