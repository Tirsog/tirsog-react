const Calendly = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Nombre <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Mensaje <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <label>
            Añadir Archivo <input type="file" name="picture" />
          </label>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </div>
  );
};

export default Calendly;
