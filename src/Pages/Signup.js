import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Signup = () => {
  return (
      <>
      <div className='main-wrapper'>
      <header className="header header--minimal">
        <div className="header__navigation">
            <div className="header__menu--left">
            <button aria-label="Skip Navigation" className="button button--link skip-button" type="button">
                <span className="button__content">
                <span dir="auto" className="button__label">Skip Navigation</span>
                </span>
            </button>
            <Link className="button button--no-style header__navigationItem--logo" title="Home" aria-label="Home" to="/">
              <img src={logo} alt="logo" />
            </Link>
            </div>
            <div className="header__menu--right">
            <Link title="Go Back" aria-label="Go Back" className="button button--alt" type="button" to='/'>
                <span className="button__content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--X" >
                    <g>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    </g>
                </svg>
                </span>
            </Link>
            </div>
        </div>
    </header>

    <div className="main-wrapper__inner main-wrapper__inner--auth">
  <div className="sidebar--pusher--filepage">
    <main id="main-content" className="main main--auth-page">
      <section className="main--contained">
        <div className="main__sign-up main__sign-up--graphic">
          <section className="card card__multi-pane">
            <div className="card__first-pane">
              <div className="card__header--between">
                <div className="card__title-section">
                  <div>
                    <h2 className="card__title">Join</h2>
                  </div>
                </div>
                <div className="card__title-actions-container"></div>
              </div>
              <div className="card__main-actions">
                <div className="">
                  <form novalidate="" className="section">
                    <fieldset-section>
                      <label for="sign_up_email">Email</label>
                      <input type="email" id="sign_up_email" placeholder="yourstruly@example.com" value=""/>
                    </fieldset-section>
                    <fieldset-section>
                      <label for="sign_in_password">Password</label>
                      <input type="password" id="sign_in_password" value=""/>
                    </fieldset-section>
                    <div className="checkbox">
                      <input id="youtube_sync_checkbox" type="checkbox"/>
                      <label for="youtube_sync_checkbox">Sync my YouTube channel</label>
                    </div>
                    <div className="section__actions">
                      <button aria-label="Sign Up" className="button button--primary button--disabled" disabled="" type="submit">
                        <span className="button__content">
                          <span dir="auto" className="button__label">Sign Up</span>
                        </span>
                      </button>
                      <Link to="/login" aria-label="Log In" className="button button--link" type="button">
                        <span className="button__content">
                          <span dir="auto" className="button__label">Log In</span>
                        </span>
                      </Link>
                    </div>
                    <p className="help--card-actions">By creating an account, you agree to our <Link target="_blank" rel="noopener noreferrer" to="" className="button button--link" aria-label="terms">
                        <span className="button__content">
                          <span dir="auto" className="button__label">terms</span>
                        </span>
                      </Link> and confirm you're over the age of 13. </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="card__second-pane">
              <div className="signup-image">
                <img alt="Odysee login" src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"/>
              </div>
            </div>
          </section>
        </div>
      </section>
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
          <Link target="_blank" rel="noopener noreferrer" to="https://odysee.com/@OdyseeHelp:b" className="button button--no-style" aria-label="FAQ">
            <span className="button__content">
              <span dir="auto" className="button__label">FAQ</span>
            </span>
          </Link>
        </li>
        <li className="footer__link">
          <Link target="_blank" rel="noopener noreferrer" to="/XinotubeHelp" className="button button--no-style" aria-label="Support">
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
</div>
    </div>
      </>
  )
};

export default Signup;
