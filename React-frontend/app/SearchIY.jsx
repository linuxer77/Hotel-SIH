"use client";
import React, { useState } from "react";
import { RiCustomerService2Fill, RiCustomerService2Full } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const SearchIY = () => {
  const [Datee, setDatee] = useState("");
  const [Que, setQue] = useState("");
  const [Det, setDet] = useState("");
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>INNOVATIVE TOURISM EXPERIENCES</h2>
          <p className="py-4">
            Discover a New Era of Travel and Tourism Innovation Step into the
            future of travel with cutting-edge solutions that redefine the way
            you explore the world. Imagine personalized travel itineraries
            designed using AI, where your preferences for culture, adventure, or
            relaxation shape your journey. Experience smart tourism with
            immersive virtual tours of historic landmarks, allowing you to
            explore from the comfort of your home or pre-plan your next
            adventure. For eco-conscious travelers, discover sustainable tourism
            options, from eco-lodges in pristine forests to renewable
            energy-powered resorts, all designed to minimize your environmental
            footprint while maximizing your experience. If cultural heritage is
            your focus, engage in community-based tourism that supports local
            artisans, traditions, and unique cultural experiences, all while
            contributing to regional growth. Whether it’s an AI-driven hotel
            booking platform, dynamic travel recommendations, or seamless
            integration of local transportation and accommodations, these
            solutions offer a glimpse into the future of a thriving tourism
            industry
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={48}></RiCustomerService2Fill>
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                DRIVING TOURISM GROWTH FOR 20 YEARS THROUGH TECHNOLOGY &
                INNOVATION Pioneering Innovation{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={48}></MdOutlineTravelExplore>
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                DRIVING TOURISM GROWTH FOR 20 YEARS THROUGH TECHNOLOGY &
                INNOVATION Pioneering Innovation{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="py-2">Query and Help Provider</p>
          <p className="bg-gray-800 text-gray-200 py-2">
            24 Hours Available For Your Help
          </p>
        </div>
        <form
          className="w-full"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="7d9da9b8-2ae3-400d-bcdf-16b87694d175"
          />
          <div className="flex flex-col my-2">
            <label>Email_ID</label>
            <input
              className="border rounded-md py-2"
              type="text"
              placeholder="Enter your Personal ID"
              name="Email_ID"
              value={Datee}
              onChange={(e) => setDatee(e.target.value)}
            />
          </div>
          <div className=" flex flex-col my-2 ">
            <label>Type of Query</label>
            <input
              className="border rounded-md py-2 "
              type="text"
              name="Type of Query"
              value={Que}
              onChange={(e) => setQue(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Query Details</label>
            <input
              className="border rounded-md py-2"
              type="text"
              name="Query Details"
              value={Det}
              onChange={(e) => setDet(e.target.value)}
            />
          </div>
          <button className="w-full my-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchIY;
