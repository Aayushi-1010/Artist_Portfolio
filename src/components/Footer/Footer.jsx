import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-2">Stay Connected</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
        <p className="text-sm mb-2">Contact: info@artist.com</p>
        <p className="text-sm">© 2025 Artist Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
