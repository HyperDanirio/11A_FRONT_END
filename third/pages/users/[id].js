import React, { useEffect, useState } from "react";
import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export async function getServerSideProps(context) {
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersJson = await usersData.json();
  console.log(context.query);
  console.log(context.query.id);
  const user = usersJson.find((e) => e.username == context.query.id);
  console.log(user);
  return (
    <div className="w-screen h-screen flex justify-center items-center"></div>
  );
}
