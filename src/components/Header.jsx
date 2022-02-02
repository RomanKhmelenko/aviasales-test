import '../assets/styles/Header.css';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <a className="logo" href="/" alt="Aviasales logo">
                <img src={logo} alt="Aviasales Logo" />
            </a>
        </div>
    )
}

export default Header;