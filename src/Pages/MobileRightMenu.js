import React, {useState} from "react";
import { Link } from "react-router-dom";

const MobileRightMenu = () => {

    const [switchToggled, setSwitchToggled] = useState(true);
    const ToggleSwitch = () => {
        switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    };
    const [switchToggled1, setSwitchToggled1] = useState(true);
    const ToggleSwitch1 = () => {
        switchToggled1 ? setSwitchToggled1(false) : setSwitchToggled1(true);
    };

  return (
    <>
      <div className="header__authButtons mobile-unvisible">
        <Link className="button button--link" aria-label="Log In" to="/login">
          <span className="button__content">
            <span dir="auto" className="button__label">
              Log In
            </span>
          </span>
        </Link>
        <Link
          className="button button--primary"
          aria-label="Sign Up"
          to="/signup"
        >
          <span className="button__content">
            <span dir="auto" className="button__label">
              Sign Up
            </span>
          </span>
        </Link>
      </div>
      {/* Mobile Menu Start */}
      <button
        onClick={ToggleSwitch1} className="button button--no-style wunderbar__mobile-search unvisible-desktop"
        type="button"
      >
        <span className="button__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon--Search"
          >
            <g>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </g>
          </svg>
        </span>
      </button>
      <div className="header__buttons unvisible-desktop">
        <button
        onClick={ToggleSwitch}
          aria-label="Your account"
          title="Your account"
          className="header__navigationItem header__navigationItem--icon"
          data-reach-menu-button=""
          aria-expanded="false"
          aria-haspopup="menu"
          type="button"
          id="menu-button--76"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon--User"
            aria-hidden="true"
          >
            <g>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
        </button>
      </div>
      {/* Mobile Menu End */}

      {/* Dropdown Menu Start */}
      <div
      className={
        switchToggled
          ? "dropdown-submenu"
          : "dropdown-show"
      }
        data-reach-popover=""
        data-reach-menu=""
        data-reach-menu-popover=""
        style={{ position: "absolute", top: "44px" }}
      >
        <div
          className="menu__list--header"
          data-reach-menu-list=""
          data-reach-menu-items=""
          aria-labelledby="menu-button--76"
          role="menu"
          tabindex="-1"
        >
          <div role="none" tabindex="-1">
            <Link
              className="menu__link"
              data-reach-menu-link=""
              data-reach-menu-item=""
              data-valuetext="Log In"
              role="menuitem"
              tabindex="-1"
              to="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--SignIn"
                aria-hidden="true"
              >
                <g>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </g>
              </svg>
              Log In{" "}
            </Link>
          </div>
          <div role="none" tabindex="-1">
            <Link
              className="menu__link"
              data-reach-menu-link=""
              data-reach-menu-item=""
              data-valuetext="Sign Up"
              role="menuitem"
              tabindex="-1"
              to="/signup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--Key"
                aria-hidden="true"
              >
                <g>
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                </g>
              </svg>
              Sign Up{" "}
            </Link>
          </div>
          <div role="none" tabindex="-1">
            <Link
              className="menu__link"
              data-reach-menu-link=""
              data-reach-menu-item=""
              data-valuetext="Settings"
              role="menuitem"
              tabindex="-1"
              to="/settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--Settings"
                aria-hidden="true"
              >
                <g>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </g>
              </svg>
              Settings{" "}
            </Link>
          </div>
          <div role="none" tabindex="-1">
            <Link
              className="menu__link"
              data-reach-menu-link=""
              data-reach-menu-item=""
              data-valuetext="Help"
              role="menuitem"
              tabindex="-1"
              to="/help"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--HelpCircle"
                aria-hidden="true"
              >
                <g>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12" y2="17"></line>
                </g>
              </svg>
              Help{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* Dropdown Menu End */}

      {/* Search Overlay start */}
      <div className={
        switchToggled1
          ? "search-overlay-hidden"
          : "ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay search-overlay-active"
      }>
        <div
          className="ReactModal__Content ReactModal__Content--after-open modal modal--card-internal"
          tabindex="-1"
          role="dialog"
        >
          <button
          onClick={ToggleSwitch1}
            title="Close"
            aria-label="Close"
            className="button button--close"
            type="button"
          >
            <span className="button__content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--X"
                aria-hidden="true"
              >
                <g>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </g>
              </svg>
            </span>
          </button>
          <form
            novalidate=""
            className="wunderbar__wrapper wunderbar__wrapper--mobile"
          >
            <div className="wunderbar" data-reach-combobox="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--Search"
              >
                <g>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </g>
              </svg>
              <input
                aria-autocomplete="both"
                aria-controls="listbox--4"
                aria-expanded="false"
                aria-haspopup="listbox"
                role="combobox"
                className="wunderbar__input"
                placeholder="Search"
                data-reach-combobox-input=""
                value=""
              />
            </div>
          </form>
          <div className="main--empty">
            <div className="yrbl__wrap">
              <img
                alt="Friendly gerbil"
                className="yrbl yrbl--always-show"
                src="https://spee.ch/spaceman-happy:a.png?quality=85&amp;height=457&amp;width=457"
              />
              <div>
                <div className="yrbl__content">
                  <div className="section__subtitle">Search for something...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Overlay End */}
    </>
  );
};

export default MobileRightMenu;
