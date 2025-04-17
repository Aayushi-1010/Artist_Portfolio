import React from "react";
import { useParams, useSearchParams, NavLink } from "react-router-dom";
import { artworks } from "../utils/commonUtils";
const Portfolio = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.title)

  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore my collection of artworks.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((artwork, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              {/* <NavLink to={`/portfolio/${artwork.id}`}><button
                className="title-btn"
                onClick={() => 
                  {return(
                    console.log(artwork.title)
                    // setSearchParams({ title: artwork.title });
                  );
                  
                }}
              >
                <h3 className="font-semibold">{artwork.title}</h3>
              </button></NavLink> */}
              <NavLink to={`/portfolio/${artwork.id}`} className="title-link">
                <h3
                  className="font-semibold"
                  onClick={() => {
                    console.log(artwork.title);
                  }}
                >
                  {artwork.title}
                </h3>
              </NavLink>
              {/* <p className="text-gray-600">{artwork.description}</p> */}
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center mt-8">
        <p>If you're interested in my work, feel free to reach out!</p>
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact Me
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
