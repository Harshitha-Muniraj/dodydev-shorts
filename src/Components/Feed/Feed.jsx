import React, { useRef, useState } from 'react'
import { Data } from '../Data'
import './Feed.css'
const Feed = () => {
  const videoRef = useRef();
  const [stop, setStop] = useState(false);

  const handleVideo = () => {
      setStop(!stop);
      if (stop === true) {
          videoRef.current.pause();
      } else {
          videoRef.current.play();
      }
  }; 
    const [currentIndex,setCurrentIndex]=useState(0);
  const previousbtn=()=>{
   
    if(currentIndex==0){
      setCurrentIndex(Data.length-1)
    }else setCurrentIndex(currentIndex-1)
  }
  const nextbtn=()=>{
    if(currentIndex==Data.length-1){
      setCurrentIndex(0)
    }else setCurrentIndex(currentIndex+1)
  }
  const {id,vid}=Data[currentIndex];
 
  return (
    <main>
       <div class="video-container">
           <video src={vid} key={id}  ref={videoRef} autoPlay loop  type="video/mp4"/>
            
        </div>
        <div className='feed-left'>
            <div className='feed-lft-top'>
                <div className='flt-1'>
                <p><ion-icon name="eye"></ion-icon></p>
                <p>7k</p>
                </div>
                <div className='flt-1' >
                <p><ion-icon name="caret-forward"></ion-icon></p>
                <p>00:28</p></div>
            </div>
            <div className='feed-lft-middle'><p>Do you want to learn more</p></div>
            <div className='feed-lft-btm'>
                <button>Javascript</button>
                <button>Hoisting</button>
            </div>
        </div>
        <div className='feed-ryt'>
            <div onClick={previousbtn} ><ion-icon name="chevron-up"></ion-icon></div>
            <div onClick={nextbtn} className='red-arrow-down'><ion-icon name="chevron-down"></ion-icon></div>
            <div><ion-icon name="expand"></ion-icon></div>
            <div><ion-icon name="chatbubble-outline"></ion-icon></div>
            <div><ion-icon name="heart-outline" ></ion-icon></div>
            <div><ion-icon name="arrow-redo-outline"></ion-icon></div>
        </div>
        <button className='play-btn' onClick={handleVideo}><ion-icon name="play-outline"></ion-icon></button>
    </main>
  )
}

export default Feed