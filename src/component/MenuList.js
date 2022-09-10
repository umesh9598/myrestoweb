import React, {useState} from 'react'
import Menu from "./MenuApi"
import MenuItem from "./MenuItem"

const MenuList = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem= (category)=>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }
 
  return (
    <>

    <nav className='  font-popins bg-zinc-100 py-1 mx-10 mt-2 rounded-lg cursor-pointer border border-1 border-purple-400 shadow-sm  md:max-w-2xl md:mx-auto '>
      <ul className='flex justify-center my-3   '>
          <li className='px-2 text-sm  text-slate-500     hover:text-blue-700    hover:transition-transform hover:duration-1000' onClick={()=> filterItem("BreakFast")} >Breakfast</li>
          <li className='px-2 text-sm  text-slate-500     hover:text-blue-700    hover:transition-transform hover:duration-1000' onClick={()=> filterItem("Veg Food")}  >Veg Food</li>
          <li className='px-2 text-sm  text-slate-500     hover:text-blue-700    hover:transition-transform hover:duration-1000' onClick={()=> filterItem("Non-Veg Food")} >Non-veg Food</li>
          <li className='px-2 text-sm  text-slate-500     hover:text-blue-700    hover:transition-transform hover:duration-1000'onClick={()=> setMenuData(Menu) } >All</li>
      </ul>
    </nav>
 
    <MenuItem menuData = {menuData} />
    </>
    )
}

export default MenuList
