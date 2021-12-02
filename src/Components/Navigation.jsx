import "../CSS/Navigation.css";
import navLogo from "../Assets/cvp-logo-white.png";

const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" id="nav">
        <a class="navbar-brand" href="/">
          <img id="nav-logo" src={navLogo} alt="cvp logo" />
          WA Conviction Vacation Project
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/calculator">
                Calculator
              </a>
            </li>
            <span id="navbar-text" class="navbar-text">
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
