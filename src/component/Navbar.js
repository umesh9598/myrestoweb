import React from 'react'
// import MenuList from './MenuList';

const Navbar = () => {
  const filterItem= (category)=>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }
 
  return (
    <div>
    <nav className='font-popins bg-white py-1 mx-10 my-2 rounded-lg cursor-pointer shadow-sm md:max-w-2xl md:mx-auto '>
      <ul className='flex justify-center my-3   '>
          <li className='px-2 text-sm  text-slate-700   hover:text-purple-700  hover:underline hover:transition-transform hover:duration-1000' onClick={()=> filterItem("BreakFast")} >Breakfast</li>
          <li className='px-2 text-sm  text-slate-700   hover:text-purple-700  hover:underline hover:transition-transform hover:duration-1000' >Veg Food</li>
          <li className='px-2 text-sm  text-slate-700   hover:text-purple-700  hover:underline hover:transition-transform hover:duration-1000' >Non-veg Food</li>
          <li className='px-2 text-sm  text-slate-700   hover:text-purple-700  hover:underline hover:transition-transform hover:duration-1000' >All</li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar

