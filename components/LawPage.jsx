"use client"
import React, { useState } from "react";
import suldImage from "../public/suld.png"; // Import the image file
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Head from "next/head";


const LawsPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const lawsPerPage = 3;

  // Sample data for laws
  const laws = [
    {
      id: 1,
      name: "НИЙГМИЙН ДААТГАЛЫН ЕРӨНХИЙ ХУУЛЬ",
      link: "https://legalinfo.mn/mn/detail?lawId=16760148379551",
      date: "2023 оны 07 сарын 07 өдөр",
      type: "/Шинэчилсэн наруулга/",
      imageUrl: suldImage,
    },
    {
      id: 2,
      name: "НИЙГМИЙН ДААТГАЛЫН САНГААС ОЛГОХ ТЭТГЭВРИЙН ТУХАЙ",
      link: "https://legalinfo.mn/mn/detail?lawId=16760148505951",
      date: "2023 оны 07 сарын 07 өдөр",
      type: "/Шинэчилсэн наруулга/",
      imageUrl: suldImage,
    },
    {
      id: 3,
      name: "ДУНДАЖ ЦАЛИН ХӨЛС ТОДОРХОЙЛОХ ЖУРАМ",
      link: "https://legalinfo.mn/mn/detail?lawId=16389706554831",
      date: " 2021 оны 12сарын 06 өдөр",
      imageUrl: suldImage,
    },
    {
      id: 4,
      name: "НИЙГМИЙН ДААТГАЛЫН ҮНДЭСНИЙ ЗӨВЛӨЛИЙН ТОГТООЛ",
      link: "https://legalinfo.mn/mn/detail?lawId=16389995486241",
      date: " 2021 оны 12 сарын 27 өдөр",
      imageUrl: suldImage,
    },
    // Add more laws here if needed
  ];

  const maxIndex = Math.ceil(laws.length / lawsPerPage) - 1;

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handleClickPrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Хууль тогтоомж</title>
      </Head>
      <div className="flex flex-wrap justify-center mt-16 ">
        {laws.slice(startIndex * lawsPerPage, (startIndex + 1) * lawsPerPage).map(law => (
          <div key={law.id} className="m-4 p-4 bg-white border justify-center border-gray-500 rounded-[20px] w-96">
            <div className="flex justify-center"> {/* Container to center the image */}
              <Image src={law.imageUrl} width={300} height={200} className="object-cover rounded-t-lg" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-sm text-center mt-8">
                <a href={law.link} target="_blank" rel="noopener noreferrer" className="text-black">{law.name}</a>
              </h3>
              {law.type && <p className="text-gray-400 flex justify-center mt-4">{law.type}</p>}
              <div  className="flex justify-center text-md mb-1  text-gray-500">
                <p>{law.date}</p>
              </div>
            </div>
          </div>
      ))}
      </div>
      <div className="mt-4 flex justify-center space-x-2"> {/* Added space-x-4 for horizontal spacing */}
        <button 
          className="py-1 px-1"
          onClick={handleClickPrevious}>
          <ChevronLeftIcon className="h-9 w-9" /> {/* Icon for Previous */}
        </button>
        <button 
          className="py-1 px-1"
          onClick={handleClickNext}>
          <ChevronRightIcon className="h-9 w-9" /> {/* Icon for Next */}
        </button>
        
      </div>
    </div>
  );
}

export default LawsPage;
