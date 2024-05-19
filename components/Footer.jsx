import React from "react";
import Link from "next/link";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandYoutube } from "react-icons/tb";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 mt-[3rem] text-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="gap-8">
          <div>
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="/">Нүүр</Link>
              </li>
              <li>
                <Link href="/news">Мэдээ, мэдээлэл</Link>
              </li>
              <li>
                <Link href="/legal/page">Хууль тогтоомж</Link>
              </li>
              <li>
                <Link href="/service/page">Үйлчилгээ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex space-x-8 my-10 justify-center ">
            <FaFacebookF size={22} />
            <FaInstagram size={22} />
            <TfiTwitter size={22} />
            <TbBrandYoutube size={22} />
          </div>
        </div>
      </div>
      <div>
        <hr className="border-gray-600 my-2" />
        <p className="text-sm mb-2  flex justify-center">
          &copy; 2024 Retirement Planning Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
