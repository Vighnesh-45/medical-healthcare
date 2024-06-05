import "./Navbar.css"
// import logo from "./../../assets/codifylogo.png"
import person from "./../../assets/person.png"
import search from "./../../assets/search.png"
import heart from "./../../assets/heart.png"
import cart from "./../../assets/cart.png"

const Navbar = () => {
  return (
    <section className="navbar-main">
      <div className="navbar-container">
        <div className="logo">
          {/* <img src= {logo} alt="" /> */}
        </div>
        <nav>
          <ul className="navbar-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="nav-right">
          <img src= {person} alt="" />
          <img src= {search} alt="" />
          <img src= {heart} alt="" />
          <img src= {cart} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Navbar