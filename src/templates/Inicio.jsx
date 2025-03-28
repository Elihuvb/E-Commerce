import { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";

function Inicio() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Error en la respuesta");

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const addToKart = (id, image, title, description, price) => {
    const product = { id, image, title, description, price };
    const actualKart = JSON.parse(localStorage.getItem("carrito")) || [];
    const newKart = [...actualKart, product];
    localStorage.setItem("carrito", JSON.stringify(newKart));
  };

  const productoFiltrado = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) // Corregido
  );

  return (
    <main>
      <section>
        <input
          type="search"
          placeholder="Buscar productos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <h1>Productos</h1>

      <ul>
        {(productoFiltrado.length > 0 ? productoFiltrado : data).map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button type="button">Buy</button>
              <button type="button" onClick={() => addToKart(item.id, item.image, item.title, item.description, item.price)}>
                <IoCartOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Inicio;
