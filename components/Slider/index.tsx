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
        {slides.map((slide: any, index:any) => (
          <div
            key={index}
            className={`container mx-auto ${index === currentSlide ? "block" : "hidden"}`}
          >
            <div
              className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="md:w-1/2">
                <p className="font-bold text-sm uppercase">{slide.category}</p>
                <p className="text-2xl mb-2 font-bold">{slide.title}</p>
                <p className="text-xl mb-10 leading-none">{slide.description}</p>
                <a
                  href={slide.link}
                  className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>

      <div className="flex justify-between w-12 mx-auto pb-2">
        {slides.map((_:any, index:any) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`rounded-full w-4 pb-2 ${index === currentSlide ? "bg-purple-800" : "bg-purple-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;