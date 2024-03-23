import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Menu from "./Menu/Menu";
import { useState} from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
   ];
  return (
    <div className="flex navbar justify-between item-center">
      

      
      <div className="logo flex w-fit h-fit item-center">
        {/* <img src="" alt="Logo" /> */}
        <p className="Logo-Text min-w">E-COMM</p>
      </div>
      <div className="Navbar-Content flex item-center uppercase">
        {tabs.map((item, i) => (
          <p className={`tabs pointer tab-${i}`} key={i}>
            {item.title}
          </p>
        ))}
        <div className="tabs dropdown-container pointer flex relative more moreHidden">
          More
          <RiArrowDropDownLine
            onClick={toggleMenue}
            size={40}
            className="pointer arrowWindow "
          />
          <RiArrowDropDownLine
            onClick={toggleMenue}
            size={27}
            className="pointer arrowMobile"
          />
          {isMenuOpen && (
            <div className="absolute menu">
              <Menu />
            </div>
          )}
        </div>
      </div>
      <div className="search-bar flex item-center">
        <IoSearch className="search-logo arrowWindow" size={30} />
        <IoSearch className="search-logo arrowMobile" size={20} />
        <input
          type="text"
          placeholder="Search Something"
          className="search-box"
        />
      </div>
  
    </div>
  );
};

export default Navbar;
