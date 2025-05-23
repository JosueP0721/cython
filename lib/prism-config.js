import Prism from 'prismjs'

// Importar componentes necesarios
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-cpp'

// Solución para el error 'class-name'
if (typeof Prism.languages.cpp === 'undefined') {
  Prism.languages.cpp = Prism.languages.extend('c', {})
}

// Configuración personalizada para CYTHON C++
Prism.languages.cythoncpp = {
  ...Prism.languages.python,
  'class-name': {
    pattern: /(\bclass\s+)\w+/,
    lookbehind: true
  }
}

export default Prism