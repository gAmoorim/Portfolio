import { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Database, Globe, Power, X, Minus, MonitorSmartphone } from 'lucide-react';

function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBoot = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsBooted(true);
      setIsLoading(false);
    }, 3000);
  };

  if (!isBooted) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        {!isLoading ? (
          <div className="text-center">
            <Power 
              size={120} 
              className="text-green-500 mx-auto mb-8 animate-pulse cursor-pointer"
              onClick={handleBoot}
            />
            <p className="text-white text-2xl">Clique para iniciar</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <img 
                    src="/logoWxp.png" 
                    alt="Windows XP Logo" 
                    className="w-48 h-48 object-contain mx-auto mb-8"
                  />
                  <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-blue-500 animate-loading-bar"></div>
                  </div>
                  <p className="mt-4 text-gray-400">Carregando...</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#235ADC]">
      {/* Windows XP style window */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#ECE9D8] rounded-lg shadow-xl overflow-hidden">
          {/* Title bar */}
          <div className="bg-gradient-to-r from-[#0A246A] via-[#3A6EA5] to-[#0A246A] px-4 py-1 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MonitorSmartphone size={16} className="text-white" />
              <span className="text-white font-semibold">Portfolio.exe</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="hover:bg-[#3A6EA5] p-1 rounded">
                <Minus size={16} className="text-white" />
              </button>
              <button className="hover:bg-[#3A6EA5] p-1 rounded">
                <X size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="bg-white p-8 rounded border border-gray-300 shadow-inner">
              <h1 className="text-4xl font-bold mb-6 text-[#0A246A]">Gabriel Amorim</h1>
              <p className="text-xl text-gray-700 mb-8">Desenvolvedor Full Stack</p>

              <div className="flex gap-4 mb-12">
                <a href="https://github.com/gAmoorim" target='_blank' rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#ECE9D8] border border-gray-300 rounded hover:bg-[#CFE4FF] transition-colors">
                  <Github size={20} />
                  <span>Github</span>
                </a>
                <a href="#" target='_blank' rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#ECE9D8] border border-gray-300 rounded hover:bg-[#CFE4FF] transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" target='_blank' rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#ECE9D8] border border-gray-300 rounded hover:bg-[#CFE4FF] transition-colors">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#ECE9D8] p-6 rounded border border-gray-300">
                  <div className="flex items-center gap-4 mb-4">
                    <Code2 className="text-[#0A246A]" size={24} />
                    <h3 className="text-xl font-semibold">Frontend</h3>
                  </div>
                  <p className="text-gray-700">React, TypeScript, Tailwind CSS, Next.js</p>
                </div>
                <div className="bg-[#ECE9D8] p-6 rounded border border-gray-300">
                  <div className="flex items-center gap-4 mb-4">
                    <Terminal className="text-[#0A246A]" size={24} />
                    <h3 className="text-xl font-semibold">Backend</h3>
                  </div>
                  <p className="text-gray-700">Node.js, Python, Java, APIs RESTful</p>
                </div>
              </div>

              <div className="bg-[#ECE9D8] p-6 rounded border border-gray-300 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-[#0A246A]">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-gray-300">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80" 
                      alt="Projeto 1" 
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
                    <p className="text-gray-600 mb-4">Plataforma completa de e-commerce</p>
                    <div className="flex gap-4">
                      <a href="#" className="text-[#0A246A] hover:underline">Demo</a>
                      <a href="#" className="text-[#0A246A] hover:underline">Código</a>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-300">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                      alt="Projeto 2" 
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
                    <p className="text-gray-600 mb-4">Dashboard com dados em tempo real</p>
                    <div className="flex gap-4">
                      <a href="#" className="text-[#0A246A] hover:underline">Demo</a>
                      <a href="#" className="text-[#0A246A] hover:underline">Código</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;