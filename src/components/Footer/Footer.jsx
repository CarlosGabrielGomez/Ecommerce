import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-content ">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
        <nav className=" bg-dark">
          <ul>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/privacy">Política de privacidad</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
