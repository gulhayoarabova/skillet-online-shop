import React from "react";
import "./MainContent.css";
import bigImg from "./MainContentImgs/big.png";

import supporter1 from "./MainContentImgs/supporter1.png";
import supporter2 from "./MainContentImgs/supporter2.png";
import supporter3 from "./MainContentImgs/supporter3.png";
import supporter4 from "./MainContentImgs/supporter4.png";
import pans from "./MainContentImgs/pans.png";
import grid1 from "./MainContentImgs/grid1.png";
import grid2 from "./MainContentImgs/grid2.png";
import grid3 from "./MainContentImgs/grid3.png";
import grid4 from "./MainContentImgs/grid4.png";
import rect from "./MainContentImgs/Rect.png";
import rect2 from "./MainContentImgs/Rect2.png";






const MainContent = () => {
  return (
    <div className="mainContent-wrapper">
      <div className="mainContent-firstImg">
        <img src={bigImg} className="bigImg" />
      </div>

      {/* SECOND PART  */}
      <div className="below-img-part">
        <p>"DOING THE JOB OF EIGHT TRADITIONAL COOKWARE PIECES "</p>
        <div className="supporter">
          <img src={supporter1} />
          <img src={supporter2} />
          <img src={supporter3} />
          <img src={supporter4} />
        </div>
      </div>

      {/* THIRD PART */}
      <div  className="third-part">
          <p className="welcome-para">WELCOME TO OUR PLACE</p>
          <p className="place-para">At Our Place, we believe in the power of home-cooking to bring people together. Our collections are new heirlooms from the cultures and places that make up the fabric of the modern multi-ethnic kitchen. We design thoughtfully, source ethically, and produce sustainably because what we make is connected to one another and the earth we share.</p>
      </div>
      
      {/* FOURTH PART */}
      <div className="fourth-part">
        <div className="margin-div">
          <p>Designed for Everything and Always</p>
          <div className="round-shapes">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
            <span className="eight"></span>
          </div>
          <div className="central-img">
            <img src={pans}/>
          </div>
        </div>
      </div>

      {/* Z-INDEX TEXT  */}
      <div className="z-index-txt">
        <p className="first-txt">
          Modular lid to release & trap steam
        </p>
        <p className="second-txt">
          2 easy-pour spouts
        </p>
         <p className="third-txt">
         Exclusive, ceramic nonstick made without PFOAs & PTFEs
        </p> 
      </div>


{/* Z-INDEX-TXT2  */}

       <div className="z-index-txt2">
        <p className="first-txt1">
          Modular lid to release & trap steam
        </p>
        <p className="second-txt2">
          2 easy-pour spouts
        </p>
         <p className="third-txt3">
         Exclusive, ceramic nonstick made without PFOAs & PTFEs
        </p> 
      </div>

     {/* central four divs  */}

     <div className="fifth-part">
       <div className="txt-div">
        <p className="txt-grid">From curated essentials to limited-run editions.</p>
        <p>
          We make products inspired by traditions – and we're starting with one you might be familiar with: Dinner.
        </p>
       </div>
       <div className="grid-div">
        <div className="grid-one">
          <div className="grid-img">
            <img src={grid1}/>
          </div>
          <div className="grid-txt">
            <p className="bold-txt">DRINKING GLASSES</p>
            <p className="light-txt" >SET OF 4 - $50</p>
            <p>Hand-made and stackable. Made from recycled glass and natural sand. Naturally colored, without dyes.</p>
          </div>
          <div className="grid-dots">
          <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
        </div>
        <div className="grid-one">
          <div className="grid-img">
            <img src={grid2}/>
          </div>
          <div className="grid-txt">
            <p className="bold-txt">MAIN PLATES</p>
            <p className="light-txt">SET OF 4 - $50</p>
            <p>Hand-painted porcelain plates, stackable and designed for big appetites.</p>
          </div>
          <div className="grid-dots">
          <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
        </div>
       
        <div className="grid-one">
          <div className="grid-img">
            <img src={grid4} className="img4"/>
          </div>
          <div className="grid-txt">
            <p className="bold-txt">SIDE BOWLS</p>
            <p className="light-txt">SET OF 4 - $50</p>
            <p>Hand-painted porcelain stackable bowls, designed for plating, eating, and scoopi.</p>
          </div>
          <div className="grid-dots">
         <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
        </div>
        
         <div className="grid-one">
          <div className="grid-img">
            <img src={grid3}/>
          </div>
          <div className="grid-txt">
            <p className="bold-txt">ALWAYS PAN</p>
            <p className="light-txt">SET OF 4 - $145</p>
            <p>Thoughtfully designed to be the perfect size and shape to do the work of eight pieces of traditional cookware.</p>
          </div>
          <div className="grid-dots">
          <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
        </div>
       </div>
     </div>
     {/* three next to divs  */}
     <div className="next-divs">
       <div className="next-div-img">
         <img src={rect}/>
       </div>
       <div className="next-div-middle">
        <p className="little-txt">#DIRTYDISHES</p>
        <p className="central-txt">A full sink is a sign of a great night. You wash, we'll dry.</p>
        <button type="button" className="grid-button">FOLLOW ALONG</button>
       </div>
       <div className="next-div-last-img">
         <img src={rect2}/>
       </div>
     </div>
     
    </div>
  );
};

export default MainContent;
