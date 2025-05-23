import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Logo from '../public/logo.png'

export default function Hero() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <Image src={Logo} className='m-auto' alt="Logo" width={200} height={200} />
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          El poder de dos mundos, en un solo lenguaje.
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          CYTHON C++ combina el rendimiento de C++ con la sintaxis limpia de Python, 
          ofreciendo lo mejor de ambos mundos para desarrolladores modernos.
        </p>
        <a 
          href="/editor" 
          className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          Comenzar ahora
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </a>
      </div>
    </section>
  )
}