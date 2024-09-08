"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Results = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");

  let data;
  try {
    data = JSON.parse(decodeURIComponent(dataString));
  } catch (error) {
    console.error("Error parsing JSON:", error);
    data = null;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Results;
