import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const  B_NewLoginPage = ()=>{
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
            const response = await axios.post('/api/users/loginUser', formData);
            console.log(response.data.data);
            alert("User logged in successfully");
            navigate("/buyer");
        } catch (error) {
            setError(error.response.data.error);
            if (error.response && error.response.status === 400) {
                alert(error.response.data.error); // Show error to the user
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
                        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
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
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
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

                {/* <!-- Divider --> */}
                <div className="mt-6 flex items-center justify-between">
                    <span className="w-1/5 border-b border-gray-300"></span>
                    <span className="text-sm text-gray-500">or log in with</span>
                    <span className="w-1/5 border-b border-gray-300"></span>
                </div>

                {/* <!-- Social Login Options --> */}
                <div className="flex space-x-4 mt-6">
                    <button
                        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                        Google
                    </button>
                    <button
                        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <img src="https://www.svgrepo.com/show/448261/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                        Facebook
                    </button>
                </div>

                {/* <!-- Register Link --> */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="registerAccount" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default B_NewLoginPage