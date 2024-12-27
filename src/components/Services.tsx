import React from 'react';
import { Camera, Users, Building2, Heart, Mountain, Calendar } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Sessões de Retrato',
    description: 'Retratos profissionais que capturam sua personalidade'
  },
  {
    icon: Heart,
    title: 'Fotografia de Casamento',
    description: 'Capturando seus momentos especiais com elegância'
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    description: 'Cobertura profissional para seus eventos empresariais'
  },
  {
    icon: Mountain,
    title: 'Paisagens',
    description: 'Paisagens naturais e urbanas deslumbrantes'
  },
  {
    icon: Camera,
    title: 'Sessões em Estúdio',
    description: 'Serviços profissionais de fotografia em estúdio'
  },
  {
    icon: Calendar,
    title: 'Eventos Especiais',
    description: 'Aniversários, formaturas e ocasiões especiais'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}