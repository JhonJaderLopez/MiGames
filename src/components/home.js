import React from 'react'
import { Carousel ,CarouselProps} from "@material-tailwind/react";

import image1 from '../imgs/7Days.jpg'
import image2 from '../imgs/Arc_Evolved.jpg'
import image3 from '../imgs/Arma3.jpg'
import image4 from '../imgs/Brink.jpg'
import image5 from '../imgs/CallOfDuty_MW.jpg'
import image6 from '../imgs/Conan_Exiles.jpg'
import image7 from '../imgs/Banner-Web-2-2-1024x311.png'
import image8 from '../imgs/Banner-web-3-2-1024x311.png'
import image9 from '../imgs/Banner-web-1024x311.png';
import image10 from '../imgs/LOGO_MI-Games_120x300.png';

const images = [image1,image2,image3,image4,image5,image6]


const home = () => {
  return (
    <div>
        <Carousel className="mx-auto max-w-screen-xl rounded-xl" >
          <img
            src={image9}
            alt="image 1"
            className="h-64 w-full object-cover"
          />
          <img
            src={image8}
            alt="image 2"
            className="h-64 w-full object-cover"
          />
          <img
            src={image7}
            alt="image 3"
            className="h-64 w-full object-cover"
          />
        </Carousel>
        <div className='mx-auto max-w-screen-xl rounded-xl py-7'>
        <div>
            <div className="py-14 max-w-screen-lg flex justify-center items-center">
            <img src={image10} alt="placeholder-image" className="w-1/3 ml-44" />
            </div>
        </div>
        <div className="flex flex-wrap m-4">
      {images.map((image, index) => (
        <div key={index} className="p-4 w-full md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
            <img
              className="h-auto w-full  object-cover object-center"
              src={image}
              alt={`image-${index + 1}`}
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The Catalyzer
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <div className="flex items-center flex-wrap">
                <a
                  href="#"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <i className="fas fa-plus-circle pl-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <footer className="text-gray-600 body-font bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Company Inc. —
          <a
            href="https://twitter.com"
            className="text-gray-500 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @twitter
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 2v20L12 14 2 22V2l10 8 10-8z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 2v20L12 14 2 22V2l10 8 10-8z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 2v20L12 14 2 22V2l10 8 10-8z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M7 2v4"></path>
              <path d="M17 16v4"></path>
              <path d="M7 22h10"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
        </div>
    </div>
  )
}

export default home