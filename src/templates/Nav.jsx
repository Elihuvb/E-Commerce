import {Link} from 'react-router-dom'
import { GoSearch, GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

// debe contener:
// 1. un buscador de productos
// 2. un login
// 3. un signup
// 4. un profile que al hacer click nos arroje un cartel que para entrar a perfil debemos registrarnos o logearnos
// 5. un carrito, que al entrar nos invite a registrarnos o logearnos para usarlo



function Nav() {
  return (
    <nav>
      <ul>
        <li>
        <input type="search" placeholder="Buscar productos"/>
        <button type="button"><GoSearch /></button>
        </li>
        <li>
          <Link to="/signup" className='btnNav'>Signup</Link>
          <Link to="/loggin" className='btnNav'>Login</Link>
          <Link to="/profile" className='btnNav'><GoPerson/></Link>
          <Link to="/kart" className='btnNav'><IoCartOutline /></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav