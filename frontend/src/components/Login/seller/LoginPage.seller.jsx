import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const  S_NewLoginPage = ()=>{
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ email: "" , password: ""});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post('https://ecommerce-app-backend-blgm.onrender.com/api/users/loginUser', formData);
            console.log(response.data.data);
            alert("User logged in successfully");
            navigate("/seller");
        } catch (error) {
            setError(error.response.data.error);
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message); // Show error to the user
            } else {
                alert("Something went wrong. Please try again.");
            }

        }

        setLoading(false);
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <p className="text-sm text-center text-gray-600 mb-6">
                    Please log in to continue to your account
                </p>

                <form className="space-y-6">
                    {/* <!-- Email Input --> */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* <!-- Password Input --> */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* <!-- Forgot Password Link --> */}
                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Log In
                    </button>
                </form>


                {/* <!-- Register Link --> */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="registerAccount" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default S_NewLoginPage
