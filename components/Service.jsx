"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Service1 from "../public/pic1.jpeg"; // Import the image file
import Service2 from "../public/pic2.jpg"; 
const ServicesPage = () => {
  // Define service data
  const services = [
    {
      name: "Тэтгэвэрт гарах нас тогтоох",
      type: "Service2",
      imageUrl: Service1,
    },
    { 
      name: "Тэтгэвэр төлөвлөх", 
      type: "Service1", 
      imageUrl: Service2 
    },
  ];

  // Function to handle selecting a service
  const handleSelectService = (serviceName) => {
    console.log(`Selected service: ${serviceName}`);
    // You can add your logic for selecting a service here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Үйлчилгээ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Map through services and render each service */}
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-lg shadow-lg bg-white overflow-hidden"
          >
            <div className="relative h-60 md:h-80">
              <Image
                src={service.imageUrl}
                alt="Service Image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                {service.name}
              </h2>
              <div className="text-center">
                <Link href={`/service/${service.type}`}>
                  <button
                    className="w-full py-3 px-4 border-2 text-sm font-medium rounded-full"
                    onClick={() => handleSelectService(service.name)}
                  >
                    Сонгох
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
