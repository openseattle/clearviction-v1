import "../CSS/Navigation.css";
import navLogo from "../Assets/cvp-logo-white.png";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <a className="navbar-brand" href="/">
          <img id="nav-logo" src={navLogo} alt="cvp logo" />
          WA Conviction Vacation Project
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calculator">
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <span id="navbar-text" className="navbar-text">
              The information on this site is not, nor should it be, considered
              legal advice.
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
