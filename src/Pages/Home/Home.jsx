import React, { useState } from 'react'
import { Data } from '../../Components/Data'
import './Home.css'
import Header from '../../Components/Header/Header'
import Feed from '../../Components/Feed/Feed'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    const [vid,setVid]=useState(Data)
  return (
    <div>
    <Header/>
    <Feed/>
    <Footer/>
    </div>
    
  )
}

export default Home