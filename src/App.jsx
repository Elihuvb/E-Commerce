import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GoSearch, GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import Inicio from './templates/Inicio'
import Profile from './templates/Profile'
import Kart from './templates/KartTemp'
import Signup from './templates/Signup'
import Loggin from './templates/Loggin'

localStorage.getItem("memory") ? ( // si "memory" existe invocamos el codigo
  localStorage.getItem("memory") === "no" ? console.log('Is "no"') : console.log('Is "yes"') // muestra en consola lo que hay dentro de "memory"
) : localStorage.setItem("memory", "no") // si "memory" no existe, lo creamos con "no" por defecto

function App() {
  const memoryGet = localStorage.getItem("memory") //guardamos "memory" en una constante
  
  function render(r) {
    if (memoryGet === "no") {
      return <Loggin /> // si la cuenta no es recordada se redirecciona a login
    } else {
      return r
    }
  }

  return (
    <>
    {console.log(memoryGet)}
      <Router>
        <nav>
          <ul>
            <li>
              <input type="search" placeholder="Buscar productos"/>
              <button type="button"><GoSearch /></button>
            </li>
            <li>
              <Link to="/" className='btnNav'>Inicio</Link>
              {
                memoryGet === "no" && (
                  <>
                    <Link to="/signup" className='btnNav'>Signup</Link>
                    <Link to="/loggin" className='btnNav'>Login</Link>
                  </>
                )
              }
              <Link to={memoryGet === "no" ? "/loggin" : "/profile"} className='btnNav'><GoPerson/></Link>
              <Link to={memoryGet === "no" ? "/loggin" : "/kart"} className='btnNav'><IoCartOutline /></Link>
            </li>
          </ul>
        </nav>

        {/* rutas */}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/profile" element={render(<Profile />)} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kart" element={render(<Kart />)} />
        </Routes>
      </Router>
    </>
  )
}

export default App