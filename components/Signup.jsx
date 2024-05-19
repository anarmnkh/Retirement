"use client";
import React, { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { HiFingerPrint } from "react-icons/hi";

import { useRouter } from "next/navigation";

const Signup = ({onclose}) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-md w-full bg-white rounded-[25px] shadow-md overflow-hidden">
        <div className="py-8 px-6">
          <h2 className="text-center mt-6 text-3xl font-extrabold text-gray-900">
            Бүртгүүлэх
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                <label className="text-black"> Нэр </label>
                <input
                  type="text"
                  id="firstName"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                />
              </div>
              <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                <label className="text-black"> И-Мэйл хаяг </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between "
                  placeholder="И-Мэйл"
                />
              </div>

              <div className="w-full px-2 py-3 flex justify-between  items-center border-b border-gray-400 ">
                <label className="text-black"> Нууц үг </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                  placeholder="Нууц үг"
                />
                <span
                  className="icon-gray-500 absolute  ml-[22rem]"
                  style={{ color: show ? "#4299e1" : "#7f7f7f" }}
                  onClick={() => setShow(!show)}
                >
                  <HiFingerPrint size={20} />
                </span>
              </div>

              {/**        <div className="w-full px-2 py-3 flex justify-between items-center  ">
                <label className="text-black"> Нууц үг </label>
                <input
                  type={show1 ? "text" : "password"}
                  name="cpassword"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                  placeholder="Нууц үг баталгаажуулах"
                />
                <span
                  className="icon-gray-500 absolute  ml-[22rem]"
                  style={{ color: show1 ? "#4299e1" : "#7f7f7f" }}
                  onClick={() => setShow1(!show1)}
                >
                  <HiFingerPrint size={20} />
                </span>
              </div>***/}
            </div>
            <div className="px-8 mt-4">
              <button
                type="submit"
                className=" w-full py-3   px-4 text-sm font-medium rounded-full"
              >
                Бүртгүүлэх
              </button>
              <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            </div>
          </form>
          <div className="px-8 mt-3 flex items-center justify-between">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-sm text-gray-50aa0">Эсвэл</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="px-8 mt-4">
            <button className="w-full py-3  px-4 text-sm font-medium rounded-full">
              Gmail-ээр нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
