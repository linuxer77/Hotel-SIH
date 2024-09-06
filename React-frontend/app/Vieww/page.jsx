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
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
          <div>
            <h2>LUXURY INCLUDED VACATIONS FOR FOUR PEOPLE</h2>
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              molestias dolore itaque. Veniam cumque asperiores voluptas quam
              sint ab rem explicabo est in quae delectus eius aliquam enim,
              dignissimos tempora sed et cupiditate quis accusamus nobis quod
              nesciunt culpa. Consectetur vero aspernatur dolor commodi, eius
              cumque rem iste repellat quam labore provident tempora
              reprehenderit, accusamus delectus exercitationem optio voluptates!
              Velit debitis libero iusto. Distinctio esse ea vel, reiciendis cum
              voluptatibus corporis temporibus soluta id! Velit deleniti autem
              amet expedita. Unde error sapiente soluta rerum maiores, sed neque
              exercitationem repellendus nemo? Veniam, ut deserunt libero esse
              voluptatum minima reiciendis repudiandae nulla!
            </p>
          </div>
        </div>
        <div className="border text-center">
          <h1 className="py-2">Get an 10% discount on your first order.</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempore voluptates porro ducimus reiciendis nesciunt nisi qui
            necessitatibus illo iusto ut praesentium assumenda, sit molestias,
            recusandae quidem et cumque dignissimos! Molestias porro fugit
            inventore dignissimos iure possimus repellendus natus, voluptate
            atque magni sint recusandae voluptates cupiditate earum incidunt
            itaque mollitia quos ducimus adipisci quae hic magnam debitis iusto.
            Placeat quia autem aperiam architecto aliquid consequatur maxime in,
            voluptates atque id?
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
