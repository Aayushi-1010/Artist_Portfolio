import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-lg text-gray-600 mt-2">I would love to hear from you!</p>
      </header>

      {/* Contact Form Section */}
      <section className="max-w-md mx-auto mb-8">
        <form className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" required className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" required className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" rows="4" required className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">Send Message</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-gray-700">Email: info@artist.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">Location: City, Country</p>
      </section>

      {/* Social Media Links */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Follow Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </section>
    </div>
  )
}

export default Contact
