import React, { useState } from 'react'
import './home.css'
import Header from '../../header/Header'
import Explore from '../../ExploreMenu/Explore'
import FoodDisplay from '../../foodDisplay/FoodDisplay'
import AppDownload from '../../appDown/AppDownload'

const Home = () => {

  const [category , setCategory] = useState('All')

  return (
    <div>
      <Header/>
      <Explore category={category} setCategory ={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
