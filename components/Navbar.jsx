"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Signin from "./Signin";
import Signup from "./Signup";
import { signOut, useSession } from "next-auth/react";

import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession();
  const [nav, setNav] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
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
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowLoginForm(false);
        setShowRegisterForm(false);
        setProfileMenuOpen(false);
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

          <ul className="hidden md:flex text-lg">
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
        <div className="flex items-center space-x-4 mr-8">
          {!session ? (
            <>
              <button
                className="border-none bg-transparent text-black text-lg"
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
            </>
          ) : (
            <div ref={wrapperRef} className="relative">
              <div
                className="flex items-center cursor-pointer p-6 pb-3 pt-3 hover:bg-gray-100 rounded transition-colors shadow-md"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              >
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <FaUser size={32} className="text-gray-600" />
                </div>
                <span className="ml-4 text-gray-800 font-semibold text-lg">
                  {session?.user?.name || "Username"}
                </span>
                {profileMenuOpen ? (
                  <FaChevronUp className="ml-2 text-gray-700" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-700" />
                )}
              </div>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-58 bg-white border border-gray-300 rounded shadow-lg z-50">
                  <div className="py-1">
                    {session?.user?.email && (
                      <div className="px-4 py-2 text-gray-700 border-b border-gray-200">
                        <span className="font-semibold">Email:</span>{" "}
                        {session.user.email}
                      </div>
                    )}
                    <button
                      onClick={signOut}
                      className="block w-full "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/" onClick={handleClose}>
            Нүүр
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/news" onClick={handleClose}>
            Мэдээ, мэдээлэл
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/legal" onClick={handleClose}>
            Хууль тогтоомж
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="/service" onClick={handleClose}>
            Үйлчилгээ
          </Link>
        </li>

        {!session ? (
          <>
            <button
              className="w-full my-4 text-lg border-none bg-transparent text-black"
              onClick={toggleLoginForm}
            >
              Нэвтрэх
            </button>
            <button
              className="w-full px-8 py-3 text-lg text-white bg-red-500 border border-red-600 hover:bg-transparent hover:text-black rounded-md"
              onClick={toggleRegisterForm}
            >
              Бүртгүүлэх
            </button>
          </>
        ) : (
          <div className=""></div>
        )}
      </ul>

      {showLoginForm && <Signin onClose={() => setShowLoginForm(false)} />}
      {showRegisterForm && (
        <Signup onClose={() => setShowRegisterForm(false)} />
      )}
    </nav>
  );
};

export default Navbar;
