import React, { useEffect, useState } from "react";
import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-700 flex justify-center items-center">
      <h1 className="text-white text-4xl">HELLO</h1>
    </div>
  );
}
