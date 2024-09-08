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
      <div className='max-w-[1240px] mx-auto p-16 px-4 text-center'>
        <h1>All-Inclusive Places</h1>
        <p className='py-4'>On the Best Places</p>   
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src="https://www.tourmyindia.com/blog//wp-content/uploads/2024/07/Best-Places-to-Visit-in-Kerala.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2024/07/Thekkady-Kerala-768x472.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2024/07/Kochi-Kerala-768x472.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2024/07/Payyambalam-Beach-Kannur-Kerala-768x472.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2024/07/Munnar-Kerala-768x472.jpg"/>
        </div>
    </div>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
          <div>
            <h2>India OverView</h2>
            <p className="py-4">
              India Overview India, officially known as the Republic of India,
              is a vast and diverse country located in South Asia. It is
              bordered by Pakistan to the northwest, China, Nepal, and Bhutan to
              the north, and Bangladesh and Myanmar to the east. To the south,
              India is surrounded by the Indian Ocean, making it a peninsula.
              With its unique geographical location, India is often referred to
              as the "subcontinent". India is a federal union comprising 28
              states and 8 union territories. Each state has its own distinct
              culture, traditions, and languages, contributing to the rich
              tapestry of India's diversity. The country's population is one of
              the world's largest, with over 1.3 billion people, making it a
              vibrant and dynamic nation. The climate and weather in India vary
              greatly due to its vast size and diverse topography. From the
              snowy peaks of the Himalayas in the north to the tropical beaches
              in the south, India experiences a wide range of climatic
              conditions, including tropical, subtropical, desert, and alpine
              climates. India's history is steeped in ancient civilizations and
              has witnessed the rise and fall of various empires and dynasties.
              The country is home to several UNESCO World Heritage Sites,
              reflecting its rich historical and cultural heritage. The
              Himalayas, the world's highest mountain range, are a prominent
              feature of India's geography. These majestic peaks not only add to
              the country's scenic beauty but also hold significant cultural and
              spiritual importance for various religions. Religion plays a vital
              role in India, with Hinduism, Islam, Christianity, Sikhism,
              Buddhism, and Jainism being some of the major religions practiced
              here. The country celebrates a multitude of festivals and cultural
              events, making it a year-round carnival of colors and traditions.
            </p>
          </div>
        </div>
        <div className="text-left border">
        <h3 className="text-center">Climate Overview</h3>
          <p className="py-4">
            India experiences a diverse climate and weather conditions due to
            its vast size and geographical features. The country is
            characterized by five main seasons: Spring, Summer, Monsoon, Autumn,
            and Winter. The Summer season, from April to mid-June, brings
            scorching temperatures, especially in the northern plains. The
            Monsoon, from mid-June to Sept, brings heavy rainfall, crucial
            for agriculture. Winter, from November to February, varies from mild
            to severe cold, with snowfall in some regions. Autumn and Spring
            provide pleasant weather with moderate temperatures. India's climate
            is influenced by the Himalayas, oceans, and geographical variations,
            resulting in a rich and varied weather pattern.The country's population is one of
              the world's largest, with over 1.3 billion people, making it a
              vibrant and dynamic nation. The climate and weather in India vary
              greatly due to its vast size and diverse topography.
          </p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-16 px-4 text-center'>
        <h1>Adventures Places</h1>
        <p className='py-4'>Best Summer Destinations</p>   
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Jodhpur-Rajasthan.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Rann-of-Kutch-Gujarat.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/imagess/nepal1-tours.webp"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Best-Places-to-Visit-in-February-in-India.jpg"/>
            <img className='w-full h-full object-cover' src="https://www.tourmyindia.com/imagess/wildlife-tour.webp"/>
        </div>
    </div>
          <Footer></Footer>
    </div>
  );
};

export default page;
