import React from "react";
import Header from "@/app/Components/Header";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import SELECT from "@/app/Product/SELECT";
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className="max-w-[1240px] mx-auto px-3 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SELECT
          bg="https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="Maldives"
        ></SELECT>
        <SELECT
          bg="https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="Dubai"
        ></SELECT>
        <SELECT
          bg="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="Bali"
        ></SELECT>
        <SELECT
          bg="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="America"
        ></SELECT>
        <SELECT
          bg="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="South Africa"
        ></SELECT>
        <SELECT
          bg="https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="Japan"
        ></SELECT>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
