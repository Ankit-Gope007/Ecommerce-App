import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'


const Card_Buyer = ({_id, name, description, price, imageUrl }) => {
    const navigate = useNavigate()
    const viewDetails = () => {
        navigate(`/buyer/product/${_id}`)
    }
    return (
        <>


            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
                <div className="w-[100%] h-[100%] m-5 rounded-lg overflow-hidden ">
                    <img src={imageUrl} alt="Product 1" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-lg font-bold text-gray-800 mt-2">₹{price}</p>
                    <button 
                    onClick={viewDetails}
                    className="bg-blue-600  text-white hover:bg-blue-700 mt-4 inline-block w-[100px] h-[30px] rounded-lg">View details</button>

                </div>
            </div>


        </>
    )
}

export default Card_Buyer