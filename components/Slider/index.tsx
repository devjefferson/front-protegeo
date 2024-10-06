import { Post } from "@/services/post";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Slider = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-8">
      <div className="sliderAx h-auto">
        {slides.map((slide: Post, index:any) => (
          <div
            key={slide.slug}
            className={`container mx-auto ${index === currentSlide ? "block" : "hidden"}`}
          >
            <div
              className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="md:w-1/2 bg-slate-50/30 mb-6 px-2">
               <div className="py-2">
               <p className="font-bold text-sm uppercase text-overlay">{slide.category}</p>
                <p className="text-2xl mb-2 font-bold text-overlay">{slide.title}</p>
                <p className="text-xl line-clamp-1  text-ellipsis text-overlay mb-10 h-10 leading-none">{slide.content}</p>
               </div>
               
              </div>
              <Link
                  href={`/noticias/${slide.slug}`} 
                  className=" bg-gray-700 	py-4 px-8 text-white text-balance font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                >
                  Saiba mais
                </Link>
            </div>
            <br />
          </div>
        ))}
      </div>

      <div className="flex  gap-2 mx-auto pb-2 justify-center">
        {slides.map((_:any, index:any) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`rounded-full h-4 w-4 pb-2 ${index === currentSlide ? "bg-purple-800" : "bg-purple-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;