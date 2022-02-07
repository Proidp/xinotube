import React from 'react';

const SearchOverlay = () => {
  return (
    <>
      <div className="ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay">
        <div
          className="ReactModal__Content ReactModal__Content--after-open modal modal--card-internal"
          tabindex="-1"
          role="dialog"
        >
          <button
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
    </>
  );
};

export default SearchOverlay;
