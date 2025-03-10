import {useState, useEffect} from 'react'
import { IoCartOutline } from "react-icons/io5";
import Kart from './KartTemp'

function Inicio() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      if (!response.ok) throw new Error("Error en la respuesta"); // si la data no cargo correctamente

      const data = await response.json(); // convirtiendo la data en json para mejor manipulacion
      setData(data);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(); // cargamos la data una vez y evitamos bucles
  }, [])

  if (loading) return <p>Cargando datos...</p>
  if (error) return <p>Error: {error}</p>

  const addToKart = (id, title, description, price) => {
    const product = { id: id, 
      title: title, 
      description: description, 
      price: price 
    };
    
    console.log(product)
    localStorage.setItem(id, product)
  }

  return (
    <main>
      <h1>Productos</h1>
      {console.log(data)}
      <ul>
        {data.map((item) => {
          return (
            <li key={data.id}>
              {/* <img src={item.image} alt="Image" /> */}
              <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              </div>
              <div>
                <button type="button">Buy</button>
                <button type="button" onClick={() => addToKart(item.id, item.image, item.title, item.description, item.price)} ><IoCartOutline /></button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Inicio