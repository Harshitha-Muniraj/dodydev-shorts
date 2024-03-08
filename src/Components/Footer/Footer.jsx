import React, { useState } from 'react'
import './Footer.css';


const Footer = () => {
    const [hh,sethh]=useState(false)
    const [heartFill,setHeartFill]=useState("");
    const handleFavourite=()=>{
        sethh(!hh)
        setHeartFill("heart-bg")
    }
   
  return (
    <footer>
        <div>
        <ion-icon name="home-outline" id='icon-font'></ion-icon>
           <p>Home</p>
        </div>
        <div>
           <ion-icon name="search-outline" id='icon-font'></ion-icon>
           <p>Search</p>
        </div>
        <div>
           {hh?<ion-icon name="heart" id="icon-font-click" className={hh?heartFill:null} onClick={()=>{handleFavourite()}}></ion-icon>:<ion-icon name="heart-outline" id="icon-font"  onClick={handleFavourite}></ion-icon>}
           <p>Favourite</p>
        </div>
        <div>
          <ion-icon name="person-circle-outline" id='icon-font'></ion-icon>
          <p>Profile</p>
        </div>
    </footer>
  )
}

export default Footer