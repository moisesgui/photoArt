import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

export default function ClientArea() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="py-16 bg-gray-50" id="area-cliente">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Área do Cliente
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                isLogin ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Entrar
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                !isLogin ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Cadastrar
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="seu@email.com"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}