import React from "react";
import "./Menue.css";

const Menu = () => {
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
    <div>
      <ul className="menuList">
        {tabs.map((item,i)=>{
          return <li className={`menuLi menu-${i}`} key={i}>{item.title}</li>
        })}
        </ul>
    </div>
  );
};

export default Menu;
