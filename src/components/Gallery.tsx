import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    title: 'Fotografia de Retrato',
    price: 99
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    title: 'Fotografia de Casamento',
    price: 149
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4',
    title: 'Fotografia de Paisagem',
    price: 129
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    title: 'Fotografia de Eventos',
    price: 199
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385',
    title: 'Fotografia de Moda',
    price: 179
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1496440737103-cd596325d314',
    title: 'Fotografia de Natureza',
    price: 89
  },
];

export default function Gallery() {
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const togglePhotoSelection = (id: number) => {
    setSelectedPhotos(prev => 
      prev.includes(id) 
        ? prev.filter(photoId => photoId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="galeria">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Galeria de Fotos</h2>
        <a
          href={selectedPhotos.length > 0 ? '/checkout' : '#'}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
            selectedPhotos.length > 0
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Finalizar Compra ({selectedPhotos.length})</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`relative group cursor-pointer rounded-lg overflow-hidden ${
              selectedPhotos.includes(photo.id) ? 'ring-4 ring-indigo-600' : ''
            }`}
            onClick={() => togglePhotoSelection(photo.id)}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm">R$ {photo.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}