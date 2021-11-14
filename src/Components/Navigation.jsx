import "../CSS/Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import navLogo from '../Assets/cvp-logo-white.png';

const Navigation = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <>
            <div className="nav-bar__desktop">
                <a href="/"><img src={navLogo} width={25}/></a>
                <a className="logo" href="/">Washington Conviction Vacation Project</a>
                <a className="nav-items" href="/calculator">Calculator</a>
                <a className="nav-items" href="/about">About</a>
                <a className="nav-items" href="/">Volunteer</a>
                <a className="nav-items" href="/">Resources</a>
                <a className="nav-items" href="/">Contact</a>
            </div>
            {menuIsOpen && (
                <div className="nav-menu">
                    <div className="nav-menu__header">
                        Menu
                        <Close onClick={() => setMenuIsOpen(false)} />
                    </div>
                    <nav className="nav-menu__body">
                        <a href="/">Home</a>
                        <a href="/calculator">Calculator</a>
                        {/* <a href="">Volunteer</a> */}
                        {/* <a href="">Resources</a> */}
                        <a href="/about">About</a>
                        {/* <a href="">Contact</a> */}
                    </nav>
                    <div className="nav-menu__disclaimer">
                        The information on this site is not, nor should it be, considered legal advice.
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
