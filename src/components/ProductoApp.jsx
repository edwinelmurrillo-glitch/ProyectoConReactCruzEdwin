import styles from "./productoApp.module.css";

function ProductoApp({
  nombre,
  precio,
  categoria,
  estado,
  imagen,
}) {

  const comprar = () => {
    alert(`Has comprado: ${nombre}`);
  };

  const verDetalles = () => {
    alert(
      `Instrumento: ${nombre}\nCategoría: ${categoria}\nPrecio: Bs. ${precio}`
    );
  };

  const favorito = () => {
   alert(`🐻 CoCo dice:\n${nombre} agregado a favoritos ❤️`);
  };

  return (
    <div className={styles.card}>
      <img
        src={imagen}
        alt={nombre}
        className={styles.imagen}
      />

      <h2>{nombre}</h2>

      <p>
        <strong>Precio:</strong> Bs. {precio}
      </p>

      <p>
        <strong>Categoría:</strong> {categoria}
      </p>

      <p
        className={
          estado === "Disponible"
            ? styles.disponible
            : styles.agotado
        }
      >
        {estado}
      </p>

      <div className={styles.botones}>
        <button
          onClick={comprar}
          disabled={estado === "Agotado"}
        >
          Comprar
        </button>

        <button onClick={verDetalles}>
          Ver Detalles
        </button>

        <button onClick={favorito}>
          ❤️ Favorito
        </button>
      </div>
    </div>
  );
}

export default ProductoApp;