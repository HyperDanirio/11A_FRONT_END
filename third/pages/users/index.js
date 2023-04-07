import React, { useEffect, useState } from "react";
import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((res) => setUsers(res))
    );
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-3 gap-10 p-20">
      {users.map((row, index) => (
        <div
          key={index}
          className="transition-all duration-300 ease-in-out my-2 flex flex-col rounded-[20px] border p-4 hover:shadow-lg hover:shadow-red-500/10 cursor-pointer bg-blue-50"
          onClick={() => router.push(`/users/${row.username}`)}
        >
          <span>Username: {row.username}</span>
          <span>Name: {row.name}</span>
          <span>PhoneNumber: {row.phone}</span>
          <span>E-mail: {row.email}</span>
        </div>
      ))}
    </div>
  );
};

export default Users;
