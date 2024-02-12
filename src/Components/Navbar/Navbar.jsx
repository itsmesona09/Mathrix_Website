import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="" alt="" className="logo" />
            <ul>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Events">EVENTS</Link></li>
                <li><Link to="/Schedule">SCHEDULE</Link></li>
                <li><Link to="/Workshops">WORKSHOPS</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
