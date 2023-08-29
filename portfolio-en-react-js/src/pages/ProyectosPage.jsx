import "./../styles/ProyectosPage.css"
import { Link } from "react-router-dom";
import datos from "./../data/projects.json";
export const ProyectosPage = () => {
  return (
    <>

    <div className="container">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {datos.map((proyecto, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {datos.map((proyecto, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="10000"
            >
              <Link to={proyecto.direccion}>
  <img
    src={`https://placehold.co/600x400?text=${proyecto.nombre}`}
    className="d-block w-100"
    alt={proyecto.nombre}
    style={{ width: "600px", height: "400px" }}
  />
</Link>
              <div className="carousel-caption d-none d-md-block">
                <h5>{proyecto.nombre}</h5>
                <p>{proyecto.Descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
};
