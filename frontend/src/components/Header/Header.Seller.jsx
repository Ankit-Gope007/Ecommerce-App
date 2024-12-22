import React from "react";
import { Link } from "react-router-dom";

const S_Header = () => {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/seller-dashboard" className="hover:text-blue-400">
                        ShopEase Seller
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-x-6">
                    <Link to="/seller/my-products" className="hover:text-blue-400">
                        My Products
                    </Link>
                    <Link to="/seller/add-product" className="hover:text-blue-400">
                        Add Product
                    </Link>
                    <Link to="/seller/sales-stats" className="hover:text-blue-400">
                        Sales Stats
                    </Link>
                </nav>

                {/* Profile/Logout */}
                <div>
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default S_Header;