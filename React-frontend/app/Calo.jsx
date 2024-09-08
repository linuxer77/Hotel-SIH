"use client"
import React,{useState} from 'react'
import { BsArrowLeftSquareFill , BsArrowRightSquareFill } from 'react-icons/bs';
const slide=[
    {
        url:'https://wallpaperaccess.com/full/5486091.jpg'
    },
    {
        url:'https://wallpaperaccess.com/full/7158839.jpg'
    },
   {
    url:'https://wallpaperaccess.com/full/8075226.jpg'
   } ,
   {
    url: 'https://wallpaperaccess.com/full/7685657.jpg'
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
           {index === slidee && (< img className='w-full rounded-md' src={item.url} / > ) 
           }
        </div>
      ))}
    </div>
  )
}

export default Calo
