import React from 'react'
import "./Header.css"

const Header = () => {
    return (
       <div className="container">
            <div className="upper-header">
                SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS 🙂
            </div>
        <div className="header-wrapper">
            <div className="left-div">
                <ul>
                    <li>SHOP</li>
                    <li>ALWAYS PAN</li>
                </ul>
            </div>

            <div className="middle-div">
                <ul>
                    <li>OUR PLACE</li>
                </ul>
            </div>

            <div className="right-div">
                <ul>
                    <li>MISSION</li>
                    <li>FAQS</li>
                </ul> 
                <div className="right-div-user"></div>
            </div>
        </div>
        </div>
    )
}

export default Header
