import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
          alt="Fotografia Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white mt-16">
          <h1 className="text-6xl font-bold mb-6">Capture Seus Momentos Perfeitos</h1>
          <p className="text-2xl mb-8">Fotografia profissional que conta sua história</p>
          <a
            href="#galeria"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg"
          >
            Ver Galeria
          </a>
        </div>
      </div>
    </div>
  );
}