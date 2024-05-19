"use client"

import React from "react";
import SalaryInfo from "../../../components/SalaryInfo";
import YearsCheckboxes from "../../../components/YearsCheckboxes";
import Image from "next/image";
import bgImg from "../../../public/bg2.jpg";
import Head from "next/head";
import { useSession } from "next-auth/react";



export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>


      {!session ? (
        <div className="h-screen">
          <h1 className="text-center p-40">Please log in to access the dashboard.</h1>
        </div>
      ) : (
        <>
          <Image
            className="w-full absolute h-screen"
            src={bgImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="container mx-auto py-24 h-screen relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <YearsCheckboxes />
              </div>
              <div>
                <SalaryInfo />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
