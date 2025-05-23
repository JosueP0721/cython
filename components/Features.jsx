import { BoltIcon, CpuChipIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: <BoltIcon className="h-10 w-10 text-cyan-400" />,
    title: "Rendimiento extremo",
    description: "Compila directamente a código máquina como C++ para un rendimiento sin igual."
  },
  {
    icon: <CpuChipIcon className="h-10 w-10 text-cyan-400" />,
    title: "Sintaxis intuitiva",
    description: "Escribe código limpio y legible con una sintaxis inspirada en Python."
  },
  {
    icon: <CodeBracketSquareIcon className="h-10 w-10 text-cyan-400" />,
    title: "Interoperabilidad",
    description: "Integra fácilmente bibliotecas de C++ y Python en un solo proyecto."
  }
]

export default function Features() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">¿Por qué elegir CYTHON C++?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}