// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import axios from "axios";


const FreeBook = () => {
  const [fbook, setFbook] = useState([]);

  const getbook = async() => {
    const data = await axios.get("http://localhost:4000/book");
    console.log(data);
    setFbook(data.data);
  };
    const filterData = fbook.filter((item) => item.Category === "Free");
    console.log(filterData,"====");

    useEffect(() => {
      getbook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='text-xl mt-10 pb-2'>Free Offered Book</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis inventore, praesentium non, perspiciatis atque maiores aliquid obcaecati asperiores voluptates quae tempore odio placeat vel, consectetur qui voluptas assumenda! Odio, aliquid.</p>

        <div className="slider-container">
      <Slider {...settings}>        
        {filterData.map((item) => (<Card item= {item} key={item.id}/>))}
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default FreeBook;