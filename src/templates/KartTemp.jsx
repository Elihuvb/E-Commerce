import { useState, useEffect } from "react";

function Kart() {
  const [kart, setKart] = useState([])

  useEffect(() => {
    const saveKart = JSON.parse(localStorage.getItem("carrito")) || []
    setKart(saveKart)
  }, [])
  
  const deleteProduct = (id) => {
    const newKartFilter = kart.filter((_, i) => i !== id)
    setKart(newKartFilter)
    localStorage.setItem("carrito", JSON.stringify(newKartFilter))
  }

  return (
    <div>
      <h1>Kart</h1>
      <ul>
        {kart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="Product" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button type="button">Buy</button>
              <button type="button" onClick={() => deleteProduct(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Kart