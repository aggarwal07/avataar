import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Menu from "./Menu/Menu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [conditionalWidth, setConditionalWidth] = useState(1760);
  const [responsiveIndex, setResponsiveIndex] = useState(10);
  const toggleMenue = () => {
    setMenuOpen(!isMenuOpen);
  };
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
    <div className="flex navbar justify-center item-center">
      {/* <p>{windowWidth}</p> */}
      <div className="flex w-fit mx-auto">

      
      <div className="logo flex w-fit h-fit item-center">
        {/* <img src="" alt="Logo" /> */}
        <p className="Logo-Text min-w">E-COMM</p>
      </div>
      <div className="Navbar-Content flex item-center uppercase">
        {tabs.map((item, i) => (
          <p className={`tabs min-w pointer ${i>=responsiveIndex?"hidden":"flex"}`} key={i}>
            {item.title}
          </p>
        ))}
        <div className="tabs dropdown-container pointer flex relative">
          More
          <RiArrowDropDownLine
            onClick={toggleMenue}
            size={40}
            className="pointer "
          />
          {isMenuOpen && (
            <div className="absolute menu">
              <Menu />
            </div>
          )}
        </div>
      </div>
      <div className="search-bar flex item-center">
        <IoSearch className="search-logo" size={30} />
        <input
          type="text"
          placeholder="Search Something"
          className="search-box"
        />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
