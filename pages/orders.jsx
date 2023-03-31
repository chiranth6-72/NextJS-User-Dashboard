import Head from "next/head";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data";

const orders = () => {
  return (
    <>
      <Head>
        <title>Dash - Bolt</title>
        <link rel="icon" href="/icons8-lightning-bolt-96.png" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2>Orders</h2>
          <h2>Welcome Back, Chiranth</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Order</span>
              <span className="sm:text-left text-right" >Status</span>
              <span className="hidden md:grid" >Last Order</span>
              <span className="hidden sm:grid" >Method</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default orders;
