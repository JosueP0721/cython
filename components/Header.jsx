import { CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../public/logo.png'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" width={80} height={80} />
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CYTHON C++
            </span> */}
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Documentación</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Ejemplos</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Comunidad</a>
          </nav>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition">
            Descargar
          </button>
        </div>
      </div>
    </header>
  )
}