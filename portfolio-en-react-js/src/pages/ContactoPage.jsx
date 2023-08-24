
export const ContactoPage = () => {
  return (
    <><head>        <link rel="stylesheet" href="./src/styles/styles.css" />
      </head><section id="contacto">
              <div className="container">
                  <h2>Contacto</h2>
                  <p>
                      ¡Estoy emocionado de trabajar contigo! Si estás interesado en
                      colaborar o tienes alguna pregunta, no dudes en contactarme.
                  </p>
                  <form>
                      <input type="text" placeholder="Nombre" />
                      <input type="email" placeholder="Correo electrónico" />
                      <textarea placeholder="Mensaje"></textarea>
                      <button type="submit">Enviar</button>
                  </form>
              </div>
          </section></>
  )
}
