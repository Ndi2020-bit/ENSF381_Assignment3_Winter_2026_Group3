import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="Sweet Scoop Logo" className="header-logo" />
        <h1>Sweet Scoop Ice Cream Shop</h1>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/flavors">Flavors</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;