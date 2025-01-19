import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


const S_Header = () => {
    const navigate = useNavigate();
    const Logout = async () => {
        const userConfirm = confirm("Are you sure you want to logout?");
        if (userConfirm){
            const response = await axios.post("https://ecommerce-app-backend-kyd3.onrender.com/api/users/logoutUser", {
                withCredentials: true,
            });
            if (response.status === 200) {
                navigate("/seller/login");
            } else {
                alert("Error logging out. Please try again.");
            }
        }
        
    };
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
                    <Link to="/seller/view-product" className="hover:text-blue-400">
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
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                    onClick={Logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default S_Header;
