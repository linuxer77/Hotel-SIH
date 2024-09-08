"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const Navbar = () => {
  const [n, setn] = useState(false);
  const [l, setl] = useState(false);
  const handlenavbar = () => {
    setn(!n);
    setl(!l);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 oneClick={handlenavbar} className={l ? "hidden" : "block"}>
          Travel
        </h1>
      </div>
      <ul className="hidden md:flex cursor-pointer">
        <Link href="\Home">
          <li>Home</li>
        </Link>
        <Link href="\Vieww">
          <li>View</li>
        </Link>
        <Link href="\Explore">
          <li>Explore</li>
        </Link>
        <Link href="\Hotel">
          <li>Hotels</li>
        </Link>
      </ul>

      <div onClick={handlenavbar} className="md: z-10">
        {n ? (
          <AiOutlineClose className="text-black" size={18} />
        ) : (
          <HiOutlineMenuAlt4 size={18}></HiOutlineMenuAlt4>
        )}
      </div>
      <div
        className={
          n
            ? "text-black absolute left-0 top-0 w-full bg-gray-100/80 px-4 py-7 flex flex-col "
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Travel</h1>
          <Link href="\Home">
            <li className="border-b">Home</li>
          </Link>
          <Link href="\Vieww">
            <li className="border-b">View</li>
          </Link>
          <Link href="\Explore">
            <li className="border-b">Explore</li>
          </Link>
          <Link href="\Hotel">
            <li className="border-b">Hotels</li>
          </Link>
          <div className="flex flex-col"></div>
          <div className="flex justify-between my-5">
            <FaFacebook className="i"></FaFacebook>
            <FaTwitter className="i"></FaTwitter>
            <FaYoutube className="i"></FaYoutube>
            <FaPinterest className="i"></FaPinterest>
            <FaInstagram className="i"></FaInstagram>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
