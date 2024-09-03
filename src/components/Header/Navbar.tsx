import { useState } from "react"
import MenuLink from "./MenuLink";
import "./Navbar.scss";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../../assets/logo.png"

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <img className="relative z-50 w-16 bg-white rounded-full pb-1 px-4 left-5 border-2 border-gray-800 lg:top-0 top-5" src={logo} alt="logo"></img>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
            >
                <li className="homepage">
                    <MenuLink name="HOME" href="/" />
                </li>
                <li className="about">
                    <MenuLink name="ABOUT" href="/about" />
                </li>
                <li className="services">
                    <MenuLink name="SERVICES" href="/services" />
                </li>
                <li className="contact">
                    <MenuLink name="CONTACT" href="/contact" />
                </li>
            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}>

                {isMobile ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </button>
        </nav >
    );
};

export default Navbar