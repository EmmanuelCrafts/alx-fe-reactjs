import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#282c34",
      }}
    >
    
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
        <Link style={linkStyle} to="/services">Services</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;
