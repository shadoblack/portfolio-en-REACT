// eslint-disable-next-line no-unused-vars
import './TresEnRaya.css'
import React, { useState } from "react";

const TresEnRaya = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(""));
  const [turno, setTurno] = useState("X");
  const [ganador, setGanador] = useState("");
  const [contadorX, setContadorX] = useState(0);
  const [contadorO, setContadorO] = useState(0);
  const [contadorPartidas, setContadorPartidas] = useState(0);

  const handleClick = (index) => {
    if (cuadros[index] === "" && ganador === "") {
      const nuevosCuadros = [...cuadros];
      nuevosCuadros[index] = turno;
      setCuadros(nuevosCuadros);
      setTurno(turno === "X" ? "O" : "X");
      comprobarGanador(nuevosCuadros);
    }
  };

  const comprobarGanador = (cuadros) => {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      if (
        cuadros[a] !== "" &&
        cuadros[a] === cuadros[b] &&
        cuadros[a] === cuadros[c]
      ) {
        setGanador(cuadros[a]);
        actualizarContadores(cuadros[a]);
        return;
      }
    }

    if (cuadros.every((cuadro) => cuadro !== "")) {
      setGanador("Empate");
    }
  };

  const actualizarContadores = (jugador) => {
    if (jugador === "X") {
      setContadorX((contador) => contador + 1);
    } else if (jugador === "O") {
      setContadorO((contador) => contador + 1);
    }
    setContadorPartidas((contador) => contador + 1);
  };

  const reiniciarJuego = () => {
    setCuadros(Array(9).fill(""));
    setTurno("X");
    setGanador("");
  };

  const reiniciarContadores = () => {
    setContadorX(0);
    setContadorO(0);
    setContadorPartidas(0);
  };

  return (
    <>
      <link rel="stylesheet" href="TresEnRaya.css" />
      <div className="contenedor-juego">
        <div className="juego-titulo">
          <h2>Tres en raya</h2>
        </div>
        <div id="juego-info" className="juego-info">
          {ganador === "" ? (
            <div>Presione cualquier cuadro para iniciar: {turno} Empieza.</div>
          ) : (
            <div>{ganador === "Empate" ? "Empate" : `"${ganador}" Gana`}</div>
          )}
        </div>
        <div className="juego-cuadricula">
          {cuadros.map((valor, index) => (
            <div
              key={index}
              className="cuadro"
              onClick={() => handleClick(index)}
            >
              {valor}
            </div>
          ))}
        </div>
        <div id="juego-boton" className="juego-boton" onClick={reiniciarJuego}>
          Volver a jugar
        </div>
        <div id="reset" className="juego-boton" onClick={reiniciarContadores}>
          Resetear resultado
        </div>
        <div className="container">
          <div className="item10">Contador de partidas:</div>
          <div className="item100">{contadorPartidas}</div>
          <div className="item11">Victorias jugador 1:</div>
          <div className="item111">{contadorX}</div>
          <div className="item12">Victorias jugador 2:</div>
          <div className="item122">{contadorO}</div>
        </div>
      </div>
    </>
  );
};

export default TresEnRaya;
