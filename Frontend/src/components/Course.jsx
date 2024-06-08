// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Card from './Card';
import {Link} from "react-router-dom";
import axios from "axios";


const Course = () => {
  const [book, setBook] = useState([]);
  const getBook = async() => {
    try {
      const data = await axios.get("http://localhost:4000/book");
      console.log(data.data, "data1");
      setBook(data.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }      
  };

  useEffect(() => {    
    getBook();
  }, [])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center text-center justify-center'>
            <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here!! :)</span> </h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima enim vel sapiente maxime! Id labore, placeat, illum iusto autem minus magni nam dolorem eaque, dignissimos optio. Nostrum, cum cumque.</p>
            <Link to="/">
            <button className='bg-pink-500 text-white mt-6 rounded-md px-2 py-1 cursor-pointer hover:bg-pink-600'>Back</button>
            </Link>
        </div>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item) => (<Card item={item} key={item.id}/>))}
        </div>
    </div>
    </>
  )
}

export default Course;