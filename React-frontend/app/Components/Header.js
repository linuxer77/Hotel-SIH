"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://flask-app-for-sih-hosting-1.onrender.com/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: searchQuery }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();

      // Store the JSON response in sessionStorage
      sessionStorage.setItem("searchResults", JSON.stringify(jsonResponse));

      // Navigate to the results page
      router.push(`/results`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2096553/2096553-sd_640_360_30fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1 style={{ fontSize: "27px" }}>
            Discover Unique Travel Destinations
          </h1>
          <h2 style={{ fontSize: "20px" }} className="py-3">
            Unlock Travel Deals with AI
          </h2>
          <form
            className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/100"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
              type="text"
              placeholder="Explore with AI"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <AiOutlineSearch
                className="i"
                style={{ color: "#ffffff" }}
                size={18}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
