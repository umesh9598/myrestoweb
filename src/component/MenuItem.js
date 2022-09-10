
import React from 'react'

const MenuItem = ({menuData}) => {
  
  return (
    <>
      <div className='grid md:grid md:grid-cols-2'>
    {menuData.map((curElem)=>{
      return(
       
        <div className="  max-w-sm mx-auto my-5 bg-zinc-100		 rounded-md px-3 font-popins text-slate-500  border border-1 border-purple-400 transition-all shadow hover:pink-500 hover:to-yellow-500 hover:shadow-2xl " key={curElem.id}>
        <div className="pt-2">
        <span className="py-1 px-2 border border-1 border-slate-500 rounded-full text-slate-500">{curElem.id}</span>
        </div>
        <h1 className="mt-1  text-slate-500 text-sm">{curElem.category}</h1>
        <h1 className="text-slate-500 text-lg">{curElem.name}</h1>
        <div className="flex justify-between">
        <div className="w-96 h-1 bg-gray-800 mt-3"> </div>
        <p className="px-1 ">Read</p>
        </div>
              <p className="text-black text-sm">{curElem.description}</p>
            <img src={curElem.image} alt=""  className="w-64 mx-auto mt-2" />
        <div className="flex justify-between mt-4 pb-2">
        <p className="mt-1 text-sm text-black">Price : {curElem.price} Rs</p>
        <button className="px-2 py-1 bg-blue-700 rounded-md text-white text-xs hover:bg-blue-600">Order Now</button>
        </div>
      </div>
   
   )
  })}
  </div>
   </>
  )
}

export default MenuItem
