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
      <h1>TOP 30 INTERNATIONAL PLACES</h1>
      <div className="max-w-[1240px] mx-auto px-3 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SELECT
          bg="https://th.bing.com/th/id/OIP.9k1bHHIE3AHUjhIpL9fzWwHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Athens, Greece"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.2jiIZliFgo4w_XxKIN4qCAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Amsterdam, Netherlands"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.CMpSKonl8Kn6L3Oun7BfGwHaD_?w=340&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Agra, India"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.i7k_cruPmQ8BrSGqOyI9VQHaE7?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Bali, Indonesia"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.81zS3xq3euRg3lZEDgJT0AHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Bangkok, Thailand"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.FBfKtgxvx2GIlB03CiFf0wHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Barcelona, Spain"
        ></SELECT>
          <SELECT
          bg="https://th.bing.com/th/id/OIP.l8ZbYz5MBkRUzid575X9agHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Cairo, Egypt"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.bw9RHi9-gSomrJg-vxWSdAHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Cape Town, South Africa"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP._bs7Zqs5z_Ao9chg0t2TvQAAAA?w=300&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Cancun, Mexico"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.1Uoh69hdtTROc35ddjolmAHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Dubai, UAE"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.DedSG31JMCbr1HFZYQKRyQHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Dublin, Ireland"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.CUK7nmnocDW4nTRCVBWkdQHaE7?w=277&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Edinburgh, Scotland"
        ></SELECT>
           <SELECT
          bg="https://th.bing.com/th/id/OIP.80kvWx1K8GxmcHC8tV_vsgHaE7?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Florence, Italy"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.isUXQ_FwoTlDtaSA1ubJdQHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Grand Canyon, USA"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.CNbsRMKM-mlYoXx-tAE3WQHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Honolulu, Hawaii"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.C8Pdu8DWfO09LRisd9KALwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Istanbul, Turkey"
        ></SELECT>
        <SELECT
          bg="https://th.bing.com/th/id/OIP.t-FrL5O0qEyrCkaxANbqzwHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Jerusalem, Israel"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.7eoFIgJFY2Y_oF9gKUvDugHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Kyoto, Japan"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.aljt9n6DPsUN7yBk-GDuWgHaE8?w=287&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="London, England"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.leHaBSMLRAzx_9DP7jJsFgHaFj?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Maldives"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.neHzpEUh5Tiz1SHB2VVGSQHaFj?w=242&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Machu Picchu, Peru"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.u-IfQTiFC0mNUwqtoA45iAHaEK?w=327&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Niagara Falls, Canada/USA"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.OylbJvtEz1vwoCr3kPYOVgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Osaka, Japan:"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.vw8wd5Cz8PifO0oRAgcyRwHaEy?w=301&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Prague, Czech Republic"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.QPZCod0B0vunBD-nW16LuwHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Queenstown, New Zealand"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.NITL98O4BfKohLRTytEPYgAAAA?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Rome, Italy"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.ei_BLcYpLL5xU9iC06jg-gHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Sydney, Australia"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.y_-oEcF-16jVXvqQi9YfPgHaEK?w=325&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Tokyo, Japan"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.DhUG6Yu0tmZor7nuTTN3wwHaFS?w=261&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Tulum, Mexico"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.F1vJOnqbUHYXNgnpxTYGqgHaE8?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Venice, Italy"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.wpNCf2qnRMTjeXDdW5eJ8AHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Xi'an, China"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.fGpCdHGH0Njp-ZfWAJQOmwHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Yellowstone National Park, USA"
        ></SELECT>
         <SELECT
          bg="https://th.bing.com/th/id/OIP.0s1OtXackrJzS_S68YjVwgHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          text="Zurich, Switzerland"
        ></SELECT>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
