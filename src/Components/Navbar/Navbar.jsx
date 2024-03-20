import React from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const tabs =[
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Electronics'
    },
    {
      id: 3,
      title: 'Books'
    },
    {
      id: 4,
      title: 'Music'
    },
    {
      id: 5,
      title: 'Movies'
    },
    {
      id: 6,
      title: 'Clothing'
    },
    {
      id: 7,
      title: 'Games'
    },
    {
      id: 8,
      title: 'Furniture'
    },
    {
      id: 9,
      title: 'Travel'
    },
    {
      id: 10,
      title: 'Botanical'
    },
    {
      id: 11,
      title: 'Category Name'
    }
  ]
  return (
    <div className='flex navbar justify-between item-center'>
      <div className='logo flex w-fit h-fit item-center'>
        <img src="" alt="Logo" />
        <p className='Logo-Text'>E-COMM</p>
      </div>
      <div className='Navbar-Content flex'>
        {tabs.map((item,i)=>(<p className='tabs' key={i}>{item.title}</p>))}
      </div>
      <div className='search-bar flex item-center'>
        <IoSearch  className='search-logo' size={30} />
        <input type="text" placeholder='Search Something' className='search-box' />
      </div>
    </div>
  )
}

export default Navbar
