import React from "react";
import Slider from "react-slick"; 

import {AlbumItem} from "./AlbumItem";
import album from "../data/album";
import { v4 as uuidv4 } from 'uuid';



export const Album = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
   

    responsive: [
      {
        breakpoint: 767, // breakpoint para pantallas de 640px o menos
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 1023, // breakpoint para pantallas de 640px o menos
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

  };

  return (
    <>

      <div className="flex flex-col md:flex-row items-center p-4 justify-center">


        <Slider {...settings} className="w-full border dark:border-stone-900 border-white">
          {album.map((project) => (
            <>
              <div className="flex justify-center py-4 " >
              <AlbumItem
              key={uuidv4()}
              imgUrl={project.imgUrl}
              title={project.title}
              year={project.year}
              duration={project.link}
              details={project.details}

            />
              </div>
             
            </>

          ))}
        </Slider>
      </div>
    </>

  );
};
