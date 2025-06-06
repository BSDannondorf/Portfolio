import './App.css'
import IMG from './assets/IMG_3776.jpg'

function App() {
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
    <div class="logo">Daniel Walker</div>
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

  

  {/* <!-- PROFILE SECTION --> */}
  <section id="profile">
    <div class="section__pic-container">
      <img src={IMG} alt="Daniel Walker profile picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">Daniel Walker</h1>
      <p class="section__text__p2">Front End Web Developer</p>
      <div class="btn-container">
        <button class="btn btn-color-1"  onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dannondorf@gmail.com&su=Hiring%20Inquiry&body=Hi%20Daniel,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.', '_blank')">Email Me</button>
        <button class="btn btn-color-2" onclick="window.open('./public/resume_daniel_walker051525.pdf', '_blank')">Resume</button>
      </div>
      <div id="socials-container">
        <a href="https://www.linkedin.com/in/daniel-walker-b74ba0312/" target="_blank">
          <img src="/src/assets/linkedin.png" alt="LinkedIn icon" class="icon" />
        </a>
        <a href="https://github.com/BSDannondorf?tab=repositories" target="_blank">
          <img src="src/assets/githunlink.png" alt="GitHub icon" class="icon" />
        </a>
      </div>
    </div>
  </section>

  {/* <!-- ABOUT SECTION --> */}
  <section id="about">
    <h2 class="title">About Me</h2>
    <div class="section-container">
      <div class="section__pic-container">
        
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            
            <h3>Experience</h3>
            <p>2+ years<br/>Front End Web Development</p>
          </div>
          <div class="details-container">
            
            <h3>Education</h3>
            <p>Front End Certificate<br/>Persevere School of Technology</p>
          </div>
        </div>
        <p>
          I'm passionate about building responsive, user-friendly applications that make a difference. I specialize in JavaScript, React, Node.js, and MongoDB. I also lead local community recovery groups and am committed to using tech for positive impact.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- EXPERIENCE SECTION --> */}
  <section id="experience">
    <h2 class="title">My Experience</h2>
    <h3 class="experience-sub-title">Frontend & Backend Technologies</h3>
    <div class="artical-container">
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>HTML</h3>
        <p>Advanced</p>
      </article>
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>CSS</h3>
        <p>Advanced</p>
      </article>
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>JavaScript</h3>
        <p>Advanced</p>
      </article>
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>React</h3>
        <p>Intermediate</p>
      </article>
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>Node.js</h3>
        <p>Intermediate</p>
      </article>
      <article>
        <img src="/src/assets/checkmark.png" alt="Checkmark" class="icon" />
        <h3>MongoDB</h3>
        <p>Intermediate</p>
      </article>
    </div>
  </section>

  {/* <script>
    function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  </script> */}
    </>
  )
}

export default App
