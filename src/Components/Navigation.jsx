import "../CSS/Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

const Navigation = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <>
            <div className="nav-bar">
                CVP
                <MenuIcon onClick={() => setMenuIsOpen(!menuIsOpen)} />
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
                </div>
            )}
        </>
    );
};

export default Navigation;
