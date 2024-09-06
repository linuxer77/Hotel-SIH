"use client"; // Add this at the top of the file

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the request to your Flask backend
    const response = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(data); // Display the fetched data (you can update the state to display it in the frontend)
  };

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover color"
        src="https://videos.pexels.com/video-files/2096553/2096553-sd_640_360_30fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>First Class Travel</h1>
          <h2 className="py-4">Top 1% Locations Worldwide</h2>
          <form
            className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/100"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent w-[300px] sm:w-400px focus:outline-none"
              type="text"
              placeholder="Talk with AI"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update the query state
            />
            <div>
              <button type="submit">
                <AiOutlineSearch style={{ color: "#ffffff" }} size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
