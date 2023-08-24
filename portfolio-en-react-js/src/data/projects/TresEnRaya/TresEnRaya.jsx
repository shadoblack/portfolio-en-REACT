// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TresEnRaya.css";

const TresEnRaya = () => {
    
  // Estado inicial de los cuadros del juego
  const [cuadros, setCuadros] = useState(Array(9).fill(""));
  // Estado inicial del turno del jugador
  const [turno, setTurno] = useState("X");
  // Estado inicial del ganador del juego
  const [ganador, setGanador] = useState("");
  // Estado inicial del contador de victorias del jugador 1 (X)
  const [contadorX, setContadorX] = useState(0);
  // Estado inicial del contador de victorias del jugador 2 (O)
  const [contadorO, setContadorO] = useState(0);
  // Estado inicial del contador de partidas jugadas
  const [contadorPartidas, setContadorPartidas] = useState(0);

  // Función para manejar el clic en un cuadro del juego
  const handleClick = (index) => {
    // Verificar si el cuadro está vacío y no hay un ganador
    if (cuadros[index] === "" && ganador === "") {
      // Crear una copia de los cuadros
      const nuevosCuadros = [...cuadros];
      // Actualizar el cuadro seleccionado con el turno actual
      nuevosCuadros[index] = turno;
      // Actualizar el estado de los cuadros
      setCuadros(nuevosCuadros);
      // Cambiar el turno al siguiente jugador
      setTurno(turno === "X" ? "O" : "X");
      // Comprobar si hay un ganador
      comprobarGanador(nuevosCuadros);
    }
  };

  // Función para comprobar si hay un ganador
  const comprobarGanador = (cuadros) => {
    // Definir las combinaciones ganadoras
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

    // Iterar sobre las combinaciones ganadoras
    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      // Verificar si los cuadros en la combinación son iguales y no están vacíos
      if (
        cuadros[a] !== "" &&
        cuadros[a] === cuadros[b] &&
        cuadros[a] === cuadros[c]
      ) {
        // Establecer al ganador al jugador correspondiente
        setGanador(cuadros[a]);
        // Actualizar los contadores de victorias
        actualizarContadores(cuadros[a]);
        return;
      }
    }

    // Verificar si todos los cuadros están ocupados
    if (cuadros.every((cuadro) => cuadro !== "")) {
      // Establecer al ganador como "Empate"
      setGanador("Empate");
    }
  };

  // Función para actualizar los contadores de victorias
  const actualizarContadores = (jugador) => {
    if (jugador === "X") {
      // Incrementar el contador de victorias del jugador 1 (X)
      setContadorX((contador) => contador + 1);
    } else if (jugador === "O") {
      // Incrementar el contador de victorias del jugador 2 (O)
      setContadorO((contador) => contador + 1);
    }
    // Incrementar el contador de partidas jugadas
    setContadorPartidas((contador) => contador + 1);
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    // Reiniciar los cuadros del juego
    setCuadros(Array(9).fill(""));
    // Reiniciar el turno del jugador
    setTurno("X");
    // Reiniciar el ganador del juego
    setGanador("");
  };

  // Función para reiniciar los contadores de victorias
  const reiniciarContadores = () => {
    // Reiniciar el contador de victorias del jugador 1 (X)
    setContadorX(0);
    // Reiniciar el contador de victorias del jugador 2 (O)
    setContadorO(0);
    // Reiniciar el contador de partidas jugadas
    setContadorPartidas(0);
  };

  return (
    <>
    <div className="background">
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
        <div className="container-xl">
          <div className="item10">Contador de partidas:</div> 
          <div className="item100">{contadorPartidas}</div>
          <div className="item11">Victorias jugador 1:</div>
          <div className="item111">{contadorX}</div>
          <div className="item12">Victorias jugador 2:</div>
          <div className="item122">{contadorO}</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TresEnRaya;