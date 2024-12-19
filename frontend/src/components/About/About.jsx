import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/website-internet-contact-us-page-260nw-2152770651.jpg')` }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">Who we are and what drives us</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Welcome to ShopEase</h2>
          <p className="text-lg md:text-xl text-gray-600">
            At ShopEase, we are passionate about bringing the best shopping experience to your fingertips. With a diverse range of products, competitive prices, and unparalleled customer service, we aim to make your shopping seamless and enjoyable.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower every customer with quality products, outstanding service, and a trusted platform that simplifies shopping and enriches lives.
            </p>
          </div>
          {/* Vision */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become a global leader in eCommerce by continuously innovating and delivering excellence in every aspect of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Meet Our Team</h3>
          <p className="text-lg text-gray-600 mb-8">
            Behind every great shopping experience is a dedicated team of professionals who make it all happen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex  md:justify-center">
          <Link to="https://linkedin.com/in/ankit-gope-b85313324?utm">
            {/* Team Member */}
            {["Ankit Gope"].map((member, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg w-[250px]">
                <img
                  src={`https://media.licdn.com/dms/image/v2/D4E35AQHI1SavPPR-GQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728413204436?e=1735200000&v=beta&t=20_r88MBugaCAwEY_pMqQ3SP9Fb1Az_zpjMyU_O3nuQ`}
                  alt={member}
                  
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                
                <h4 className="text-xl font-semibold">{member}</h4>
                <p className="text-gray-500">Role - Developer</p>
              </div>
            ))}
          </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-800">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">1M+</h3>
            <p className="text-gray-600">Products Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">5+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Start Your Shopping Journey</h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of happy customers who trust ShopEase for their shopping needs.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
