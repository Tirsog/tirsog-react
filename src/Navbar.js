import logo from "./img/icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      {/*
      <h1>Tirso</h1>
  */}
      <div className="nav-links">
        <a href="/" alt="Inicio">
          Inicio
        </a>
        <a href="/" alt="Blog">
          Articulos
        </a>
        <a
          href="/"
          alt="Contacto"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
