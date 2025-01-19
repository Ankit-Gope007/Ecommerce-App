import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        countInStock: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`https://ecommerce-app-backend-kyd3.onrender.com/api/products/getProductById/${id}`);
                setFormData({
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    category: data.category,
                    countInStock: data.countInStock,
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.patch(`/api/products/updateProduct/${id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            setLoading(false);
            alert('Product updated successfully');
            navigate(`/seller/view-product`);
        } catch (error) {
            console.error('Error updating product:', error);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Product Category"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="countInStock"
                        value={formData.countInStock}
                        onChange={handleChange}
                        placeholder="Count In Stock"
                        className="w-full p-2 border rounded"
                    />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                        Update Product
                    </button>
                </form>
            )}
        </div>
    );
};

export default UpdateProduct;
