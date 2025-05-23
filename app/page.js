import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>CYTHON C++ | Combina el poder de C++ con la simplicidad de Python</title>
        <meta name="description" content="Lenguaje de programación que combina C++ y Python" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Features />
      
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CYTHON C++. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}