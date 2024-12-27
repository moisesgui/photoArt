import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl transition-all duration-300 ${
      isScrolled ? 'top-4 bg-white shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    } rounded-full`}>
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className={`h-8 w-8 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              FotoArte
            </span>
          </div>
          <nav className="flex space-x-8">
            <a 
              href="#galeria" 
              className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} 
                transition-colors duration-300`}
            >
              Galeria
            </a>
            <a 
              href="#servicos" 
              className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} 
                transition-colors duration-300`}
            >
              Serviços
            </a>
            <a 
              href="#depoimentos" 
              className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} 
                transition-colors duration-300`}
            >
              Depoimentos
            </a>
            <a 
              href="#area-cliente" 
              className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} 
                transition-colors duration-300`}
            >
              Área Cliente
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}