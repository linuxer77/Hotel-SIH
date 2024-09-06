"use client"
import React,{useState} from 'react'
import { BsArrowLeftSquareFill , BsArrowRightSquareFill } from 'react-icons/bs';
const slide=[
    {
        url:'https://cdn.pixabay.com/photo/2023/03/07/07/36/stairs-7835153_960_720.jpg'
    },
    {
        url:'https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
   {
    url:'https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?auto=compress&cs=tinysrgb&w=600'
   } 
];
const Calo = () => {
    const [slidee, setslidee] = useState(0)
    const leng=slide.length
    const pslide=()=>{
        setslidee(slidee===leng-1 ? 0 : slidee + 1);
    }
    const nslide=()=>{
        setslidee(slidee===0 ? leng-1 : slidee - 1);
    }
  return (
    <div className='mx-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={pslide} className='absolute top-[50%] text-3xl  text-white cursor-pointer left-8'></BsArrowLeftSquareFill>
      <BsArrowRightSquareFill onClick={nslide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'></BsArrowRightSquareFill>
      {slide.map((item,index)=>(
        <div className={index==slidee ? 'opacity-100':'opacity-0'}>
           {index===slidee && (<img className='w-full rounded-md' src={item.url} />)}
        </div>
      ))}
    </div>
  )
}

export default Calo
