import { Link } from "react-router-dom";
 function Navbar(){
    return (
        <nav style={{
            display:'flex', gap: '2rem', paddingLeft: '2rem'
        }}>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/services">Services</Link>
        </nav>
    );
}
export default Navbar;