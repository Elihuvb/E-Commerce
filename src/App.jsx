import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GoSearch, GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import Inicio from './templates/Inicio'
import Profile from './templates/Profile'
import Loggin from './templates/Loggin'
import Signup from './templates/Signup'
import Kart from './templates/KartTemp'

const memory = localStorage.setItem("memory", "null")

function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
            <input type="search" placeholder="Buscar productos"/>
            <button type="button"><GoSearch /></button>
            </li>
            <li>
              <Link to="/" className='btnNav'>Inicio</Link>
              <Link to="/signup" className='btnNav'>Signup</Link>
              <Link to="/loggin" className='btnNav'>Login</Link>
              <Link to="/profile" className='btnNav'><GoPerson/></Link>
              <Link to="/kart" className='btnNav'><IoCartOutline /></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kart" element={memory == "null" ? <Loggin /> : <Kart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
