import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Noiva',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'As fotos capturaram nosso casamento perfeitamente. Cada momento foi lindamente preservado.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Cliente Corporativo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'Serviço profissional e fotos impressionantes do evento corporativo. Super recomendo!',
    rating: 5
  },
  {
    id: 3,
    name: 'Marina Oliveira',
    role: 'Retrato Familiar',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Nossas fotos em família ficaram incríveis. O fotógrafo fez todos se sentirem confortáveis.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}