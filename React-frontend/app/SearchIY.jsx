"use client";
import React , {useState} from "react";
import { RiCustomerService2Fill, RiCustomerService2Full } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const SearchIY = () => {
  const [Datee, setDatee] = useState("");
  const [Que, setQue] = useState("");
  const [Det, setDet] = useState("");
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS</h2>
          <p className="py-4">
            Experience the Ultimate Luxury All-Inclusive Vacation for Four
            Indulge in the epitome of luxury with an all-inclusive vacation
            designed for four people. Imagine staying in a stunning overwater
            bungalow in the Maldives, where every detail is taken care of. Enjoy
            gourmet dining, private beach access, and a plethora of activities
            such as snorkeling, kayaking, and sunset cruises. For those seeking
            adventure, a safari lodge in Botswana offers an unparalleled
            experience with included safari tours, riverboat excursions, and
            exquisite meals. Witness the majestic wildlife in their natural
            habitat while enjoying the comforts of a five-star resort. If a
            tropical paradise is more your style, consider a private island
            retreat in Panama. With seven pristine beaches and lush jungle
            surroundings, you can explore the beauty of nature while enjoying
            all-inclusive meals, beverages, and guided tours.
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
      <div>
        <div className="border text-center">
          <p className="py-2">Query and Help Provider</p>
          <p className="bg-gray-800 text-gray-200 py-2">24 Hours Available For Your Help</p>
        </div>
        <form
          className="w-full"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="7d9da9b8-2ae3-400d-bcdf-16b87694d175"
          />
          <div className="flex flex-col my-2">
            <label>Email_ID</label>
            <input
              className="border rounded-md py-2"
              type="text"
              placeholder="Enter your Personal ID"
              name="Email_ID"
              value={Datee}
              onChange={(e)=>setDatee(e.target.value)}
            />
          </div>
          <div className=" flex flex-col my-2 ">
            <label>Type of Query</label>
            <input
              className="border rounded-md py-2 "
              type="text"
              name="Type of Query"
              value={Que}
              onChange={(e)=>setQue(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Query Details</label>
            <input
              className="border rounded-md py-2"
              type="text"
              name="Query Details"
              value={Det}
              onChange={(e)=>setDet(e.target.value)}
            />
          </div>
          <button className="w-full my-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchIY;
