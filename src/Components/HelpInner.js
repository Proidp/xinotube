import React from "react";
import { Link } from "react-router-dom";


const HelpInner = () => {
  return (
    <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main card-stack">
          <section className="card">
            <div className="card__first-pane">
              <div className="card__header--between">
                <div className="card__title-section">
                  <div>
                    <h2 className="card__title">Visit the Xinotube Help Hub</h2>
                    <div className="card__subtitle">
                      Our support posts answer many common questions.
                    </div>
                  </div>
                </div>
                <div className="card__title-actions-container"></div>
              </div>
              <div className="card__main-actions">
                <div className="section__actions">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to=""
                    className="button button--secondary"
                    aria-label="View Xinotube Help Hub"
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
                        className="icon icon--HelpCircle"
                        aria-hidden="true"
                      >
                        <g>
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12" y2="17"></line>
                        </g>
                      </svg>
                      <span dir="auto" className="button__label">
                        View Xinotube Help Hub
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="card">
            <div className="card__first-pane">
              <div className="card__header--between">
                <div className="card__title-section">
                  <div>
                    <h2 className="card__title">Find assistance</h2>
                    <div className="card__subtitle">
                      Live help is available most hours in the{" "}
                      <strong>#help</strong> channel of our Discord chat room.
                      Or you can always email us at help@Xinotube.com.{" "}
                    </div>
                  </div>
                </div>
                <div className="card__title-actions-container"></div>
              </div>
              <div className="card__main-actions">
                <div className="section__actions">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to=""
                    className="button button--secondary"
                    aria-label="Join our Discord"
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
                        className="icon icon--MessageCircle"
                        aria-hidden="true"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span dir="auto" className="button__label">
                        Join our Discord
                      </span>
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to=""
                    className="button button--secondary"
                    aria-label="Email Us"
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
                        className="icon icon--Globe"
                        aria-hidden="true"
                      >
                        <g>
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </g>
                      </svg>
                      <span dir="auto" className="button__label">
                        Email Us
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="card">
            <div className="card__first-pane">
              <div className="card__header--between">
                <div className="card__title-section">
                  <div>
                    <h2 className="card__title">
                      Report a bug or suggest something
                    </h2>
                    <div className="card__subtitle">
                      Did you find something wrong? Think Xinotube could add
                      something useful and cool?
                    </div>
                  </div>
                </div>
                <div className="card__title-actions-container"></div>
              </div>
              <div className="card__main-actions">
                <div className="section__actions">
                  <Link
                    className="button button--secondary"
                    aria-label="Submit Feedback"
                    to="/report"
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
                        className="icon icon--MessageSquare"
                        aria-hidden="true"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span dir="auto" className="button__label">
                        Submit Feedback
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <ul className="navigation__tertiary footer__links">
            <li className="footer__link">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/Community-Guidelines
                "
                className="button button--no-style"
                aria-label="Community Guidelines"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    Community Guidelines
                  </span>
                </span>
              </Link>
            </li>
            <li className="footer__link">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/XinotubeHelp"
                className="button button--no-style"
                aria-label="FAQ"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    FAQ
                  </span>
                </span>
              </Link>
            </li>
            <li className="footer__link">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/XinotubeHelp"
                className="button button--no-style"
                aria-label="Support"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    Support
                  </span>
                </span>
              </Link>
            </li>
            <li className="footer__link">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/tos"
                className="button button--no-style"
                aria-label="Terms"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    Terms
                  </span>
                </span>
              </Link>
            </li>
            <li className="footer__link">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/privacypolicy"
                className="button button--no-style"
                aria-label="Privacy Policy"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    Privacy Policy
                  </span>
                </span>
              </Link>
            </li>
            <li className="footer__link" id="gdprPrivacyFooter">
              <button
                aria-label="Cookie Settings"
                className="button button--no-style"
                type="button"
              >
                <span className="button__content">
                  <span dir="auto" className="button__label">
                    Cookie Settings
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default HelpInner;
