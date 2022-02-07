import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeMode from './ThemeMode';


const AfterLogin = () => {

    const [switchUser, setSwitchUser] = useState(true);
    const ToggleUser = () => {
      switchUser ? setSwitchUser(false) : setSwitchUser(true);
   }

   const [switchToggled1, setSwitchToggled1] = useState(true);
   const ToggleSwitch1 = () => {
       switchToggled1 ? setSwitchToggled1(false) : setSwitchToggled1(true);
   };


   const [isActiveUpload, setActiveUpload] = useState("false");
  
   const uploadHandleToggle = () => {
     setActiveUpload(!isActiveUpload);
   };

  return (
    <>
      <div className="header__center mobile-unvisible">
        <form novalidate="" className="wunderbar__wrapper">
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
              aria-hidden="true"
            >
              <g>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </g>
            </svg>
            <input
              aria-autocomplete="both"
              aria-controls="listbox--107"
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
        <div className="header__buttons">
          <button
            onClick={uploadHandleToggle}
            className="header__navigationItem--icon"
            aria-label="Publish a file, or create a channel"
            data-reach-menu-button=""
            aria-expanded="false"
            aria-haspopup="menu"
            type="button"
            id="menu-button--5"
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
              className="icon icon--UploadCloud"
              aria-hidden="true"
            >
              <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                <path
                  d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
                  stroke-linejoin="round"
                ></path>
                <path d="M12, 13 L12, 21"></path>
                <polyline
                  stroke-linejoin="round"
                  transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
                  points="15 11 12 14 9 11"
                ></polyline>
              </g>
            </svg>
          </button>
          {/* Dropdown menu Start updoad */}
          <div
            className={isActiveUpload ? "dropdown-submenu" : "dropdown-show"}
            data-reach-popover=""
            data-reach-menu=""
            data-reach-menu-popover=""
            style={{ position: "absolute", top: "52px" }}
          >
            <div
              className="menu__list--header"
              data-reach-menu-list=""
              data-reach-menu-items=""
              aria-labelledby="menu-button--730"
              role="menu"
              tabindex="-1"
            >
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Upload"
                  role="menuitem"
                  tabindex="-1"
                  to="/upload"
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
                    className="icon icon--UploadCloud"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <path
                        d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
                        stroke-linejoin="round"
                      ></path>
                      <path d="M12, 13 L12, 21"></path>
                      <polyline
                        stroke-linejoin="round"
                        transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
                        points="15 11 12 14 9 11"
                      ></polyline>
                    </g>
                  </svg>
                  Upload{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="New Channel"
                  role="menuitem"
                  tabindex="-1"
                  to="/channel/new"
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
                    className="icon icon--AtSign"
                    aria-hidden="true"
                  >
                    <g>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </g>
                  </svg>
                  New Channel{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Sync YouTube Channel"
                  role="menuitem"
                  tabindex="-1"
                  to="/youtube"
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
                    className="icon icon--Youtube"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </g>
                  </svg>
                  Sync YouTube Channel{" "}
                </Link>
              </div>
            </div>
          </div>
          {/* Dropdown menu end updoad */}
          <ThemeMode />
        </div>
      </div>
      <div className="header__menu--right">
        <div aria-label="Your Wallet" className=" mobile-unvisible">
          <Link
            aria-current="page"
            className="button button--no-style button--file-action header__navigationItem--balance active"
            aria-label="Your Wallet"
            to="/wallet"
          >
            <span className="button__content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon--LBC"
                aria-hidden="true"
              >
                <path
                  d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z"
                  fill="black"
                ></path>
                <path
                  d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                  fill="black"
                ></path>
                <path
                  d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                  fill="black"
                ></path>
                <path
                  d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                  fill="url(#paint0_linear77e011cb-f879-47e8-b413-b25f7fe65cc9)"
                ></path>
                <path
                  d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                  fill="url(#paint1_linear77e011cb-f879-47e8-b413-b25f7fe65cc9)"
                ></path>
                <path
                  d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z"
                  fill="url(#paint2_linear77e011cb-f879-47e8-b413-b25f7fe65cc9)"
                ></path>
                <path
                  d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z"
                  fill="url(#paint3_linear77e011cb-f879-47e8-b413-b25f7fe65cc9)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear77e011cb-f879-47e8-b413-b25f7fe65cc9"
                    x1="3.7206"
                    y1="14.2649"
                    x2="15.1645"
                    y2="14.2649"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2464" stop-color="#E700FF"></stop>
                    <stop offset="0.3166" stop-color="#E804F9"></stop>
                    <stop offset="0.4108" stop-color="#E90EE8"></stop>
                    <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                    <stop offset="0.637" stop-color="#F037A5"></stop>
                    <stop offset="0.7635" stop-color="#F45672"></stop>
                    <stop offset="0.8949" stop-color="#FA7A36"></stop>
                    <stop offset="1" stop-color="#FF9B00"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear77e011cb-f879-47e8-b413-b25f7fe65cc9"
                    x1="2.60274"
                    y1="8.40089"
                    x2="15.14"
                    y2="8.40089"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4233" stop-color="#FABD09"></stop>
                    <stop offset="0.8292" stop-color="#FA6B00"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear77e011cb-f879-47e8-b413-b25f7fe65cc9"
                    x1="6.8682"
                    y1="14.1738"
                    x2="25.405"
                    y2="4.84055"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BAFF8E"></stop>
                    <stop offset="0.6287" stop-color="#008EBB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear77e011cb-f879-47e8-b413-b25f7fe65cc9"
                    x1="25.2522"
                    y1="6.08799"
                    x2="3.87697"
                    y2="27.836"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BAFF8E"></stop>
                    <stop offset="0.6287" stop-color="#008EBB"></stop>
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span dir="auto" className="button__label">
                Your Wallet
              </span>
            </span>
          </Link>
        </div>
        <div className="header__buttons">
          <button
            onClick={ToggleSwitch1}
            className="button button--no-style wunderbar__mobile-search unvisible-desktop"
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
          <button
            onClick={ToggleUser}
            aria-label="Your account"
            title="Your account"
            className="header__navigationItem header__navigationItem--icon"
            data-reach-menu-button=""
            aria-expanded="false"
            aria-haspopup="menu"
            type="button"
            id="menu-button--7"
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
          {/* Dropdown menu start */}
          <div
            className={switchUser ? "dropdown-submenu" : "dropdown-show"}
            data-reach-popover=""
            data-reach-menu=""
            data-reach-menu-popover=""
            style={{ position: "absolute", right: "0", top: "58px" }}
          >
            <div
              className="menu__list--header"
              data-reach-menu-list=""
              data-reach-menu-items=""
              aria-labelledby="menu-button--87"
              role="menu"
              tabindex="-1"
            >
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Uploads"
                  role="menuitem"
                  tabindex="-1"
                  to="/uploads"
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
                    className="icon icon--UploadCloud"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <path
                        d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
                        stroke-linejoin="round"
                      ></path>
                      <path d="M12, 13 L12, 21"></path>
                      <polyline
                        stroke-linejoin="round"
                        transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
                        points="15 11 12 14 9 11"
                      ></polyline>
                    </g>
                  </svg>
                  Uploads{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Channels"
                  role="menuitem"
                  tabindex="-1"
                  to="/channels"
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
                    className="icon icon--AtSign"
                    aria-hidden="true"
                  >
                    <g>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </g>
                  </svg>
                  Channels{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Creator Analytics"
                  role="menuitem"
                  tabindex="-1"
                  to="/dashboard"
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
                    className="icon icon--BarChart2"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M 8.4312337,1.6285136 V 9.4232264 L 2.2367584,22.725564 H 22.030217 L 15.773797,9.2902071 V 1.6285136 Z"></path>
                      <path d="M 4.2426407,18.166369 H 12.197591"></path>
                      <path d="m 6.363961,14.188893 h 5.701048"></path>
                    </g>
                  </svg>
                  Creator Analytics{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Rewards"
                  role="menuitem"
                  tabindex="-1"
                  to="/rewards"
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
                    className="icon icon--Award"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </g>
                  </svg>
                  Rewards{" "}
                </Link>
              </div>
              <div role="none" tabindex="-1">
                <Link
                  className="menu__link"
                  data-reach-menu-link=""
                  data-reach-menu-item=""
                  data-valuetext="Invites"
                  role="menuitem"
                  tabindex="-1"
                  to="/invite"
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
                    className="icon icon--Users"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </g>
                  </svg>
                  Invites{" "}
                </Link>
              </div>
              <div
                data-reach-menu-item=""
                data-valuetext="Sign Outcenid49740@mxclip.com"
                role="menuitem"
                tabindex="-1"
              >
                <div className="menu__link">
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
                    className="icon icon--SignOut"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </g>
                  </svg>
                  Sign Out
                </div>
                <span className="menu__link-help">cenid49740@mxclip.com</span>
              </div>
            </div>
          </div>
          {/* Dropdown menu end */}

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
      
        </div>
      </div>
    </>
  );
};

export default AfterLogin;
