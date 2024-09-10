import React from "react";
import Header from "@/app/Components/Header";
import Navbar from "@/app/Navbar";
import Destination from "@/app/Destination";
import SearchIY from "@/app/SearchIY";
import Select from "@/app/Select";
// import Calo from "@/app/Calo";
import Footer from "@/app/Footer";
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Destination></Destination>
      <SearchIY></SearchIY>
      <Select></Select>
      {/* <Calo></Calo> */}
      <Footer></Footer>
    </div>
  );
};

export default page;
