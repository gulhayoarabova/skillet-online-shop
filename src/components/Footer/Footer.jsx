import React from 'react'
import  "./Footer.css";

const Footer = () => {
    return (
        <div className="container">
        <div className="container2">
          <div className="footer-left-div">
              <p className="bolded-txt">Keep in touch 😊</p>
              <p className="lighted-txt">Be the first to know about new collections and what’s going on at Our Place.</p>
              <div className="footer-input">
                  <input placeholder="Insert your name" className="left-div-input"/>
                  <button type="button" className="left-div-button">Submit</button>
              </div>
          </div>
          <div className="footer-righ-div">
              <div className="div_1">
                  <p className="bold-para">Shop</p>
                  <p>Main Plates</p>
                  <p>Side Bowls</p>
                  <p>Drinking Glasses</p>
              </div>
              <div className="div_1">
                  <p className="bold-para">Company</p>
                  <p>Mission</p>
                  <p>FAQs</p>
                  <p>Contact Us</p>
                  <p>Returns</p>
              </div>
              <div className="div_1">
                  <p className="bold-para">Social</p>
                  <p>Instagram</p>
                  <p>Telegram</p>
              </div>
          </div>
          </div>
          <div className="final-div">       
              <p>© Our Place 2021</p>
              </div>
        </div>
    )
}

export default Footer
