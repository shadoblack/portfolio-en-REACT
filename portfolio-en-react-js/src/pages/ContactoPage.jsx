export const ContactoPage = () => {
  return (
    <>
      <link rel="stylesheet" href="./src/styles/styles.css" />

      <section id="contacto">
        <div>
          <div className="container-contacto">
            <h2>Contacto</h2>
            <p>
              ¡Estoy emocionado de trabajar contigo! Si estás interesado en
              colaborar o tienes alguna pregunta, no dudes en contactarme.En
              construcción.
            </p>
            <form>
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo electrónico" />
              <textarea placeholder="Mensaje"></textarea>
              <button className="btn btn-secondary" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
