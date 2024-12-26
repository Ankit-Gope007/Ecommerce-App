import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const ProductDetails_Pages = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [review, setReview] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/getProductById/${id}`);
                const reviews = await axios.get(`/api/reviews/getReviews/${id}`);
                setReview(reviews.data.message)
                setProduct(response.data.message);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleNextImage = () => {
        if (product && product.imageUrl) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrl.length);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    const addReview = () => {
        navigate(`/buyer/add-review/${id}`);
    };

    const addToCart = async () => {
        try {
            const userConfirm = confirm('Do you want to add this product to cart?');
            if (userConfirm) {
                const response = await axios.post(`/api/orders/addToCart/${id}`,
                   { withCredentials: true }
                );
                console.log(response.data.message);
                alert('Product added to cart');

            }

        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }

    return (


        <>
            <div class="max-w-7xl mx-auto p-6">
                <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">


                    <div className="md:w-1/4 w-full relative h-[500px] md:h-auto ">
                        {product.imageUrl && product.imageUrl.length > 0 && (
                            <img
                                src={product.imageUrl[currentImageIndex]}
                                alt={`Product Image ${currentImageIndex + 1}`}
                                className="w-ful h-full object-cover md:object-contain"
                            />
                        )}
                        <button
                            onClick={handleNextImage}
                            className="absolute w-[40px] top-1/2 right-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        >
                            &rarr;
                        </button>
                    </div>

                    <div class="md:w-1/2 p-6 flex flex-col justify-between">
                        <h2 class="text-3xl font-semibold text-gray-800">{product.name}</h2>
                        <p class="text-lg text-gray-600 mt-2">{product.description}</p>


                        <div class="flex items-center mt-4">
                            <p class="text-2xl font-bold text-gray-800">₹{product.price}</p>
                        </div>


                        <div class="flex items-center mt-4">
                            <label for="quantity" class="text-lg text-gray-700">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" value="1" min="1" class="w-16 ml-4 py-2 px-3 border border-gray-300 rounded-md" />
                        </div>

                        <div>
                            <h3 className='font-bold underline'>Reviews:</h3>
                            {review &&
                                review.map((reviews) => (

                                    <div className=' rounded-lg m-2 p-2 shadow-2xl border-t-2'>
                                        <h3>Rating : {reviews.rating}</h3>
                                        <p>Comment : {reviews.comment}</p>

                                    </div>
                                ))
                            }

                        </div>


                        <div class="mt-6">
                            <button
                                onClick={addReview}
                                class="w-[43%] m-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">Add a Review</button>
                            <button
                                onClick={addToCart}
                                class="w-[43%] m-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">Add to Cart</button>
                        </div>
                    </div>
                </div>


                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800">Product Details</h3>
                    <div class="mt-4 text-gray-600">
                        <p>Here you can display additional information such as product specifications, materials, etc. This section can have multiple paragraphs or even bullet points for easy readability.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails_Pages