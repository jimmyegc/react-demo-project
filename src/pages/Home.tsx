import { useState } from "react";
import "./App.css";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleServicesClick = (event) => {
    event.preventDefault();
    setShowServices(true);
    closeMenu();
    setTimeout(() => {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={`container ${menuActive ? "menu-active" : ""}`}>
      <Menu closeMenu={closeMenu} handleServicesClick={handleServicesClick} />
      <Showcase toggleMenu={toggleMenu} />
      {showServices && <Services />}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

const Menu = ({ closeMenu, handleServicesClick }) => (
  <div className="menu active">
    <span className="close-btn" onClick={closeMenu}>
      <i className="fas fa-times"></i>
    </span>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services" onClick={handleServicesClick}>Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
);

const Showcase = ({ toggleMenu }) => (
  <section className="showcase">
    <header>
      <h2 className="logo">Travel</h2>
      <div className="toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
    <video src="video4.mp4" muted loop autoPlay></video>
    <div className="overlay"></div>
    <div className="text">
      <h2>Explore the World</h2>
      <h3>Life is short and the world is wide</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a href="#">Explore</a>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="section">
    <h2>💡 Nuestros Servicios</h2>
    <p>Diseñamos, desarrollamos y optimizamos productos digitales con un enfoque innovador.</p>
    <ul>
      <li>✅ <strong>Desarrollo Web:</strong> Sitios web modernos, rápidos y responsivos.</li>
      <li>✅ <strong>UX/UI Design:</strong> Interfaces intuitivas para mejorar la experiencia del usuario.</li>
      <li>✅ <strong>SEO & Marketing Digital:</strong> Optimizamos tu web para atraer clientes.</li>
      <li>✅ <strong>E-Commerce & Apps:</strong> Tiendas en línea y aplicaciones a medida.</li>
    </ul>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h2>Sobre Nosotros</h2>
    <p>Somos un equipo apasionado por la tecnología y el crecimiento digital.</p>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contáctanos</h2>
    <p>Escríbenos y llevemos tu idea al siguiente nivel.</p>
    <a href="tel:+525527885779" className="btn">Llámanos: +52 55 2788 5779</a>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 nmda. Todos los derechos reservados.</p>
  </footer>
);

export default App;
