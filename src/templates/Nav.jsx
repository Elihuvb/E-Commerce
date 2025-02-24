import React from 'react'
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
          <a href="#" className='btnNav'>Signup</a>
          <a href="#" className='btnNav'>Login</a>
          <a href="#" className='btnNav'><GoPerson/></a>
          <a href="#" className='btnNav'><IoCartOutline /></a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav