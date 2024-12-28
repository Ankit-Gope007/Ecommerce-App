import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const S_Card = ({_id,name,price,description,category,countInStock,imageUrl}) => {
    const navigate = useNavigate()
    const editProduct = () => {
        navigate(`/seller/updateProduct/${_id}`)
    }
    const deleteProduct = async() => {
            if (confirm('Are you sure you want to delete this product?')) {
                await axios.delete(`/api/products/deleteProduct/${_id}`);
                document.querySelector(`div[data-id="${_id}"]`).remove();
                location.reload();
            }
        };
        
    return (
        <div className="bg-gray-80 shadow-xl max-w-full m-5 rounded-lg min-h-[350px] flex  " data-id={_id} >
            <div className="w-[30%] h-[250px] m-5 rounded-lg overflow-hidden ">
                <img src={imageUrl} className="w-full h-full object-cover" />
            </div>
            <div className=' w-[65%] h-[250px] m-5 ml-0'>
                <h1 className='text-3xl font-bold pl-5'>{name}</h1>
                <p className='text-xl pl-5'>Price: ₹{price}</p>
                <p className='text-xl pl-5'>Description: {description}</p>
                <p className='text-xl pl-5'>Category: {category}</p>
                <p className='text-xl pl-5'>Stock: {countInStock}</p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 ml-5'
                onClick={editProduct}>
                Edit Product</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 ml-5'
                onClick={deleteProduct}
                >Delete Product</button>
            </div>
        </div>
    )
}

export default S_Card
