import Head from 'next/head'
import CodeEditor from '../../components/Editor'

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>Editor CYTHON C++</title>
        <meta name="description" content="Editor interactivo para CYTHON C++" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CodeEditor />
    </>
  )
}