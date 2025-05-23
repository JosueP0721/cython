'use client'

import { useState, useRef } from 'react'
import { 
  PlayIcon, 
  CloudArrowDownIcon, 
  ExclamationTriangleIcon, 
  CheckCircleIcon,
  WrenchIcon,
  FolderOpenIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

export default function CodeEditor() {
  const [code, setCode] = useState(`# CYTHON C++ Ejemplo
import cpp

def main() -> int:
    # Escribe tu código aquí
    vec = cpp.vector[int]([1, 2, 3])
    
    for num in vec:
        cpp.cout << "Número: " << num << cpp.endl
    
    return 0

main()
`)
  const [output, setOutput] = useState('')
  const [errors, setErrors] = useState([])
  const [activeTab, setActiveTab] = useState('results')
  const [fileName, setFileName] = useState('main.cycpp')
  const [showHelp, setShowHelp] = useState(false)
  const fileInputRef = useRef(null)

  const handleRun = () => {
    setActiveTab('results')
    const hasErrors = Math.random() > 0.5
    
    if (hasErrors) {
      setErrors([
        { line: 3, column: 5, message: "SyntaxError: expected ':' after function declaration" },
        { line: 7, column: 15, message: "TypeError: invalid operator '<<' for type 'vector'" }
      ])
      setOutput('')
    } else {
      setErrors([])
      setOutput(`Número: 1\nNúmero: 2\nNúmero: 3\nProgram exited with code 0`)
    }
  }

  const handleLexicalAnalysis = () => {
    setActiveTab('tokens')
    setErrors([])
    
    const sampleTokens = [
      { type: 'KEYWORD', value: 'def', line: 3 },
      { type: 'IDENTIFIER', value: 'main', line: 3 },
      { type: 'OPERATOR', value: '->', line: 3 },
      { type: 'TYPE', value: 'int', line: 3 },
      { type: 'OPERATOR', value: ':', line: 3 },
      { type: 'IDENTIFIER', value: 'vec', line: 5 },
      { type: 'OPERATOR', value: '=', line: 5 },
      { type: 'LIBRARY', value: 'cpp.vector', line: 5 },
      { type: 'OPERATOR', value: '[', line: 5 },
      { type: 'TYPE', value: 'int', line: 5 },
      { type: 'OPERATOR', value: ']', line: 5 },
      { type: 'LITERAL', value: '[1, 2, 3]', line: 5 },
      { type: 'KEYWORD', value: 'for', line: 7 },
      { type: 'IDENTIFIER', value: 'num', line: 7 },
      { type: 'KEYWORD', value: 'in', line: 7 },
      { type: 'IDENTIFIER', value: 'vec', line: 7 },
      { type: 'OPERATOR', value: ':', line: 7 }
    ]

    setOutput(JSON.stringify(sampleTokens, null, 2))
  }

  const handleOpenFile = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
      const reader = new FileReader()
      reader.onload = (event) => {
        setCode(event.target.result)
      }
      reader.readAsText(file)
    }
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".cycpp,.cython,.cpp,.py"
      />
      
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-3 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CYTHON C++
            </span>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={toggleHelp}
              className="flex items-center px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
            >
              <QuestionMarkCircleIcon className="h-4 w-4 mr-2" />
              Ayuda
            </button>
            <button 
              onClick={handleOpenFile}
              className="flex items-center px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
            >
              <FolderOpenIcon className="h-4 w-4 mr-2" />
              Abrir
            </button>
            <button 
              onClick={handleRun}
              className="flex items-center px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 transition text-sm"
            >
              <PlayIcon className="h-4 w-4 mr-2" />
              Ejecutar
            </button>
            <button 
              onClick={handleLexicalAnalysis}
              className="flex items-center px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-sm"
            >
              <WrenchIcon className="h-4 w-4 mr-2" />
              Analizar
            </button>
            <button 
              className="flex items-center px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
            >
              <CloudArrowDownIcon className="h-4 w-4 mr-2" />
              Guardar
            </button>
          </div>
        </div>
      </div>

      {/* Panel de ayuda */}
      {showHelp && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg border border-gray-700 w-2/3 max-h-[80vh] overflow-auto">
            <div className="bg-gray-900 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Documentación CYTHON C++</h2>
              <button 
                onClick={toggleHelp}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Sintaxis Básica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">Funciones</h4>
                  <pre className="bg-gray-900 p-3 rounded text-sm mb-4">
                    {`def nombre_funcion(param1, param2) -> tipo_retorno:
    # Código aquí
    return valor`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">Estructuras de Control</h4>
                  <pre className="bg-gray-900 p-3 rounded text-sm mb-4">
                    {`if condición:
    # código
elif otra_condición:
    # código
else:
    # código

while condición:
    # código

for elemento in iterable:
    # código`}
                  </pre>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 text-cyan-400">Interoperabilidad C++</h3>
              <div className="bg-gray-900 p-4 rounded mb-4">
                <p className="mb-3">Puedes llamar a funciones de C++ directamente:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm">
                  {`cpp.funcion_cpp(param1, param2)
cpp.objeto.metodo()`}
                </pre>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 text-cyan-400">Ejemplos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">Hola Mundo</h4>
                  <pre className="bg-gray-900 p-3 rounded text-sm">
                    {`# Hola Mundo en CYTHON C++
import cpp

def main() -> int:
    cpp.cout << "Hola Mundo!" << cpp.endl
    return 0

main()`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">Vector de C++</h4>
                  <pre className="bg-gray-900 p-3 rounded text-sm">
                    {`# Uso de vector de C++
import cpp

def main() -> int:
    vec = cpp.vector[int]([1, 2, 3])
    for num in vec:
        cpp.cout << num << cpp.endl
    return 0

main()`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 px-4 py-3 border-t border-gray-700 flex justify-end">
              <button 
                onClick={toggleHelp}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Paneles superiores */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 flex flex-col border-r border-gray-800 bg-gray-800 overflow-hidden">
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
            <div className="h-2.5 w-2.5 bg-red-500 rounded-full mr-2"></div>
            <div className="h-2.5 w-2.5 bg-yellow-500 rounded-full mr-2"></div>
            <div className="h-2.5 w-2.5 bg-green-500 rounded-full mr-3"></div>
            <span className="text-xs text-gray-400">{fileName}</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 w-full p-4 bg-gray-900 font-mono text-sm text-white resize-none outline-none overflow-auto"
            style={{
              fontFamily: '"Fira Code", monospace',
              lineHeight: '1.5'
            }}
          />
        </div>

        {/* Resultados/Tokens */}
        <div className="flex-1 flex flex-col bg-gray-800 overflow-hidden">
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
            <div className="h-2.5 w-2.5 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-xs text-gray-400">
              {activeTab === 'results' ? 'Resultados' : 'Tokens Léxicos'}
            </span>
          </div>
          <div className="flex-1 overflow-auto p-4 bg-gray-900 font-mono text-sm">
            {activeTab === 'results' ? (
              output ? (
                <pre className="text-green-400">{output}</pre>
              ) : (
                <p className="text-gray-500">Ejecuta el código para ver los resultados aquí...</p>
              )
            ) : (
              output ? (
                <div className="space-y-2">
                  {JSON.parse(output).map((token, index) => (
                    <div key={index} className="flex items-baseline text-xs">
                      <span className="text-purple-400 w-20 flex-shrink-0 truncate">{token.type}</span>
                      <span className="text-gray-300 mr-2">:</span>
                      <span className="text-cyan-300">{token.value}</span>
                      <span className="text-gray-500 ml-auto">Ln {token.line}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Realiza análisis léxico para ver los tokens aquí...</p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Panel de errores (barra inferior) */}
      <div className="h-1/4 flex flex-col border-t border-gray-800 bg-gray-800 overflow-hidden">
        <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
          <div className="h-2.5 w-2.5 bg-red-500 rounded-full mr-2"></div>
          <span className="text-xs text-gray-400">Errores</span>
        </div>
        <div className="flex-1 overflow-auto p-4 bg-gray-900 font-mono text-sm">
          {errors.length > 0 ? (
            <div className="space-y-3">
              {errors.map((error, index) => (
                <div key={index} className="flex items-start text-red-400 text-xs">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ln {error.line}:{error.column}</p>
                    <p className="text-red-300">{error.message}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center text-green-400 h-full text-sm">
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              <span>Success - No se encontraron errores</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}