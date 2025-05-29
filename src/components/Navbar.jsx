import './Navbar.css'

function Navbar() {
  return (
    <>
      {/* <!-- DESKTOP NAVIGATION --> */}
  <nav id="desktop-nav">
    <div class="logo">Daniel Walker</div>
    <ul class="nav-links">
      <li><a href="#profile">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
    </ul>
  </nav>

  {/* <!-- HAMBURGER NAVIGATION --> */}
  <nav id="hamburger-nav">
    <div class="logo">Jessica Sharp</div>
    <div class="hamburger-icon" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="menu-links">
      <li><a href="#profile" onclick="toggleMenu()">Home</a></li>
      <li><a href="#about" onclick="toggleMenu()">About</a></li>
      <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
    </ul>
  </nav>
    </>
  )
}

export default Navbar