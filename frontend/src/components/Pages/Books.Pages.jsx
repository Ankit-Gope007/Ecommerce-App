import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card_Buyer from '../Cards/Card.Buyer'

const Books_Pages = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const response = await axios.get(`https://ecommerce-app-backend-blgm.onrender.com/api/products/getProductsByCategory/Books`)
                // console.log(response.data.message)
                // console.log(Array.isArray(response.data.message))
                setProducts(response.data.message)
            }
            fetchProducts()
            // console.log(products)

        } catch (error) {
            console.log(error)

        }
    }, [])
    return (
        <>
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                    {
                        products.map((product) => (
                            <div >
                                <Card_Buyer key={product._id}
                                    _id={product._id}
                                    name={product.name}
                                    price={product.price}
                                    description={product.description}
                                    imageUrl={product.imageUrl[0]} />

                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Books_Pages
