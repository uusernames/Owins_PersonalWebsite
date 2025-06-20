import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./index.css";
import App from "./App";
import catImage from "./images/cat.png";
import logo from "./images/logo.svg";
import linked from "./images/linked.svg";
import boarder from "./images/boarder.png";
import boarder2 from "./images/boarder2.png";

export default function Personalwebsite() {
  const [showBar, setShowBar] = useState(false);
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 100);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">

        {/* Calligraphy font signature link fixed top right */}
       <a
    target="_blank"
    rel="noopener noreferrer"
    className="signature-link"
  >
    <img
      src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/cG9ydGZvbGlv/brother-signature.png?r=fs&h=48&w=1000&fg=000000&bg=FFFFFF&tb=1&s=48"
      alt="Calligraphy fonts"
    />
  </a>

        <img src={catImage} alt="Cat" className="cat-image" />
        <img src={logo} alt="Logo" className="download" />
        <img src={boarder} alt="board" className="boarder" />
        <img src={boarder2} alt="board2" className="boarder2" />
        <a
  href="https://linkedin.com/in/owin-tao-3b6620201"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={linked} alt="LinkedIn" className="linked" />
</a>
        {/* Scroll bar */}
        <div className={`scroll-bar ${showBar ? "show" : ""}`}></div>

        {/* Dropdown Menu */}
        <div className="menu-wrapper">
          <div className="menu-button">☰ Menu</div>
          <ul className="menu-dropdown">
            <li><a href="#about">About Me</a></li>
            <li><a href="#html">HTML</a></li>
            <li><a href="#js">JavaScript</a></li>
            <li><a href="#python">Python</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>

        {/* Main content */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
          <div className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>

          <h1 className="pretitle">3rd year accounting at YORK University</h1>
          <h1 className="pretitle2">Tech-Savvy Accounting Student | Skilled in MySQL, Python, Excel & AHK Automation</h1>
          <h1 className="Aboutme">About Me Page</h1>
          <div className="text-left space-y-7">
            <div className="container">
              {[1, 2, 3, 4].map((_, i) => (
                <div className="items" key={i}>
                  <h1>About Me Page</h1>
                  <button>Read Now</button>
                </div>
              ))}
            </div>
          </div>
        </main>

        <App />

        {/* Scroll Down Arrow Button */}
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            className="scroll-down-btn"
            aria-label="Scroll down"
          >
            ↓
          </button>
        </div>

      </div>
    </>
  );
}
