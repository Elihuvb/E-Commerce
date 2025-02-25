import{useState, useEffect} from 'react'
import { IoCartOutline } from "react-icons/io5";

function Inicio() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      if (!response.ok) throw new Error("Error en la respuesta");

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) return <p>Cargando datos...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1>Productos</h1>
      {console.log(data)}
      <ul>
        {data.map((item) => {
          return (
            <li key={data.id}>
              {item.images.map((i) => {
                return <img key={i} src={i} alt="Image" />
              })}
              <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              </div>
              <div>
                <button type="button">Buy</button>
                <button type="button"><IoCartOutline /></button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Inicio