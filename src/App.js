import "./kawindu.css";
import { BsFacebook, BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";

import { IoCallSharp } from "react-icons/io5";
import Portfolio from "./components/portfolios/Portfolio";
import { useEffect, useState } from "react";
import Swipr from "./components/swiper/Swiper";
import Skill from "./components/skill/SkillBar";
import Footer from "./components/footer/Footer";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div className="container">
      <div id="kawindu">
        <div className="kawindu-mw">
          <div className={`kawindu-logo ${scroll && "animate"}`}>
            <img
              src="data:image/png;base64,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"
              alt="Kawindu Nirmal"
            />
          </div>
          <div className="static-section">
            <div className="my-name">
              <h1>Kawindu Nirmal</h1>
            </div>
            <p>
              I am a Web Developer with good expertise in HTML, CSS, PHP, MySQL,
              WordPress. I have 5 years of working experience in related fields.
              I consider myself as a highly professional and a target-oriented
              person to meets all of my client's requirements.
            </p>
            <div className="my-social">
              <ul>
                <li>
                  <a href="tel:+94750693658">
                    <IoCallSharp />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/kawindu12"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kawindu.me/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kawindunirmal"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/94750693658"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="container kawindu-portfolio">
              <h1 className="header-title">Portfolio</h1>
              <Portfolio />
            </div>
            <div className="container kawindu-reviews">
              <h1 className="header-title">Recommendations</h1>
              <Swipr />
            </div>

            <div className="container kawindu-skill">
              <h1 className="header-title">Skill</h1>
              <Skill />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
