import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";


const Footer = () => {
  return (
    <div className='flex justify-between px-12 align-center py-6  bg-gray-200'>
      <div>
      <h1 className=" mt-[60%] text-2xl sm:text-3xl lg:text-4xl ">
          Best <span className=" my-auto font-bold text-orange-400">Eats</span>
        </h1>
      </div>
      <div className=' my-auto'>
        <h1 className='font-bold text-4xl'>"Life is <span className='text-orange-400'>too</span> short to <span className='text-orange-400'>eat</span>  boring <span className='text-orange-400'>food</span>" </h1></div>
      
      <div>
      <ul className="flex flex-col p-4 text-gray-800 ">
            <li className=" text-lg  hover:text-orange-400  text-center flex"><TbTruckDelivery size={20} className="mr-4 mt-1 text-orange-400" />Orders</li>
            <li className=" text-lg  hover:text-orange-400  text-center flex"><MdFavorite size={20} className="mr-4  mt-1 text-orange-400" />Favorites </li>
            <li className=" text-lg  hover:text-orange-400  text-center flex"><FaWallet size={20} className="mr-4  mt-1 text-orange-400" />Wallet</li>
            <li className=" text-lg  hover:text-orange-400  text-center flex"><MdHelp size={20} className="mr-4  mt-1 text-orange-400" />Help</li>
            <li className=" text-lg   hover:text-orange-400 text-center flex"><AiFillTag size={20} className="mr-4  mt-1 text-orange-400" />Promotions</li>
            <li className=" text-lg   hover:text-orange-400 text-center flex"><BsFillSaveFill className="mr-4  mt-1 text-orange-400" />Best One</li>
            <li className=" text-lg  hover:text-orange-400  text-center flex"><FaUserFriends size={20} className="mr-4  mt-1 text-orange-400" />invite Friends</li>
          </ul>
      </div>

    </div>
  )
}

export default Footer
