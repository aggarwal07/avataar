import React from "react";
import { useState, useEffect } from "react";
import "./Menue.css";

const Menu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsiveIndex, setResponsiveIndex] = useState(10);
  const [conditionalWidth, setConditionalWidth] = useState(1760);
  const tabs = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Electronics",
    },
    {
      id: 3,
      title: "Books",
    },
    {
      id: 4,
      title: "Music",
    },
    {
      id: 5,
      title: "Movies",
    },
    {
      id: 6,
      title: "Clothing",
    },
    {
      id: 7,
      title: "Games",
    },
    {
      id: 8,
      title: "Furniture",
    },
    {
      id: 9,
      title: "Travel",
    },
    {
      id: 10,
      title: "Botanical",
    },
    {
      id: 11,
      title: "Category Name",
    },
  ];
  const handleResize = () => {
    if (conditionalWidth-windowWidth>150){
      setConditionalWidth(windowWidth);
      setResponsiveIndex(responsiveIndex-1);
    }
    if (windowWidth-conditionalWidth>150){
      setConditionalWidth(windowWidth);
      setResponsiveIndex(responsiveIndex+1);
    }
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <div>
      <ul className="menuList">
        {tabs.map((item,i)=>{
          return <li className={`${i>=responsiveIndex?"block":"hidden"}`} key={i}>{item.title}</li>
        })}
        </ul>
    </div>
  );
};

export default Menu;
