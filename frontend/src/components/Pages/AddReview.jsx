import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const AddReview = () => {
    const navigate = useNavigate()
    const { product } = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        product: product,
        rating: "",
        comment: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await axios.post(
                `/api/reviews/addReview/${product}`, 
                { rating: formData.rating, comment: formData.comment },
                { withCredentials: true }
            );
            console.log('Review added successfully:', response.data);
            alert('Review added successfully');
            navigate(`/buyer/product/${product}`);
        } catch (error) {
            console.error('Error adding review:', error);
            alert('Failed to add review. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div class="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">


                <div class="mb-6 text-center">
                    <h1 class="text-3xl font-bold text-gray-800">Write a Review</h1>
                    <p class="text-gray-600 mt-2">We value your feedback. Share your experience about this product.</p>
                </div>

                <form class="space-y-6" onSubmit={handleSubmit} >


                    
                        <label for="rating" class="block text-lg font-semibold text-gray-700">Rating (1 to 5):</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            required
                            value={formData.rating}
                            onChange={handleChange}
                            class="w-full mt-2 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    


                    
                        <label for="comment" class="block text-lg font-semibold text-gray-700">Comments:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows="5"
                            placeholder="Write your comments here..."
                            required
                            value={formData.comment}
                            onChange={handleChange}
                            class="w-full mt-2 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    

                    
                        <button type="submit"

                            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
                            disabled={loading}
                        >
                            {loading ? 'Submitting ...' : 'Submit Review'}
                        </button>
                    

                </form>
            </div>
        </>
    )
}

export default AddReview