import React from "react";
import Header from "@/app/Components/Header";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="max-w-[1240px] mx-auto p-16 px-4 text-center">
        <h1>All-Inclusive Resort and Hotels</h1>
        <p className="py-4">On the Best Places</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Amanyara.jpg"
            alt="Amanyara resort scenic view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/OneOnly_Portonovi.jpg"
            alt="One & Only Portonovi resort view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Bellagio%20Shanghai.jpg"
            alt="Bellagio Shanghai hotel"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Castel-Moastero_Borgo.jpg"
            alt="Castel Monastero Borgo scenic view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Belmond-La-Residencia.jpg"
            alt="Belmond La Residencia view"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-16 px-4 text-center">
        <h1>Luxury Hotels</h1>
        <p className="py-4">On the Best prices</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/OneOnly_Portonovi.jpg"
            alt="One & Only Portonovi resort scenic view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Lodhi-New-Delhi.jpg"
            alt="Lodhi New Delhi luxury hotel"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Lodhi-New-Delhi.jpg"
            alt="Lodhi New Delhi luxury hotel"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/0%20-%2010593_Le-StJames_entry.jpg"
            alt="Le St. James entrance view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/The%20Chedi%20Muscat.jpg"
            alt="The Chedi Muscat hotel"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-16 px-4 text-center">
        <h1>Seven Stars Hotels</h1>
        <p className="py-4">On the Best Places</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Hotel%20Kulm%20St.%20Moritz.jpg"
            alt="Kulm Hotel St. Moritz view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Cavallo-Point_LodgeSF.jpg"
            alt="Cavallo Point Lodge San Francisco view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Cavallo-Point_LodgeSF.jpg"
            alt="Cavallo Point Lodge scenic view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/Victoria-Jungfrau.jpg"
            alt="Victoria Jungfrau Grand Hotel view"
          />
          <img
            className="w-full h-full object-cover"
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/home_page_hero_image/SIG%20Baglioni%20Hotel%20London.jpg"
            alt="Baglioni Hotel London"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
