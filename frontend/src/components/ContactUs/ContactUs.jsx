import React from 'react'

function ContactUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">We’d love to hear from you!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you have a question about our products, need support, or just want to say hello, we’re here to help!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                  📍
                </span>
                <p>123 Main Street, Your City, Country</p>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                  📞
                </span>
                <p>+1 (234) 567-890</p>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-4">
                  ✉️
                </span>
                <p>support@shopease.com</p>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Send Us a Message</h3>
            <form action="#" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Our Location</h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Visit us at our office or connect with us online!
          </p>
          <div className="w-full h-[400px] bg-gray-300 rounded-lg">
            {/* Replace the div below with an embedded map */}
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094863!2d144.9559283153165!3d-37.81720997975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4b8dfdf%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1634064244846!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
