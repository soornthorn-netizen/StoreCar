import React from 'react'


function Inform({onPas, offPas}) {
  return (
    <div className=' border w-72 border-amber-300 absolute top-[100%] right-0'
      onMouseOver={onPas} onMouseOut={offPas}
    >
        {/* <h1>Hello</h1>
        <p>
             Welcome to the Supercars Gallery! 
             This Supercars Gallery!  showcases some of the world's most exotic and luxurious cars,
        </p> */}
    </div>
  )
}

export default Inform