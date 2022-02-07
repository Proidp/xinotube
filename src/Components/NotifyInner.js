import React from 'react';
import { Link } from 'react-router-dom';


const NotifyInner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main notification-page">
            <div className="claim-list__header">
            <h1 className="card__title">Notifications</h1>
            <div className="claim-list__alt-controls--wrap">
                <button aria-label="Mark all as read" className="button button--secondary" type="button">
                <span className="button__content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Eye" aria-hidden="true">
                    <g>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </g>
                    </svg>
                    <span dir="auto" className="button__label">Mark all as read</span>
                </span>
                </button>
                <fieldset-section className="">
                <select id="filter">
                    <option value="All">All</option>
                    <option value="Others">Others</option>
                </select>
                </fieldset-section>
            </div>
            </div>
            <div className="card">
            <div className="notification_list">
                <div className="notification__wrapper notification__wrapper--unread">
                <Link className="menu__link--notification" to="">
                    <div className="notification__icon">
                    <span className="icon__wrapper icon__wrapper--LBC">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC" aria-hidden="true">
                        <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linearb7cbd56d-f2df-4588-baae-5ea8383c5506)"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linearb7cbd56d-f2df-4588-baae-5ea8383c5506)"></path>
                        <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linearb7cbd56d-f2df-4588-baae-5ea8383c5506)"></path>
                        <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linearb7cbd56d-f2df-4588-baae-5ea8383c5506)"></path>
                        <defs>
                            <linearGradient id="paint0_linearb7cbd56d-f2df-4588-baae-5ea8383c5506" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2464" stop-color="#E700FF"></stop>
                            <stop offset="0.3166" stop-color="#E804F9"></stop>
                            <stop offset="0.4108" stop-color="#E90EE8"></stop>
                            <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                            <stop offset="0.637" stop-color="#F037A5"></stop>
                            <stop offset="0.7635" stop-color="#F45672"></stop>
                            <stop offset="0.8949" stop-color="#FA7A36"></stop>
                            <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linearb7cbd56d-f2df-4588-baae-5ea8383c5506" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                            <stop offset="0.4233" stop-color="#FABD09"></stop>
                            <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linearb7cbd56d-f2df-4588-baae-5ea8383c5506" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linearb7cbd56d-f2df-4588-baae-5ea8383c5506" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                    </div>
                    <div className="notificationContent__wrapper">
                    <div className="notification__content">
                        <div className="notificationText__wrapper">
                        <div className="notification__title"> Free Credits?</div>
                        <div title="You missed out on the daily view reward, sign up for our rewards program!" className="notification__text">You missed out on the daily view reward, sign up for our rewards program!</div>
                        </div>
                    </div>
                    <div className="notification__extra">
                        <button className="button button--no-style notification__markSeen" type="button">
                        <span className="button__content"></span>
                        </button>
                        <div className="notification__time">
                        <span className="date_time" title="February 6th, 2022 07:51 AM">1 hour ago</span>
                        </div>
                    </div>
                    </div>
                    <div className="notification__menu">
                    <button className="menu__button notification__menuButton" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--269">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                        <g>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </g>
                        </svg>
                    </button>
                    </div>
                </Link>
                </div>
                <div className="notification__wrapper notification__wrapper--unread">
                <Link className="menu__link--notification" to="">
                    <div className="notification__icon">
                    <span className="icon__wrapper icon__wrapper--LBC">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC" aria-hidden="true">
                        <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear67136d85-4ed2-4348-a62b-806dbb93847f)"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear67136d85-4ed2-4348-a62b-806dbb93847f)"></path>
                        <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear67136d85-4ed2-4348-a62b-806dbb93847f)"></path>
                        <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear67136d85-4ed2-4348-a62b-806dbb93847f)"></path>
                        <defs>
                            <linearGradient id="paint0_linear67136d85-4ed2-4348-a62b-806dbb93847f" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2464" stop-color="#E700FF"></stop>
                            <stop offset="0.3166" stop-color="#E804F9"></stop>
                            <stop offset="0.4108" stop-color="#E90EE8"></stop>
                            <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                            <stop offset="0.637" stop-color="#F037A5"></stop>
                            <stop offset="0.7635" stop-color="#F45672"></stop>
                            <stop offset="0.8949" stop-color="#FA7A36"></stop>
                            <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear67136d85-4ed2-4348-a62b-806dbb93847f" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                            <stop offset="0.4233" stop-color="#FABD09"></stop>
                            <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear67136d85-4ed2-4348-a62b-806dbb93847f" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear67136d85-4ed2-4348-a62b-806dbb93847f" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                    </div>
                    <div className="notificationContent__wrapper">
                    <div className="notification__content">
                        <div className="notificationText__wrapper">
                        <div className="notification__title"> A Welcome 🎁</div>
                        <div title="Receive free Credits just for doing what you're already doing" className="notification__text">Receive free Credits just for doing what you're already doing</div>
                        </div>
                    </div>
                    <div className="notification__extra">
                        <button className="button button--no-style notification__markSeen" type="button">
                        <span className="button__content"></span>
                        </button>
                        <div className="notification__time">
                        <span className="date_time" title="February 4th, 2022 01:27 PM">1 day ago</span>
                        </div>
                    </div>
                    </div>
                    <div className="notification__menu">
                    <button className="menu__button notification__menuButton" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--270">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                        <g>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </g>
                        </svg>
                    </button>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </main>
        <footer className="footer">
            <ul className="navigation__tertiary footer__links">
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="/Community-Guidelines" className="button button--no-style" aria-label="Community Guidelines">
                <span className="button__content">
                    <span dir="auto" className="button__label">Community Guidelines</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="/XinotubeHelp" className="button button--no-style" aria-label="FAQ">
                <span className="button__content">
                    <span dir="auto" className="button__label">FAQ</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="https://odysee.com/@OdyseeHelp:b" className="button button--no-style" aria-label="Support">
                <span className="button__content">
                    <span dir="auto" className="button__label">Support</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="/tos" className="button button--no-style" aria-label="Terms">
                <span className="button__content">
                    <span dir="auto" className="button__label">Terms</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="/privacypolicy" className="button button--no-style" aria-label="Privacy Policy">
                <span className="button__content">
                    <span dir="auto" className="button__label">Privacy Policy</span>
                </span>
                </Link>
            </li>
            <li className="footer__link" id="gdprPrivacyFooter">
                <button aria-label="Cookie Settings" className="button button--no-style" type="button">
                <span className="button__content">
                    <span dir="auto" className="button__label">Cookie Settings</span>
                </span>
                </button>
            </li>
            </ul>
        </footer>
        </div>
      </>
  )
};

export default NotifyInner;
