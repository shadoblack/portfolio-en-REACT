import "./../styles/InicioPage.css"
import Techs from "./../data/Techs.json";
import { useState } from "react";
export const InicioPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mi Portfolio</title>

      <section id="inicio">
        <div className="container-palabras">
          <h1 id="display-top">Bienvenido a mi Portfolio</h1>
          <div id="display-mid">
          <p>
            Soy un desarrollador web apasionado por crear experiencias
            digitales.
          </p>

          <p>Trabajo en las siguientes tecnologías, con experiencias diversas tales como:</p>
          </div>
        </div>
        <div className="contenedor-tarjetas">
          {Techs.map((Techs, index) => (
            <div
              className="card"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="card-img-top"
                src={Techs.imgSrc}
                alt="Card image cap"
              />
              <div
                className={`card-body ${
                  hoveredIndex === index ? "show" : "hide"
                }`}
              >
                <div id="center">
                <h5 className="card-title">{Techs.title}</h5>
                <p className="card-text">{Techs.text}</p>
                <span id="exp" className="btn btn-outline-primary rounded-circle p-4 ">{Techs.exp}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        
      </section>
    </>
  );
};
