import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4 ">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Travel</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="i"></FaFacebook>
            <FaTwitter className="i"></FaTwitter>
            <FaYoutube className="i"></FaYoutube>
            <FaPinterest className="i"></FaPinterest>
            <FaInstagram className="i"></FaInstagram>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
          <Link href="\Home"><li>Home</li></Link>
      <Link href="\Vieww"><li>View</li></Link>
      <Link href="\Travel"><li>Travel</li></Link>
      <Link href="\Destinations"><li>Destinations</li></Link>
      <Link href="\Book"><li>Book</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
