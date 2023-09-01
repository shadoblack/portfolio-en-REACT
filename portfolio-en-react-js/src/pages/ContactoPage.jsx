import "./../styles/ContactoPage.css"

export const ContactoPage = () => {
  return (
    <>
      <section id="contacto">
        <div>
          <div className="container-contacto">
            <h2>Contacto</h2>
            <p>
              ¡Estoy emocionado de trabajar contigo! Si estás interesado en
              colaborar o tienes alguna pregunta, no dudes en contactarme. 
            </p>
            <form action="mailto:edgarerb@hotmail.es" method="post" encType="text/plain">
              <input type="text" name="nombre" placeholder="Nombre" />
              <input type="email" name="correo" placeholder="Correo electrónico" />
              <textarea name="mensaje" placeholder="Mensaje"></textarea>
              <button className="btn btn-secondary" type="submit">
                Enviar
              </button>
              <p>Cuando cliques en enviar, se te abrirá tu aplicación de correo electrónico, no tendrás más que darle a enviar y...¡listo!</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
