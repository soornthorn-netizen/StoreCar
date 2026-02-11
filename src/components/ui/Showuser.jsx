import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { BiAccessibility, BiBarcodeReader } from 'react-icons/bi'

function Showuser({user}) {
    const { id } = useParams()
    const navigate = useNavigate()
    const data = user.find((i) => i.id === parseInt(id));
  return (
     <div
            onClick={() => {
                navigate("/users"); // close on backdrop click
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg relative">
                {/* Close Button */}
                <button
                    onClick={() => navigate("/users")}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
                >
                    <IoIosCloseCircle/>
                    <BiAccessibility/>
                    <BiBarcodeReader/>
                </button>

                {/* User Inform */}
                <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-700">
                        {data.name[0]}
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-gray-900">{data.name}</h2>
                    <p className="text-sm text-gray-500">age: {data.age}</p>
                </div>
            </div>
        </div>
  )
}

export default Showuser