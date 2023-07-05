import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto">
      <h2 id="contact-title"> Contáctanos </h2>
      <div id="row">
        <div class="column">
          <h3> Correo </h3>
          <p> lab-obregon@hotmail.com </p>
        </div>

        <div class="column">
          <h3> Telefono </h3>
          <div id="contacto-phones">
            <ul>
              <li> (645) 104 0346 (Teléfono y Whatsapp)</li>
              <li> (645) 332 2791 </li>
              <li>
                {" "}
                <b>(Urgencias): </b>(645) 332 5362{" "}
              </li>
            </ul>
          </div>
        </div>

        <h3> Horario de Atencion </h3>
        <p>
          {" "}
          Lunes a Viernes: 7:30am - 5:00pm <br /> Sabado: 8:00am - 1:00pm
        </p>
      </div>
    </div>
  );
}
