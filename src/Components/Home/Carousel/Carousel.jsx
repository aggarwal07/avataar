import React, { useState, useRef } from "react";
import "./Carousel.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  const sliderImg = [
    {
      id: 0,
      src: "./Images/slider/1.png",
      captions: "Carousel Caption 1",
    },
    {
      id: 1,
      src: "./Images/slider/2.png",
      captions: "Carousel Caption 2",
    },
    {
      id: 2,
      src: "./Images/slider/3.png",
      captions: "Carousel Caption 3",
    },
    {
      id: 3,
      src: "./Images/slider/4.png",
      captions: "Carousel Caption 4",
    },
    {
      id: 4,
      src: "./Images/slider/5.png",
      captions: "Carousel Caption 5",
    },
  ];

  const arrayRef = useRef([]);

  // Initial arrayRef with iniial values
  if (arrayRef.current.length === 0) {
    arrayRef.current = sliderImg.map((item) => item.id);
  }

  const forward = () => {
    arrayRef.current = arrayRef.current.map((id) => id + 1);
  };

  const backward = () => {
    arrayRef.current = arrayRef.current.map((id) => id - 1);
  };

  const [index, setIndex] = useState(Math.floor(sliderImg.length / 2));
  //Animations
  const fadeF = () => {
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.classList.add("fade-out");
    document.querySelector(".imageBox").classList.add("activeF");
    const elements = document.getElementsByClassName("second-row");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("activeF");
    }
    setTimeout(() => {
      mainDiv.classList.remove("fade-out");
      document.querySelector(".imageBox").classList.remove("activeF");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("activeF");
      }
    }, 250);
  };
  const fadeB = () => {
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.classList.add("fade-out");
    document.querySelector(".imageBox").classList.add("activeB");
    const elements = document.getElementsByClassName("second-row");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("activeB");
    }
    setTimeout(() => {
      mainDiv.classList.remove("fade-out");
      document.querySelector(".imageBox").classList.remove("activeB");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("activeB");
      }
    }, 250);
  };

  return (
    <div className="slider">
      <div className="slider-box">
        {sliderImg[arrayRef.current[0]]?.src && (
          <div className="third-row left-3">
            <img
              className="image"
              src={sliderImg[arrayRef.current[0]].src}
              alt="slider1"
            />
            <p className="caption">{sliderImg[arrayRef.current[0]].captions}</p>
          </div>
        )}
        {sliderImg[arrayRef.current[1]]?.src && (
          <div className="second-row left-2">
            <img
              className="image"
              src={sliderImg[arrayRef.current[1]].src}
              alt="slider1"
            />
            <p className="caption">{sliderImg[arrayRef.current[1]].captions}</p>
          </div>
        )}
        {sliderImg[arrayRef.current[2]]?.src && (
          <div id="mainDiv" className="imageBox">
            <img
              className="image"
              src={sliderImg[arrayRef.current[2]].src}
              alt="slider1"
            />
            <p className="caption">{sliderImg[arrayRef.current[2]].captions}</p>
          </div>
        )}
        {sliderImg[arrayRef.current[3]]?.src && (
          <div className="second-row right-2">
            <img
              className="image"
              src={sliderImg[arrayRef.current[3]].src}
              alt="slider1"
            />
            <p className="caption">{sliderImg[arrayRef.current[3]].captions}</p>
          </div>
        )}
        {sliderImg[arrayRef.current[4]]?.src && (
          <div className="third-row right-3">
            <img
              className="image"
              src={sliderImg[arrayRef.current[4]].src}
              alt="slider1"
            />
            <p className="caption">{sliderImg[arrayRef.current[4]].captions}</p>
          </div>
        )}
      </div>
      <div className="dotsBox">
        <FaArrowLeft
          className={`arrows ${index === 0 ? "hidden" : ""}`}
          size={20}
          onClick={() => {
            if (index > 0) {
              setTimeout(() => {
                backward();
                setIndex(index - 1);
              }, 250);
            }
            fadeB();
          }}
        />
        {sliderImg.map((item, i) => (
          <div
            key={i}
            className={`${i === index ? "selected-dot" : "dots"}`}
          ></div>
        ))}
        <FaArrowRight
          className={`arrows ${index === sliderImg.length - 1 ? "hidden" : ""}`}
          size={20}
          onClick={() => {
            if (index < sliderImg.length - 1) {
              setTimeout(() => {
                forward();
                setIndex(index + 1);
              }, 250);
            }
            fadeF();
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
