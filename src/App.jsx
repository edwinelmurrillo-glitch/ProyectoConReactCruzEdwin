import "./index.css";
import ProductoApp from "./components/ProductoApp";
import acordeon from "./assets/acordeon.webp";
import ukelele from "./assets/ukelele.jpg";
import concertina from "./assets/concertina.jpg";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Guitarra Acústica",
      precio: 1200,
      categoria: "Cuerdas",
      estado: "Disponible",
      imagen:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    },
    {
      id: 2,
      nombre: "Piano Digital",
      precio: 4500,
      categoria: "Teclados",
      estado: "Disponible",
      imagen:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    },
    {
      id: 3,
      nombre: "Batería",
      precio: 3800,
      categoria: "Percusión",
      estado: "Agotado",
      imagen:
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
    },
    {
      id: 4,
      nombre: "Ukeleles",
      precio: 1100,
      categoria: "Cuerdas",
      estado: "Agotado",
      imagen:ukelele,
    },
    {
      id: 5,
      nombre: "Concertinas",
      precio: 3500,
      categoria: "Aerófono de botones",
      estado: "Disponible",
      imagen:concertina,
    },
    {
      id: 6,
      nombre: "Acordeones",
      precio: 9500,
      categoria: "Aerófono de teclas",
      estado: "Disponible",
      imagen: acordeon,
    },
  ];

  return (
    <>
      <h1>Tienda de Instrumentos Musicales "CoCo"</h1>
      <h3>Total de productos: {productos.length}</h3>

      <div className="contenedor">
        {productos.map((producto) => (
          <ProductoApp
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            categoria={producto.categoria}
            estado={producto.estado}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </>
  );
}

export default App;