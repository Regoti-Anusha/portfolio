import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
