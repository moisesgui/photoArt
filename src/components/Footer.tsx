import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">FotoArte</span>
            </div>
            <p className="text-sm">
              Capturando momentos preciosos da vida com excelência artística e dedicação profissional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#galeria" className="hover:text-indigo-400">Galeria</a></li>
              <li><a href="#servicos" className="hover:text-indigo-400">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-indigo-400">Sobre</a></li>
              <li><a href="#contato" className="hover:text-indigo-400">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contato@fotoarte.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Rua das Fotos, 123 - São Paulo</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FotoArte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}