
export const ProyectosPage = () => {
  return (
    <><head>        <link rel="stylesheet" href="./src/styles/styles.css" />
      </head><section id="proyectos">
              <div className="container">
                  <h2>Proyectos Destacados</h2>
                  <div className="project">
                      <img src="https://placehold.co/600x400" alt="Proyecto 1" />
                      <h3>Proyecto 1</h3>
                      <p>Descripción del proyecto 1.</p>
                      <a href="#">Ver más</a>
                  </div>
                  <div className="project">
                      <img src="https://placehold.co/600x400" alt="Proyecto 2" />
                      <h3>Proyecto 2</h3>
                      <p>Descripción del proyecto 2.</p>
                      <a href="#">Ver más</a>
                  </div>
              </div>
          </section></>
  )
}
