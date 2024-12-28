import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const B_LoginPage = () => {
    const [error, setError] = useState("");
    const [role , setRole] = useState("buyer");
    const [formData, setFormData] = useState({ name: "", email: "" , password: "", phone: "", role:`${role}`, address: "" });
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
            const response = await axios.post('/api/users/registerUser', formData);
            console.log(response.data.data);
            alert("User registered successfully");
            navigate("/buyer/login");
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100  bg-[url('https://static.vecteezy.com/system/resources/previews/021/736/713/non_2x/doodle-lines-arrows-circles-and-curves-hand-drawn-design-elements-isolated-on-white-background-for-infographic-illustration-vector.jpg')]">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
                <p className="text-sm text-center text-gray-600 mb-6">
                    Fill in the details below to register
                </p>

                <form className="space-y-6">
                    {/* <!-- Name Input --> */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* <!-- Email Input --> */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
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
                            placeholder="Enter a strong password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* <!-- Phone Input --> */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* <!-- Role Input --> */}
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange= {handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="buyer">buyer</option>
                            <option value="seller">seller</option>
                        </select>
                    </div>

                    {/* <!-- Address Input --> */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleSubmit}
                    
                    >
                        Register
                    </button>
                </form>

                {/* <!-- Redirect to Login --> */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?
                    <a href="login" className="font-medium text-indigo-600 hover:text-indigo-500">Log In</a>
                </p>
            </div>
        </div>
    )
}

export default B_LoginPage;
