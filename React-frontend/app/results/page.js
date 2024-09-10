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

  // Styling
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Ensures content is spaced properly
    height: "100%", // Make the card take full height of the parent
    overflow: "hidden",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 24px rgba(0, 0, 0, 0.25)",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "16px 16px 0 0",
  };

  const titleStyle = {
    fontSize: "1.6rem",
    margin: "16px 0",
    color: "#3C415C",
  };

  const textStyle = {
    margin: "8px 0",
    fontSize: "1rem",
    color: "#6D6875",
  };

  const priceStyle = {
    color: "#4E9F3D",
    fontWeight: "bold",
  };

  const ratingStyle = {
    backgroundColor: "#FFCF56",
    color: "#FFF",
    padding: "4px 12px",
    borderRadius: "12px",
    fontWeight: "bold",
    display: "inline-block",
  };

  const buttonStyle = {
    backgroundColor: "#6C63FF",
    color: "#FFF",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "12px 0 0 0", // To add margin only on top of the button
  };

  const buttonHoverStyle = {
    backgroundColor: "#5244D4",
  };

  return (
    <div>
      <div style={containerStyle}>
        {data.properties.map((hotel, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, cardStyle);
            }}
          >
            <img
              src={
                hotel.images?.[0]?.thumbnail ||
                hotel.images?.[1]?.thumbnail ||
                hotel.images?.[2]?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={hotel.name}
              style={imageStyle}
            />
            <div style={{ padding: "16px" }}>
              <h2 style={titleStyle}>{hotel.name}</h2>
              <p style={textStyle}>
                <strong>Location:</strong>{" "}
                {hotel.nearby_places?.[0]?.name || "N/A"}
              </p>
              <p style={textStyle}>
                <strong>Services:</strong>{" "}
                {hotel.amenities?.join(", ") || "N/A"}
              </p>
              <p style={priceStyle}>
                <strong>Price per night: </strong>
                {hotel.rate_per_night?.lowest || "N/A"}
              </p>
              <p style={ratingStyle}>{hotel.overall_rating || "N/A"} / 5</p>
            </div>
            <a
              href={hotel.link ? hotel.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={buttonStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, buttonHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, buttonStyle);
                }}
              >
                {hotel.link
                  ? "Book Now"
                  : "Booking site not available right now."}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
