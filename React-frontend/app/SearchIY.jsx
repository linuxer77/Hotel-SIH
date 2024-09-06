import React from "react";
import { RiCustomerService2Fill, RiCustomerService2Full } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const SearchIY = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR FOUR PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            molestias dolore itaque. Veniam cumque asperiores voluptas quam sint
            ab rem explicabo est in quae delectus eius aliquam enim, dignissimos
            tempora sed et cupiditate quis accusamus nobis quod nesciunt culpa.
            Consectetur vero aspernatur dolor commodi, eius cumque rem iste
            repellat quam labore provident tempora reprehenderit, accusamus
            delectus exercitationem optio voluptates! Velit debitis libero
            iusto. Distinctio esse ea vel, reiciendis cum voluptatibus corporis
            temporibus soluta id! Velit deleniti autem amet expedita. Unde error
            sapiente soluta rerum maiores, sed neque exercitationem repellendus
            nemo? Veniam, ut deserunt libero esse voluptatum minima reiciendis
            repudiandae nulla!
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
                ALL INCLUSIVE SERVICE FOR 20 Years IN-A-ROW
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
                ALL INCLUSIVE SERVICE FOR 20 Years IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border text-center">
        <h1 className="py-2">Get an 10% discount on your first order.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempore
          voluptates porro ducimus reiciendis nesciunt nisi qui necessitatibus
          illo iusto ut praesentium assumenda, sit molestias, recusandae quidem
          et cumque dignissimos! Molestias porro fugit inventore dignissimos
          iure possimus repellendus natus, voluptate atque magni sint recusandae
          voluptates cupiditate earum incidunt itaque mollitia quos ducimus
          adipisci quae hic magnam debitis iusto. Placeat quia autem aperiam
          architecto aliquid consequatur maxime in, voluptates atque id?
        </p>
      </div>
    </div>
  );
};

export default SearchIY;
