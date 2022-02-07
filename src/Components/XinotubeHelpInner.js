import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../xinotube_favicon.png'


const XinotubeHelpInner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
  <main id="main-content" className="main">
    <header className="channel-cover">
      <div className="channel__quick-actions">
        <button title="Share this channel" aria-label="Share" className="button button--alt" type="button">
          <span className="button__content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Share2">
              <g>
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </g>
            </svg>
            <span dir="auto" className="button__label">Share</span>
          </span>
        </button>
        <button title="Support this claim" aria-label="Support" className="button button--alt" type="button">
          <span className="button__content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC">
              <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
              <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
              <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
              <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_lineard1594036-70b5-4b88-95a9-905f779b3f3a)"></path>
              <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_lineard1594036-70b5-4b88-95a9-905f779b3f3a)"></path>
              <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_lineard1594036-70b5-4b88-95a9-905f779b3f3a)"></path>
              <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_lineard1594036-70b5-4b88-95a9-905f779b3f3a)"></path>
              <defs>
                <linearGradient id="paint0_lineard1594036-70b5-4b88-95a9-905f779b3f3a" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                  <stop offset="0.2464" stop-color="#E700FF"></stop>
                  <stop offset="0.3166" stop-color="#E804F9"></stop>
                  <stop offset="0.4108" stop-color="#E90EE8"></stop>
                  <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                  <stop offset="0.637" stop-color="#F037A5"></stop>
                  <stop offset="0.7635" stop-color="#F45672"></stop>
                  <stop offset="0.8949" stop-color="#FA7A36"></stop>
                  <stop offset="1" stop-color="#FF9B00"></stop>
                </linearGradient>
                <linearGradient id="paint1_lineard1594036-70b5-4b88-95a9-905f779b3f3a" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                  <stop offset="0.4233" stop-color="#FABD09"></stop>
                  <stop offset="0.8292" stop-color="#FA6B00"></stop>
                </linearGradient>
                <linearGradient id="paint2_lineard1594036-70b5-4b88-95a9-905f779b3f3a" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#BAFF8E"></stop>
                  <stop offset="0.6287" stop-color="#008EBB"></stop>
                </linearGradient>
                <linearGradient id="paint3_lineard1594036-70b5-4b88-95a9-905f779b3f3a" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#BAFF8E"></stop>
                  <stop offset="0.6287" stop-color="#008EBB"></stop>
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span dir="auto" className="button__label">Support</span>
          </span>
        </button>
        <div className="button-group">
          <button title="Unfollow this channel" aria-label="Following" className="button button--alt" type="button">
            <span className="button__content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#e2495e" stroke="#e2495e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon--HeartSolid color-override">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <div dir="auto" className="button__label" style={{position: "relative"}}>
                <div style={{position: "relative", left: "50%", top: "50%", transform: "translate(-50%, 0%)"}}>
                  <span style={{visibility: "hidden"}}>Following <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                      <span style={{visibility: "visible"}}>Following</span>
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </button>
          <button title="Turn off notifications" aria-label="Turn off notifications" className="button button--alt" type="button">
            <span className="button__content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--BellOn">
                <g>
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="currentColor"></path>
                  <path d="M4.9162 1C2.45164 3.45929 1.8302 5.30812 1.76171 9.24794"></path>
                  <path d="M18.7617 1C21.2263 3.45929 21.8477 5.30812 21.9162 9.24794"></path>
                  <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <button className="menu__button claim__menu-button--inline" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
            <g>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </g>
          </svg>
        </button>
      </div>
      <img alt='' className="channel-cover__custom" src="/public/img/placeholderTx.gif"/>
      <img alt='' className="channel-cover__custom" src="https://spee.ch/5/99ef192b3b366563.jpg?quality=85&amp;height=0&amp;width=1300" style={{visibility: "visible"}}/>
      <div className="channel__primary-info">
        <div className="channel-thumbnail channel__thumbnail--channel-page">
          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
        </div>
        <h1 className="channel__title">
          <span title="Xinotube Help" className="truncated-text">Xinotube Help</span>
          <div className="channel-staked__wrapper channel-staked__wrapper--large">
            <svg size="36" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--large channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
            </svg>
          </div>
        </h1>
        <div className="channel__meta">
          <span aria-label="1,243,594" className="">1.2M Followers <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style icon--help" aria-label="Help">
              <span className="button__content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--HelpCircle">
                  <g>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12" y2="17"></line>
                  </g>
                </svg>
              </span>
            </Link>
          </span>
        </div>
      </div>
      <div className="channel-cover__gradient"></div>
    </header>
    <div data-reach-tabs="" className="tabs">
      <div data-reach-tab-list="" role="tablist" className="tabs__list tabs__list--channel-page">
        <button data-reach-tab="" role="tab" id="tab:1:0" tabindex="0" aria-selected="true" aria-controls="panel:1:0" data-selected="" className="tab">Content</button>
        <button data-reach-tab="" role="tab" id="tab:1:1" tabindex="-1" aria-selected="false" aria-controls="panel:1:1" className="tab">Playlists</button>
        <button data-reach-tab="" role="tab" id="tab:1:2" tabindex="-1" aria-selected="false" aria-controls="panel:1:2" className="tab">About</button>
        <button data-reach-tab="" role="tab" id="tab:1:3" tabindex="-1" aria-selected="false" aria-controls="panel:1:3" className="tab">Community</button>
      </div>
      <div className="tab__divider" style={{left: "209px", width: "61.7031px"}}></div>
      <div data-reach-tab-panels="">
        <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:0" id="panel:1:0" className="tab__panel">
          <div className="mb-m mt-m md:mb-xl" style={{display: "none"}}>
            <div>
              <div className="section__header--actions">
                <div>Upcoming Livestreams</div>
              </div>
              <section className="claim-grid">
                <div className="empty main--empty">No results</div>
              </section>
            </div>
          </div>
          <div>
            <div className="section__header--actions">
              <div className="claim-search__wrapper">
                <div className="claim-search__top">
                  <div className="claim-search__menu-group">
                    <button aria-label="Trending" className="button button--alt button-toggle button-toggle--trending" type="button">
                      <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Trending">
                          <g>
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                          </g>
                        </svg>
                        <span dir="auto" className="button__label">Trending</span>
                      </span>
                    </button>
                    <button aria-label="New" className="button button--alt button-toggle button-toggle--new button-toggle--active" type="button">
                      <span className="button__content">
                        <svg size="20" className="icon icon--New" xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="6.65" cy="14.71" r="0.34" transform="translate(-0.5 0.24) rotate(-1.96)"></circle>
                          <circle cx="4.28" cy="16.8" r="0.43" transform="translate(-0.57 0.16) rotate(-1.96)"></circle>
                          <circle cx="3.5" cy="13.91" r="0.43" transform="translate(-0.47 0.13) rotate(-1.96)"></circle>
                          <path d="M14.12,2.43c.39-.35,1-.75,1.37-1.1"></path>
                          <path d="M.83,15.17c.07,2.12,1.83,4.27,3.95,4.08,3.39-.31,6.09-4.7,6.09-4.7s-2.35,1.75-2.41.25a3.59,3.59,0,0,1,1.31-3,14.73,14.73,0,0,0,2.47-3.76c.11-.24-4.49,3.11-5.23,3.52-1.17.66-1.73-.85-1-1.68.48-.51,6.38-6,6.38-6L3.2,11S.76,13,.83,15.17Z"></path>
                          <path d="M7.51,4.57l-.18-.51a1.54,1.54,0,0,0-1.15-1L5.64,3l.51-.18a1.54,1.54,0,0,0,1-1.15l.1-.53.18.51a1.54,1.54,0,0,0,1.15,1l.53.1-.51.18A1.54,1.54,0,0,0,7.61,4Z"></path>
                          <path d="M15.48,17.56l-.15-.4a1.21,1.21,0,0,0-.91-.78L14,16.3l.4-.15a1.21,1.21,0,0,0,.78-.91l.08-.42.15.4a1.21,1.21,0,0,0,.91.78l.42.08-.4.15a1.21,1.21,0,0,0-.78.91Z"></path>
                          <path d="M3.08,8.07,3,7.77a.87.87,0,0,0-.66-.56L2,7.15,2.31,7a.87.87,0,0,0,.56-.66l.06-.3.1.29a.87.87,0,0,0,.66.56L4,7l-.29.1a.87.87,0,0,0-.56.66Z"></path>
                          <line x1="17.73" y1="6.78" x2="12.48" y2="12.52"></line>
                          <line x1="14.55" y1="6.03" x2="19.13" y2="1.86"></line>
                        </svg>
                        <span dir="auto" className="button__label">New</span>
                      </span>
                    </button>
                    <button aria-label="Top" className="button button--alt button-toggle button-toggle--top" type="button">
                      <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Top">
                          <g>
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                          </g>
                        </svg>
                        <span dir="auto" className="button__label">Top</span>
                      </span>
                    </button>
                  </div>
                  <div className="claim-search__menu-group">
                    <button title="More" aria-label="More" className="button button--alt button-toggle button-toggle--top button-toggle--more" type="button">
                      <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Sliders">
                          <g>
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                          </g>
                        </svg>
                      </span>
                    </button>
                    <button title="Change to list layout" aria-label="Change to list layout" className="button button--alt button-toggle" type="button">
                      <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Layout">
                          <g>
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="section__actions--no-margin">
                <form novalidate="" className="wunderbar--inline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Search">
                    <g>
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </g>
                  </svg>
                  <fieldset-section>
                    <input type="text" className="wunderbar__input--inline" placeholder="Search" value=""/>
                  </fieldset-section>
                </form>
              </div>
            </div>
            <section className="claim-grid">
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/9/0d6aae3db2cf3de8.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/9/0d6aae3db2cf3de8.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>01:08</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="Sending and Receiving Cash Tips on Odysee by Xinotube Help 5 months ago, 00:01:08" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="Sending and Receiving Cash Tips on Odysee" className="truncated-text">Sending and Receiving Cash Tips on Odysee</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--18">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info contains_view_count">
                    <Link aria-current="page" className="button button--no-style active" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="view_count">92,191 views</span>
                        <span className="date_time" title="August 25th, 2021 01:07 AM">5 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/a/13227cc040ef2379.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/a/13227cc040ef2379.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions"></div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--FileText">
                          <g>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="New Moderation Tools by Odysee 7 months ago" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="New Moderation Tools" className="truncated-text" >New Moderation Tools</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--19">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info">
                    <Link className="button button--no-style" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link className="button button--no-style button--uri-indicator" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@Odysee</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="date_time" title="July 2nd, 2021 02:50 AM">7 months ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="claim-tile__repost-author">
                    <div className="claim-preview__repost-author">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Repeat claim-preview__repost-icon">
                        <g>
                          <polyline points="17 1 21 5 17 9"></polyline>
                          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                          <polyline points="7 23 3 19 7 15"></polyline>
                          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                        </g>
                      </svg>
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link> reposted
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/d/763addeb700aca07.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/d/763addeb700aca07.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>00:49</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="Playlists on Odysee by Xinotube Help 7 months ago, 00:00:49" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="Playlists on Odysee" className="truncated-text" >Playlists on Odysee</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info contains_view_count">
                    <Link aria-current="page" className="button button--no-style active" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="view_count">15,048 views</span>
                        <span className="date_time" title="June 16th, 2021 11:35 PM">7 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/7/aa46db5b8fc90e3c.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/7/aa46db5b8fc90e3c.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>00:47</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="How to Livestream on Odysee by Xinotube Help 7 months ago, 00:00:47" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="How to Livestream on Odysee" className="truncated-text">How to Livestream on Odysee</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--21">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info contains_view_count">
                    <Link aria-current="page" className="button button--no-style active" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="view_count">19,739 views</span>
                        <span className="date_time" title="June 9th, 2021 07:40 AM">7 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/4/e646b84d8123b423.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/4/e646b84d8123b423.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>00:58</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="Uploading, Editing, and Deleting Videos by Xinotube Help 9 months ago, 00:00:58" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="Uploading, Editing, and Deleting Videos" className="truncated-text" >Uploading, Editing, and Deleting Videos</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--22">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info contains_view_count">
                    <Link aria-current="page" className="button button--no-style active" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="view_count">22,371 views</span>
                        <span className="date_time" title="April 21st, 2021 03:21 AM">9 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/1/afed32045a0ca61b.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/1/afed32045a0ca61b.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>00:21</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="Get Your YouTube Channel On Odysee by Odysee 9 months ago, 00:00:21" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="Get Your YouTube Channel On Odysee" className="truncated-text">Get Your YouTube Channel On Odysee</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--23">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info">
                    <Link className="button button--no-style" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link className="button button--no-style button--uri-indicator" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@Odysee</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="date_time" title="April 12th, 2021 11:49 PM">9 months ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="claim-tile__repost-author">
                    <div className="claim-preview__repost-author">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Repeat claim-preview__repost-icon">
                        <g>
                          <polyline points="17 1 21 5 17 9"></polyline>
                          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                          <polyline points="7 23 3 19 7 15"></polyline>
                          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                        </g>
                      </svg>
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link> reposted
                    </div>
                  </div>
                </div>
              </li>
              <li className="card claim-preview--tile">
                <Link  tabindex="-1" to="/playvideo">
                  <div data-background-image="https://spee.ch/9/f516860b97df76db.png?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/9/f516860b97df76db.png?quality=85&amp;height=220&amp;width=390)"}}>
                    <div className="claim-preview__hover-actions">
                      <button title="Add to Watch Later" aria-label="Add" className="button button--no-style button--file-action" type="button" tabindex="-1">
                        <span className="button__content">
                          <svg size="16" className="icon icon--time" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                              <path d="M12 12L12 8.25"></path>
                              <path d="M12 12L16.687 16.688"></path>
                            </g>
                          </svg>
                          <span dir="auto" className="button__label">Add</span>
                        </span>
                      </button>
                    </div>
                    <div className="claim-preview__file-property-overlay">
                      <div className="claim-preview__overlay-properties">
                        <span>00:48</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video">
                          <g>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          <title>You are subscribed to this channel.</title>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="claim-tile__header">
                  <Link aria-label="Swap Crypto For Credits by Odysee 9 months ago, 00:00:48" to="/playvideo">
                    <h2 className="claim-tile__title">
                      <span title="Swap Crypto For Credits" className="truncated-text">Swap Crypto For Credits</span>
                    </h2>
                  </Link>
                  <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--24">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical">
                      <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="claim-tile__info">
                    <Link className="button button--no-style" tabindex="-1" to="">
                      <span className="button__content">
                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                          <img alt="" className="channel-thumbnail__custom" loading="lazy" src={imgLogo} style={{visibility: "visible"}}/>
                          <div className="channel-staked__wrapper">
                            <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </Link>
                    <div className="claim-tile__about">
                      <Link className="button button--no-style button--uri-indicator" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@Odysee</span>
                        </span>
                      </Link>
                      <div className="claim-tile__about--counts">
                        <span className="date_time" title="April 15th, 2021 12:57 AM">9 months ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="claim-tile__repost-author">
                    <div className="claim-preview__repost-author">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Repeat claim-preview__repost-icon">
                        <g>
                          <polyline points="17 1 21 5 17 9"></polyline>
                          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                          <polyline points="7 23 3 19 7 15"></polyline>
                          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                        </g>
                      </svg>
                      <Link aria-current="page" className="button button--no-style button--uri-indicator active" aria-hidden="false" tabindex="0" to="">
                        <span className="button__content">
                          <span dir="auto" className="channel-name">@XinotubeHelp</span>
                        </span>
                      </Link> reposted
                    </div>
                  </div>
                </div>
              </li>
  
            </section>
          </div>
        </div>
        <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:1" hidden="" id="panel:1:1" className="tab__panel"></div>
        <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:2" hidden="" id="panel:1:2" className="tab__panel">
          <div className="card d-none">
            <section className="section card--section">
              <label>Description</label>
              <div className="media__info-text media__info-text--constrained">
                <div dir="auto" className="markdown-preview">
                  <p>Contact information: </p>
                  <p>For support: <br/>
                    <Link target="_blank" rel="noopener noreferrer" to="mailto:help@odysee.com" className="button button--link button--external-link" title="mailto:help@odysee.com" aria-label="mailto:help@odysee.com">
                      <span className="button__content">
                        <span dir="auto" className="button__label">help@odysee.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ExternalLink">
                          <g>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </p>
                  <p>For media inquiries: <br/>
                    <Link target="_blank" rel="noopener noreferrer" to="mailto:media@odysee.com" className="button button--link button--external-link" title="mailto:media@odysee.com" aria-label="mailto:media@odysee.com">
                      <span className="button__content">
                        <span dir="auto" className="button__label">media@odysee.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ExternalLink">
                          <g>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </p>
                  <p>For business related queries: <br/>
                    <Link target="_blank" rel="noopener noreferrer" to="mailto:business@odysee.com" className="button button--link button--external-link" title="mailto:business@odysee.com" aria-label="mailto:business@odysee.com">
                      <span className="button__content">
                        <span dir="auto" className="button__label">business@odysee.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ExternalLink">
                          <g>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <label>Tags</label>
              <div className="media__info-text"></div>
              <label>Languages</label>
              <div className="media__info-text"></div>
              <label>Total Uploads</label>
              <div className="media__info-text">20</div>
              <label>Last Updated</label>
              <div className="media__info-text">
                <span className="date_time" title="September 4th, 2020 02:30 AM">1 year ago</span>
              </div>
              <label>URL</label>
              <div className="media__info-text">
                <div className="media__info-text media__info-text--constrained">lbry://@XinotubeHelp#b</div>
              </div>
              <label>Claim ID</label>
              <div className="media__info-text">
                <div className="media__info-text media__info-text--constrained">b58dfaeab6c70754d792cdd9b56ff59b90aea334</div>
              </div>
              <label>Staked Credits</label>
              <div className="media__info-text">
                <span title="1485.63" className="">
                  <span className="credit-amount">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc icon__lbc--after-text">
                      <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                      <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                      <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                      <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linearc1455100-3d88-4adc-8251-b13e6498f1d2)"></path>
                      <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linearc1455100-3d88-4adc-8251-b13e6498f1d2)"></path>
                      <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linearc1455100-3d88-4adc-8251-b13e6498f1d2)"></path>
                      <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linearc1455100-3d88-4adc-8251-b13e6498f1d2)"></path>
                      <defs>
                        <linearGradient id="paint0_linearc1455100-3d88-4adc-8251-b13e6498f1d2" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                          <stop offset="0.2464" stop-color="#E700FF"></stop>
                          <stop offset="0.3166" stop-color="#E804F9"></stop>
                          <stop offset="0.4108" stop-color="#E90EE8"></stop>
                          <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                          <stop offset="0.637" stop-color="#F037A5"></stop>
                          <stop offset="0.7635" stop-color="#F45672"></stop>
                          <stop offset="0.8949" stop-color="#FA7A36"></stop>
                          <stop offset="1" stop-color="#FF9B00"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linearc1455100-3d88-4adc-8251-b13e6498f1d2" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                          <stop offset="0.4233" stop-color="#FABD09"></stop>
                          <stop offset="0.8292" stop-color="#FA6B00"></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linearc1455100-3d88-4adc-8251-b13e6498f1d2" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#BAFF8E"></stop>
                          <stop offset="0.6287" stop-color="#008EBB"></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linearc1455100-3d88-4adc-8251-b13e6498f1d2" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#BAFF8E"></stop>
                          <stop offset="0.6287" stop-color="#008EBB"></stop>
                        </linearGradient>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>1,485.6361 </span>
                </span>
                <Link className="button button--link" aria-label="view other claims at lbry://@XinotubeHelp" to="/$/top?name=@XinotubeHelp">
                  <span className="button__content">
                    <span dir="auto" className="button__label">view other claims at lbry://@XinotubeHelp</span>
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:3" hidden="" id="panel:1:3" className="tab__panel"></div>
      </div>
    </div>
  </main>
</div>
      </>
  )
};

export default XinotubeHelpInner;
