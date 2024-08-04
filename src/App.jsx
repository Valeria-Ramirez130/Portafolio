import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import "./fuente.css";
import fondo from "./img/fondo.jpg";
import foto from "./img/FotoCV.jpg";
import logohtml from "./img/logohtml.svg";
import logocss from "./img/CSS-Logo.svg";
import logoreact from "./img/Reactlogo.svg";
import logobootstrap from "./img/Bootstrap_logo.svg";
import logogithub from "./img/Github-logo.svg";
import JavaScript_logo from "./img/JavaScript_logo.svg";
import iconoCopy from "./img/iconocopy.svg";
import iconoemail from "./img/iconoemail.svg";
import iconoLinkedln from "./img/LinkedIn_icono.svg";
import iconoEnviar from "./img/iconoEnviar.svg";
import vetAgenda from "./img/imgproyectos/Vet-agenda.png";
import webicon from "./img/webicon.svg"; // Asegúrate de tener este icono
import githubicon from "./img/githubicon.svg"; // Asegúrate de tener este icono

function App() {
  const handleCopyEmail = () => {
    const inputEmail = document.getElementById("exampleInputEmail1");
    inputEmail.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <header className="Header">
        <NavBar />
      </header>
      <div className="contenedor-principal">
        <section id="inicio" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="secciones seccion-inicio">
            <div className="circle">
              <img src={foto} alt="FotoCV" className="image" />
            </div>
            <div className="presentacion">
              <h3 className="saludo">¡Hola!</h3>
              <h1 className="nombre">Soy Valeria Ramirez</h1>
              <h3 className="profesion">Desarrolladora Front-end</h3>
              <a href="/Cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Ver CV</button>
              </a>
            </div>
          </div>
        </section>

        <section id="acerca-de-mi">
          <div className="secciones seccion-acerca-de-mi">
            <h2>
              <strong>Acerca de mi</strong>
            </h2>
            <h5>
              Soy Valeria Ramirez / Desarrolladora Front-end / Tecnóloga en
              desarrollo de software
            </h5>
            <p>
              Soy una Desarrolladora Front-End Junior con habilidades en HTML,
              CSS y JavaScript. Destaco en el diseño y desarrollo de interfaces
              atractivas y funcionales utilizando tecnologías como Bootstrap y
              React. Apasionada por aprender y contribuir en proyectos
              innovadores, estoy comprometida con el crecimiento continuo y la
              excelencia en mi trabajo.
            </p>
          </div>
        </section>

        <section id="mis-habilidades">
          <div className="secciones seccion-mis-habilidades">
            <h2>
              <strong>Mis Habilidades</strong>
            </h2>
            <div className="logo-container">
              <img src={logohtml} alt="HTML" className="logo" />
              <span>HTML</span>
            </div>
            <div className="logo-container">
              <img src={logocss} alt="CSS" className="logo" />
              <span>CSS</span>
            </div>
            <div className="logo-container">
              <img src={JavaScript_logo} alt="JavaScript" className="logo" />
              <span>JavaScript</span>
            </div>
            <div className="logo-container">
              <img src={logobootstrap} alt="Bootstrap" className="logo" />
              <span>Bootstrap</span>
            </div>
            <div className="logo-container">
              <img src={logoreact} alt="React" className="logo" />
              <span>React</span>
            </div>
            <div className="logo-container">
              <img src={logogithub} alt="GitHub" className="logo" />
              <span>GitHub</span>
            </div>
          </div>
        </section>
        <section id="proyectos">
          <div className="secciones seccion-proyectos">
            <h2>
              <strong>Proyectos</strong>
            </h2>
            <div className="proyectos-row">
              <div className="card-proyecto" style={{ width: "18rem" }}>
                <img
                  src={vetAgenda}
                  className="card-img-top rounded"
                  alt="Vet Agenda"
                />
                <div className="overlay">
                  <a
                    href="https://vet-agenda.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    <p>
                      <img src={webicon} alt="Web Icon" className="icono" />{" "}
                      Sitio Web
                    </p>
                  </a>
                  <a
                    href="https://github.com/Valeria-Ramirez130/Citas-Veterinaria.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    <p>
                      <img
                        src={githubicon}
                        alt="GitHub Icon"
                        className="icono"
                      />{" "}
                      Repositorio
                    </p>
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title">Vet Agenda</h5>
                  <p className="card-text">
                    Desarrollé una página web front-end para veterinarias que
                    permite a los clientes agendar citas fácilmente y a los
                    dueños de las veterinarias ver las citas agendadas. La
                    interfaz es intuitiva y responsive, optimizada para todos
                    los dispositivos.
                  </p>
                </div>
                <div className="tech-logos">
                  <img src={logohtml} alt="HTML Logo" className="tech-logo" />
                  <img src={logocss} alt="CSS Logo" className="tech-logo" />
                  <img
                    src={JavaScript_logo}
                    alt="JavaScript Logo"
                    className="tech-logo"
                  />
                  <img
                    src={logobootstrap}
                    alt="Bootstrap Logo"
                    className="tech-logo"
                  />
                  <img src={logoreact} alt="React Logo" className="tech-logo" />
                  <img
                    src={logogithub}
                    alt="GitHub Logo"
                    className="tech-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="secciones seccion-contacto">
            <h2>
              <strong>Contacto</strong>
            </h2>
            <div className="input-container">
              <div className="input-with-icon">
                <img
                  src={iconoLinkedln}
                  alt="Icono Linkedln"
                  className="icono-linkedln"
                />
                <input
                  type="text"
                  className="form-control input-text"
                  value="Valeria Ramirez Marin"
                  readOnly
                />
                <img
                  src={iconoEnviar}
                  alt="Icono Enviar"
                  className="icono-Enviar"
                  id="iconoEnviar"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/valeria-ramirez-marin-993171305",
                      "_blank"
                    )
                  }
                />
              </div>
              <div className="input-with-icon">
                <img
                  src={iconoemail}
                  alt="Icono Email"
                  className="icono-email"
                />
                <input
                  type="email"
                  className="form-control input-email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value="valeriaramirezmarin52@gmail.com"
                  readOnly
                />
                <img
                  src={iconoCopy}
                  alt="Icono Copy"
                  className="icono-copy"
                  id="iconoCopy"
                  onClick={handleCopyEmail}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="derechos" className="seccion-derechos">
          <div className="secciones">
            <p>
              &copy; {new Date().getFullYear()} Valeria Ramirez. Todos los
              derechos reservados.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
