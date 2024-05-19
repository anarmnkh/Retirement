import React from "react";
import Image from "next/image";
import Link from "next/link";
import Service2 from "../public/pic2.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <Image src={Service2} alt="Hero Image" width={1920} height={1080} />
      <div className="absolute inset-0 flex justify-end items-center px-4 py-32 sm:px-6 lg:h-screen lg:px-8">
        <div className="max-w-xl text-white text-center text-border mr-80">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Тэтгэвэр төлөвлөлтийн үйлчилгээ.
          </h1>
          <div className="mt-8">
            <Link legacyBehavior href="/service">
              <a className="block rounded-full bg-rose-600 px-12 py-3 text-sm md:text-base lg:text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500">
                Төлөвлөх
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
