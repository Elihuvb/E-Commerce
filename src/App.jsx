import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GoSearch, GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import Inicio from './templates/Inicio'
import Profile from './templates/Profile'
import Kart from './templates/KartTemp'
import Signup from './templates/Signup'
import Loggin from './templates/Loggin'

localStorage.getItem("memory") ? (
  localStorage.getItem("memory") === "no" ? console.log('Is "no"') : console.log('Is "yes"')
) : localStorage.setItem("memory", "no")

function App() {
  const memoryGet = localStorage.getItem("memory")
  
  function render(r) {
    if (memoryGet === "no") {
      return <Loggin />
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
            {
              memoryGet === "yes" ? (
                <li>
                  <Link to="/" className='btnNav'>Inicio</Link>
                  <Link to="/profile" className='btnNav'><GoPerson/></Link>
                  <Link to="/kart" className='btnNav'><IoCartOutline /></Link>
                </li>
              ) : (
                <li>
                  <Link to="/" className='btnNav'>Inicio</Link>
                  <Link to="/signup" className='btnNav'>Signup</Link>
                  <Link to="/loggin" className='btnNav'>Login</Link>
                  <Link to={memoryGet === "no" ? "/loggin" : "/profile"} className='btnNav'><GoPerson/></Link>
                  <Link to={memoryGet === "no" ? "/loggin" : "/kart"} className='btnNav'><IoCartOutline /></Link>
                </li>
              )
            }
            
          </ul>
        </nav>
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