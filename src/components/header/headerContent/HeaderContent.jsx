import React from "react";
import { useEffect, useState } from "react";

import "./headerContent.css";

const DESKTOP_BP = 1023;
const TABLET_BP = 767;

const HeaderContent = () => {
  const [isOpen, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleInputChange = (e) => {
    const target = e.target;
    console.log("target.value:", target.value);
  };

  const renderSearchContainer = () => {
    return (
      <div className="headerC__searchBar--wrapper px-2 py-1">
        <form className="headerC__searchBar d-flex justify-content-center">
          <input
            className="header__search--input border-0"
            placeholder="Search products..."
            onChange={(e) => handleInputChange(e)}
          />
          <button
            onClick={handleSearch}
            className="header__icon header__search--icon d-flex justify-content-center align-items-center border-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </button>
        </form>
      </div>
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("input:", input);
  };

  const handleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <section className="headerC__container ">
      <section className="headerC__wrapper col">
        {/* DROPDOWN BUTTON AND ICONS - START */}
        <div className="headerC__icon--wrapper d-flex justify-content-between px-2">
          <div className="d-flex align-items-center">
            {screenWidth <= DESKTOP_BP && (
              <button
                className="header__icon border-0 bg-transparent me-4"
                onClick={handleDropdown}
              >
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </button>
            )}
            <div className="logo">
              <img
                src={require("../../../imgs/vegan-essentials-logo_150x.avif")}
                alt=""
              />
            </div>
          </div>
          {screenWidth >= DESKTOP_BP && (
            <ul className="headerC__navbar list-unstyled d-flex m-0">
              <li className="d-flex align-items-center">
                <a href="" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a href="" className="text-decoration-none text-dark">
                  Shop by Category
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a href="" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a href="" className="text-decoration-none text-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          )}
          {screenWidth > TABLET_BP && renderSearchContainer()}
          <div className="d-flex align-items-center">
            <div className="header__icon" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div className="header__icon ms-3 ms-md-4" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </div>
          </div>
        </div>
        {/* DROPDOWN BUTTON AND ICONS - END */}
        {/* SEARCH INPUT - START */}
        {screenWidth <= TABLET_BP && renderSearchContainer()}
        {/* SEARCH INPUT - END */}
      </section>

      {/* DROPDOWN MENU - START */}
      {isOpen && (
        <section className="headerC__dropMenu position-absolute">
          <ul className="list-unstyled">
            <li className="headerC__dropMenu--item p-3">
              <a href="/" className="p-1 text-decoration-none">
                Home
              </a>
            </li>
            <li className="headerC__dropMenu--item p-3">
              <a href="/products" className="p-1 text-decoration-none">
                Shop by Category
              </a>
            </li>
            <li className="headerC__dropMenu--item p-3">
              <a href="/" className="p-1 text-decoration-none">
                About Us
              </a>
            </li>
            <li className="headerC__dropMenu--item p-3">
              <a href="/" className="p-1 text-decoration-none">
                Contact Us
              </a>
            </li>
          </ul>
        </section>
      )}
      {/* DROPDOWN MENU - END */}
    </section>
  );
};

export default HeaderContent;
