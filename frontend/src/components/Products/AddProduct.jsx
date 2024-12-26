import React, { useState } from "react";
import axios from "axios";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

import {useNavigate} from 'react-router-dom';
const AddProduct = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        countInStock: "",
        imageUrl: [],
    });


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'imageUrl') {
            setFormData({ ...formData, imageUrl: Array.from(files) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('description', formData.description);
        productData.append('category', formData.category);
        productData.append('countInStock', formData.countInStock);
        productData.append('price', formData.price);
        formData.imageUrl.forEach((image, index) => {
            setLoading(true);
            productData.append(`imageUrl`, image);
        });
        try {
            const response = await axios.post('/api/products/addProduct', productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log('Product added successfully:', response.data);
            alert('Product added successfully');
            navigate('/seller');

        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product', error);
        }finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
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
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="option"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="countInStock"
                    value={formData.countInStock}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="file"
                    name="imageUrl"
                    multiple
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                   {loading ? 'Uploading...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;