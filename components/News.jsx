import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { VscLaw } from "react-icons/vsc";
import Image from 'next/image';
import bg from "../public/bg2.jpg"

// Define service items
const serviceItems = [
  {
    title: 'Тэтгэвэрт гарах нас тооцоолох',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies ipsum vel dui lacinia, nec congue metus sollicitudin.',
    link: '/niigmiin-daatgal'
  },
  {
    title: 'Тэтгэвэр төлөвлөх',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies ipsum vel dui lacinia, nec congue metus sollicitudin.',
    link: '/niigmiin-daatgal-san'
  },
];

// Service component
const News = () => {
  return (
    <div className="relative h-screen">
      <Image src={bg} layout="fill" objectFit="cover" alt="Background" objectPosition="center" />
      <div className="absolute inset-0 bg-gray-900/95 flex justify-center items-center"> {/* Darkened overlay */}
        <div className="max-w-4xl mx-auto text-black px-6 md:px-12 lg:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Мэдээ, мэдээлэл</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg">
                <div className="p-8">
                  <VscLaw className="w-12 h-12 text-indigo-600 rounded-full inline-block mb-4" /> {/* Adjusted color */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p> {/* Darker text */}
                </div>
                <div className="bg-slate-100 p-4 flex justify-end">
                  <a href={item.link} className="text-indigo-600 hover:text-indigo-800 flex items-center" aria-label={`Learn more about ${item.title}`}> {/* Enhanced link color */}
                    <span>Дэлгэрэнгүй</span>
                    <ArrowSmRightIcon className="w-5 h-5 ml-2" />
                  </a>
                </div>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
