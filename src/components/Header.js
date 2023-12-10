import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import Logo from "../assets/logo.jpeg"
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src= {Logo} alt="Welcome" />
        <spam>Shopping Cart</spam>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="Link">Cart</NavLink>
      </nav>
      <link>
        <span to="cart" className="items">Cart: 2</span>
      </link>
    </header>
  )
}
