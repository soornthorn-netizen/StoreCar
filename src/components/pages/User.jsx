import React from 'react'
import {Link} from "react-router-dom"

function User({data}) {
  return (
     <div className='container'>
      <div className='grid grid-cols-4'>
        {
          data.map((item) => (
            <Link
              key={item.id}
              to={`/users/${item.id}`}
            >
              <div className=' border shadow-2xl/50 '>
                <h1>{item.name}</h1>
                {/* <p>{item.age}</p> */}
              </div>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default User