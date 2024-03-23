import React, { useState, useRef } from "react";
import "./Carousel.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  const sliderImg = [
    {
      "id": 0,
      "src": "./Images/slider/1.png",
      "captions": "Carousel Caption 1"
    },
    {
      "id": 1,
      "src": "./Images/slider/2.png",
      "captions": "Carousel Caption 2"
    },
    {
      "id": 2,
      "src": "./Images/slider/3.png",
      "captions": "Carousel Caption 3"
    },
    {
      "id": 3,
      "src": "./Images/slider/4.png",
      "captions": "Carousel Caption 4"
    },
    {
      "id": 4,
      "src": "./Images/slider/5.png",
      "captions": "Carousel Caption 5"
    },
  ];

  const arrayRef = useRef([]);

  // Initialize arrayRef with initial values
  if (arrayRef.current.length === 0) {
    arrayRef.current = sliderImg.map(item => item.id);
  }

  const forward = () => {
    arrayRef.current = arrayRef.current.map(id => id + 1);
  };

  const backward = () => {
    arrayRef.current = arrayRef.current.map(id => id - 1);
  };

  const [index, setIndex] = useState(Math.floor(sliderImg.length / 2));

  return (
    <div className="slider">
      <div className="slider-box">
        {sliderImg[arrayRef.current[0]]?.src&&<div className="third-row left-3">
          <img className="image" src={sliderImg[arrayRef.current[0]].src} alt="slider1" />
          <p className="caption">{sliderImg[arrayRef.current[0]].captions}</p>
        </div>}
        {sliderImg[arrayRef.current[1]]?.src&&<div className="second-row left-2">
          <img className="image" src={sliderImg[arrayRef.current[1]].src} alt="slider1" />
          <p className="caption">{sliderImg[arrayRef.current[1]].captions}</p>
        </div>}
        {sliderImg[arrayRef.current[2]]?.src&&<div className="imageBox">
          <img className="image" src={sliderImg[arrayRef.current[2]].src} alt="slider1" />
          <p className="caption">{sliderImg[arrayRef.current[2]].captions}</p>
        </div>}
        {sliderImg[arrayRef.current[3]]?.src&&<div className="second-row right-2">
          <img className="image" src={sliderImg[arrayRef.current[3]].src} alt="slider1" />
          <p className="caption">{sliderImg[arrayRef.current[3]].captions}</p>
        </div>}
        {sliderImg[arrayRef.current[4]]?.src&&<div className="third-row right-3">
          <img className="image" src={sliderImg[arrayRef.current[4]].src} alt="slider1" />
          <p className="caption">{sliderImg[arrayRef.current[4]].captions}</p>
        </div>}
      </div>
      <div className="dotsBox">
        <FaArrowLeft className="arrows" size={20} onClick={() => {index>0&&setIndex(index - 1);index>0&& backward(); }} />
        {sliderImg.map((item, i) => (<div key={i} className={`${i === index ? "selected-dot" : "dots"}`}></div>))}
        <FaArrowRight className="arrows" size={20} onClick={() => {index<sliderImg.length-1&& setIndex(index + 1);index<sliderImg.length-1&&  forward(); }} />
      </div>
    </div>
  );
};

export default Carousel;
