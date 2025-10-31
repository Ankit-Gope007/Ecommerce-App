import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card_Buyer from '../Cards/Card.Buyer'

// Reusable category page component to eliminate code duplication
const CategoryPage = ({ category, title }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://ecommerce-app-backend-kyd3.onrender.com/api/products/getProductsByCategory/${category}`)
                setProducts(response.data.message)
                setError(null)
            } catch (error) {
                console.log(error)
                setError('Failed to load products')
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [category])

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center text-gray-600">Loading products...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center text-red-600">{error}</div>
            </div>
        )
    }

    return (
        <>
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    {title || 'Our Products'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        products.map((product) => (
                            <div key={product._id}>
                                <Card_Buyer
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

export default CategoryPage
