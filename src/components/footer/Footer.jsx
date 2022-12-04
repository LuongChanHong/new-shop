import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer__wrapper">
        <section className="grid wide">
          <div className="footer__content row">
            {/* CONTACT LINK - START */}
            <div className="col-md-9">
              <div className="row">
                {/* resources link - start */}
                <div className="col-sm-4 col-md-4 col-6  pt-5">
                  <h5>
                    <b>RESOURCES</b>
                  </h5>
                  <ul className="footer_list">
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">FAQ</a>
                    </li>
                    <li>
                      <a href="">Suggest a Product</a>
                    </li>
                    <li>
                      <a href="">Shipping Policy</a>
                    </li>
                    <li>
                      <a href="">Return Policy</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                {/* resources link - end */}
                {/* most popular link - start */}
                <div className="col-sm-4 col-md-4 col-6  pt-5">
                  <h5>
                    <b>MOST POPULAR</b>
                  </h5>
                  <ul className="footer_list">
                    <li>
                      <a href="">Cheese Alternatives</a>
                    </li>
                    <li>
                      <a href="">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="">Candy & Sweets</a>
                    </li>
                    <li>
                      <a href="">Cheese Alternatives</a>
                    </li>
                    <li>
                      <a href="">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="">Candy & Sweets</a>
                    </li>
                    <li>
                      <a href="">Cheese Alternatives</a>
                    </li>
                    <li>
                      <a href="">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="">Candy & Sweets</a>
                    </li>
                  </ul>
                </div>
                {/* most popular link - end */}
                {/* social link - start */}
                <div className="col-sm-4 col-md-4 col-12 pt-5">
                  <h5 className="footer__title">
                    <b>SOCIAL</b>
                  </h5>
                  <ul className="footer_list d-flex align-items-center">
                    <li>
                      <a href="" className="d-flex align-items-center">
                        <div className="footer__icon d-flex align-items-center justify-content-center">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0612/9260/9676/t/2/assets/facebook.png"
                            alt="facebook"
                          />
                        </div>
                        <span className="ps-2">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="" className="d-flex align-items-center">
                        <div className="footer__icon d-flex align-items-center justify-content-center">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0612/9260/9676/t/2/assets/twitter.png"
                            alt="twitter"
                          />
                        </div>
                        <span className="ps-2">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="" className="d-flex align-items-center">
                        <div className="footer__icon d-flex align-items-center justify-content-center">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0612/9260/9676/t/2/assets/instagram.png"
                            alt="instagram"
                          />
                        </div>
                        <span className="ps-2">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* social link - end */}
              </div>
            </div>
            {/* CONTACT LINK - END */}
            {/* SUBSCRIBE INPUT - START */}
            <div className="col-md-3">
              <section className="footer__subscribe pt-5">
                <h5>
                  <b>NEWS LETTER</b>
                </h5>
                <p>Join Our Good News Mailing List</p>
                <form className="footer__form d-flex flex-column gap-3">
                  <input
                    className="footer__input"
                    placeholder="Enter your email"
                  />
                  <button className="footer__button">SUBSCRIBE</button>
                </form>
              </section>
            </div>
            {/* SUBSCRIBE INPUT - END */}
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
