import { Link, Outlet } from "react-router-dom";
import './style.css'

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <Link to="/" className="raabaBtn">RAABA.</Link>
            <div className="link-wrapper">
                <Link to="/skills" className="navBtn">Skills</Link>
                <Link to="/education" className="navBtn">Education</Link>
                <Link to="/projects" className="navBtn">Projects</Link>
                <Link to="/contact-me" className="navBtn">Contact Me</Link>
            </div>
        </div>

        <Outlet></Outlet>
        
        </>
        
    )
}
export default Navbar;

