import "./QueSomos.css";
import Scientist from "../assets/big_circle.jpg";

export default function QueSomos() {
  return (
    <div className="QueSomos">
        <div id="QueSomos-img">
            <img src={Scientist} alt="Scientist" id = "QueSomos-spImg"/>
        </div>

      <div id="QueSomos-content">
        <h2 id="QueSomos-title"> ¿Quiénes Somos? </h2>
        <p>
          {" "}
          Somos un laboratorio clínico especializado que brinda una amplia gama
          de servicios de alta calidad para satisfacer las necesidades de
          nuestros clientes. Nuestro compromiso es ofrecer diagnósticos
          precisos y confiables, respaldados por un equipo de profesionales
          altamente capacitados y tecnología de vanguardia.{" "}
        </p>

        <div id="services-list">
          <h2> Nuestros Servicios </h2>
          {/* nuestros servicios: 2.	PRESTA SERVICIOS DE LABORATORIO CLINICO EN GENERAL Y  CERTIFICACION LABORAL,RADIOLOGIA,AUDIOMETRIA,ESPIROMETRIAS,ELECTROCARDIOGRAMAS.SE DA SERVICIO A PACIENTES EN GENERAL,A CLINICAS,HOSPITALES Y A EMPRESAS CON EL APOYO DE DIAGNOSTICOS DE APTITUD LABORAL.*/}
          <p>
            {" "}
            Ofrecemos una gran variedad de servicios para ustedes, entre estas
            incluyen:{" "}
          </p>
          <ul>
            <li> Laboratorio Clínico en General </li>
            <li> Certificación Laboral </li>
            <li> Radiología </li>
            <li> Audiometría </li>
            <li> Espirometrías </li>
            <li> Electrocardiogramas </li>
            <li>
              {" "}
              <b> Anti-doping </b>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
