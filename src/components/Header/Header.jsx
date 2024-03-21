import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h1>My website</h1>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>contact</Link>
                <Link to={'/meals'}>Meals</Link>
            </nav>

        </div>
    );
};

export default Header;