import React from 'react'
import './explore.css'
import { menu_list } from '../../assets/assets'
const Explore = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'> 
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Rem amet, 
             corporis dolorem aut provident minus.</p>
             <div className="explore-menu-list">
                {menu_list.map((item , index)=>{
                    return (<div  onClick={()=>setCategory(c=> c===item.menu_name?"All" : item.menu_name)} key={index} className='explore-menu-item'>
                        <img src={item.menu_image} alt="" className={category === item.menu_name?"active":""}/>
                        <p>{item.menu_name}</p>
                    </div>)
                })}
             </div>
             <hr />
    </div>
  )
}

export default Explore
