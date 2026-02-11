import React, {useEffect, useState} from "react"
import Inform from "../ui/Inform"
import Slider from "./Slider"
import Footer from "./Footer"
import About from "./About"
import Middle from "./Middle"

function Home() {
  const [touch, setTouch] = useState(false)
  return (
    <div>
      <div className='relative w-full'> 
        {/* <h1 className='text-4xl text-center text-black'
          onMouseOver={() => setTouch(true)} onMouseOut={() => setTouch(false)}
        >Welcome To ...
        </h1> */}
        <Slider/>
        <Middle/>
        {/* {
          touch ? <Inform onPas={() => setTouch(true)} offPas={() => setTouch(false)} /> : <></>
        } */}
      </div>
      <Footer/>

    </div>
  )
}

export default Home