import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-200 p-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfX1PTihcFtoJw-XIGL2W-UvTeY_PBem6xA&s')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to My Art Gallery</h1>
          <p className="text-lg text-gray-300 mt-4">Discover the beauty of creativity through my artworks.</p>
          <Link to="/portfolio" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Portfolio</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          I am a passionate artist based in [Your Location], specializing in [Your Medium/Style]. My work reflects my journey and experiences, aiming to evoke emotions and inspire others.
        </p>
      </section>

      {/* Featured Artwork Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Artwork</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Artwork Cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/path-to-artwork1.jpg" alt="Artwork 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Artwork Title 1</h3>
              <p className="text-gray-600">Description of artwork 1.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/path-to-artwork2.jpg" alt="Artwork 2" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Artwork Title 2</h3>
              <p className="text-gray-600">Description of artwork 2.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/path-to-artwork3.jpg" alt="Artwork 3" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Artwork Title 3</h3>
              <p className="text-gray-600">Description of artwork 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="text-center py-8">
        <p>Interested in my work? Feel free to reach out!</p>
        <a href="/contact" className="text-blue-500 hover:underline">Contact Me</a>
      </footer>
    </div>
  )
}

export default Home
