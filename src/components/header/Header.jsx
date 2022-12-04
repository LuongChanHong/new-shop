import React from "react";
import { useEffect, useState } from "react";

import HeaderContent from "./headerContent/HeaderContent";

import "../../css/base.css";
import "../../css/grid.css";

import "./header.css";
const DESKTOP_BP = 1023;
const TABLET_BP = 767;

const Header = () => {
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

  return (
    <header className="headerContainer">
      {/* HEADER PROMO - START */}
      <section className="header__promo d-flex justify-content-center py-2">
        {screenWidth >= TABLET_BP ? (
          <div className="grid wide d-flex justify-content-between text-light">
            <span>📞 833-000-0000</span>
            <span className="m-0 text-center">
              🎉Delicious Holiday Gifts For Vegans🎉
              <span className="text-center m-0">
                <a
                  href="/products"
                  className="text-warning text-decoration-none "
                >
                  SHOP NOW
                </a>
              </span>
            </span>
            {screenWidth >= DESKTOP_BP && (
              <span className="">
                Best Online Vegan Store/Grocery - 2005-2022
              </span>
            )}
          </div>
        ) : (
          <div className="d-flex flex-column">
            <p className="text-light m-0 text-center">
              🎉Delicious Holiday Gifts For Vegans🎉
            </p>
            <p className="text-center m-0">
              <a
                href="/products"
                className="text-warning text-decoration-none "
              >
                SHOP NOW
              </a>
            </p>
          </div>
        )}
      </section>
      {/* HEADER PROMO - END */}
      {/* HEADER CONTENT - START */}
      <section className="header__wrapper grid wide">
        <HeaderContent />
      </section>
      {/* HEADER CONTENT - END */}
      <hr className="m-0" />
    </header>
  );
};

export default Header;
