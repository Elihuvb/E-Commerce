import Inicio from './templates/Inicio'

const memory = localStorage.setItem("memory", "null")

function App() {

  return (
    <>
    <h1>E-Commerce project</h1>
    <Inicio />
    </>
  )
}

export default App
