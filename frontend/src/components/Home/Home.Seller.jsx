import React from "react";
import { useNavigate } from "react-router-dom";

const S_Home = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Welcome Banner */}
            <div className="bg-blue-500 text-white py-12 text-center">
                <h1 className="text-3xl font-bold">Welcome to Your Seller Dashboard</h1>
                <p className="mt-2">Manage your products, track sales, and grow your business!</p>
            </div>

            {/* Quick Actions */}
            <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold">Manage Products</h3>
                    <p className="text-gray-600 mt-2">View, edit, or delete your existing products.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                        View Products
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold">Add New Product</h3>
                    <p className="text-gray-600 mt-2">Expand your inventory by adding new products.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                    onClick={(e)=>{navigate("/seller/add-product")}}
                    >
                        Add Product
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold">View Sales Stats</h3>
                    <p className="text-gray-600 mt-2">Analyze your sales performance and trends.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                        Sales Stats
                    </button>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold">Total Sales</h3>
                        <p className="text-gray-600 mt-2">$12,000</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold">Products Sold</h3>
                        <p className="text-gray-600 mt-2">120 units</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold">Active Products</h3>
                        <p className="text-gray-600 mt-2">15 items</p>
                    </div>
                </div>
            </div>

 
        </div>
    );
};

export default S_Home;