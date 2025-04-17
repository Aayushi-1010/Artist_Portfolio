import React from 'react'
import {artworks} from '../utils/commonUtils';
import { useParams } from 'react-router-dom';

const Title = () => {
  // const date = new Date()
  const { id } = useParams();
  console.log(id);
 
  const artwork = artworks.find((artworks) => artworks.id === Number(id));
  console.log(artwork.imageUrl);

  return (
    <>
    <div class="max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
  <img src={artwork.imageUrl} alt={artwork.title} class="w-auto h-full rounded-t-lg m-20" />
  
  <div class="p-9">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">{artwork.title}</h1>
    <p class="text-gray-600 mb-4">{artwork.description}</p>
    
    <div class="mt-4">
      <h2 class="text-xl font-semibold text-gray-700">Details</h2>
      <ul class="list-disc list-inside mt-2 text-gray-600">
        <li><strong>Artist :   </strong>{artwork.artist}</li>
        <li><strong>Year :   </strong>{artwork.year}</li>
        <li><strong>Medium :   </strong>{artwork.medium}</li>
        <li><strong>Dimensions :   </strong>{artwork.dimensions}</li>
      </ul>
    </div>
    
  </div>
</div>
    </>
  )

}

export default Title