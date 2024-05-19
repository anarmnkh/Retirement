"use client";

import { useRouter } from "next/navigation";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";


const Signin = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <div
        className="bg-black bg-opacity-25 backdrop-blur-sm min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        //onClick={() => onClose()}
      >
        <div className="max-w-md w-full bg-white rounded-[25px] shadow-lg overflow-hidden ">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Нэвтрэх
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="px-8 flex item-center justify-between">
              <input
                type="email"
                autoComplete="none"
                required
                className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="И-мэйл хаяг"
              />
              <span className="icon-gray-500 absolute mt-3 ml-[22rem] ">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className="px-8  flex item-center justify-between  ">
              <input
                type={show ? "text" : "password"}
                name="password"
                autoComplete="none"
                required
                className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Нууц үг"
              />
              <span
                className="icon-gray-500 absolute mt-3 ml-[22rem]"
                style={{ color: show ? "#4299e1" : "#7f7f7f" }}
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            <div className="px-8 ">
              <button
                className="w-full mt-3 py-3 px-4 text-sm font-medium rounded-full"   
                type="submit"
              >
                Нэвтрэх
              </button>
            </div>
          </form>
          <div className="px-8 ">
            <button
              type="submit"
              className="w-full py-3  mt-3 px-4 text-sm font-medium rounded-full" 
              //  onClick={toggleRegisterForm}
            > 
              Бүртгүүлэх
            </button>
          </div>

          <div className="px-8 mt-3 flex items-center justify-between">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">Эсвэл</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="px-8 mb-6">
            <button
              type="button"
              className="w-full py-3  mt-3 px-4 text-sm font-medium rounded-full"
              onClick={()=>signIn('google')}
            >
              Gmail-ээр нэвтрэх
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Signin;
