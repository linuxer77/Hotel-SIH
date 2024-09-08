"use client";

import React, { useEffect, useState } from "react";

const Results = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("searchResults");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log("Fetched Data:", parsedData); // Debugging log
      setData(parsedData);
    }
  }, []);

  if (!data) {
    return <div>No data available</div>;
  }

  // Check for properties in the data and log them
  if (!data.properties || data.properties.length === 0) {
    console.log("Properties field is missing or empty");
    return <div>No properties available</div>;
  }

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "16px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    margin: "16px 0",
  };

  const textStyle = {
    margin: "8px 0",
  };

  return (
    <div>
      <h1>Search Results</h1>
      <div style={containerStyle}>
        {data.properties.map((hotel, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={
                hotel.images?.[0]?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={hotel.name}
              style={imageStyle}
            />
            <h2 style={titleStyle}>{hotel.name}</h2>
            <p style={textStyle}>
              <strong>Rating:</strong> {hotel.overall_rating || "N/A"} / 5
            </p>
            <p style={textStyle}>
              <strong>Price per night:</strong> ₹
              {hotel.rate_per_night?.extracted_lowest || "N/A"}
            </p>
            <p style={textStyle}>
              <strong>Location:</strong>{" "}
              {hotel.nearby_places?.[0]?.name || "N/A"}
            </p>
            <p style={textStyle}>
              <strong>Amenities:</strong> {hotel.amenities?.join(", ") || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
