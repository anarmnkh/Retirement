"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Signin from "./Signin";
import Signup from "./Signup";
import { signOut, useSession } from "next-auth/react";

import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { data: session } = useSession();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowLoginForm(false);
        setShowRegisterForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center ml-8">
          <h1 className="text-3xl font-bold mr-6 sm:text-4xl">RETIREMENT.</h1>

          <ul className="hidden md:flex  text-lg">
            <li>
              <Link href="/" onClick={handleClose}>
                Нүүр
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={handleClose}>
                Мэдээ, мэдээлэл
              </Link>
            </li>
            <li>
              <Link href="/legal" onClick={handleClose}>
                Хууль тогтоомж
              </Link>
            </li>
            <li>
              <Link href="/service" onClick={handleClose}>
                Үйлчилгээ
              </Link>
            </li>
          </ul>
        </div>
        {!session ? (
          <>
            <div className="hidden md:flex space-x-4 mr-8 ">
              <button
                className="border-none bg-transparent text-black  text-lg"
                onClick={toggleLoginForm}
              >
                Нэвтрэх
              </button>
              <button
                className="px-8 py-3 text-lg text-white border bg-red-500 border-red-600 hover:bg-transparent hover:text-black rounded-md"
                onClick={toggleRegisterForm}
              >
                Бүртгүүлэх
              </button>
            </div>

            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-4 mr-10">
              <div className="w-10 h-10 rounded-full relative">
                <FaUser size={40}/>
              </div>
              {session?.user?.email && <span>{session.user.email}</span>}
              <button
                onClick={() => {
                  signOut();
                }}
                className="btn btn-primary"
              >
                Гарах
              </button>
            </div>
          </>
        )}
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/" onClick={handleClose}>
            Нүүр
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/about" onClick={handleClose}>
            Мэдээ, мэдээлэл
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/legal/page" onClick={handleClose}>
            Хууль тогтоомж
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/service/page" onClick={handleClose}>
            Үйлчилгээ
          </Link>
        </li>

        <div className="flex flex-col my-4">
        {!session ? (
          <>
            <div className="hidden md:flex space-x-4 mr-8 ">
              <button
                className="border-none bg-transparent text-black  text-lg"
                onClick={toggleLoginForm}
              >
                Нэвтрэх
              </button>
              <button
                className="px-8 py-3 text-lg text-white border bg-red-500 border-red-600 hover:bg-transparent hover:text-black rounded-md"
                onClick={toggleRegisterForm}
              >
                Бүртгүүлэх
              </button>
            </div>

            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-4 mr-10">
              <div className="w-10 h-10 rounded-full relative">
                <FaUser size={40}/>
              </div>
              {session?.user?.email && <span>{session.user.email}</span>}
              <button
                onClick={() => {
                  signOut();
                }}
                className="btn btn-primary"
              >
                Гарах
              </button>
            </div>

          </>
        )}
        </div>
      </ul>

      {showLoginForm && <Signin onClose={() => setShowLoginForm(false)} />}
      {showRegisterForm && <Signup onClose={() => setShowRegisterForm(false)} />}
    </nav>
  );
};

export default Navbar;
