

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';


function Home({ homeRef }) {

    
//   const generateRows = () => {
//     const rows = [];
//     const images = [img1, img2, img3, img4, img5, img6]; // Array of imported images
//     for (let i = 0; i < 3; i++) {
//       rows.push(
//         <div className="row" key={i}>
//           <div className="card card-left">
//             <img src={images[2 * i]} alt={`img-${2 * i + 1}`} />
//           </div>
//           <div className="card card-right">
//             <img src={images[2 * i + 1]} alt={`img-${2 * i + 2}`} />
//           </div>
//         </div>
//       );
//     }
//     return rows;
//   };


  useEffect(() => {
    // Set up your animations


  }, []);





  return (
    <></>
    // <div data-scroll-container ref={homeRef}>
    //   <section className="hero" data-scroll-section>
    //     <div className="img">
    //       <img src={img1} alt="img1" />
    //     </div>
    //   </section>
    //   <section className="main" data-scroll-section>
    //     <div className="main-content">
    //       <div className="logo">
    //         <img src={img2} alt="img2" />
    //       </div>
    //       <div className="copy">
    //         <div className="line">
    //           <p>Deliver into coding without clutter.</p>
    //         </div>
    //         <div className="line">
    //           <p>Deliver into coding without clutter.</p>
    //         </div>
    //         <div className="line">
    //           <p>Deliver into coding without clutter.</p>
    //         </div>
    //       </div>
    //       <div className="btn">
    //         <button>Get PRO</button>
    //       </div>
    //     </div>
    //     {generateRows()}
    //   </section>
    //   <section className="footer" data-scroll-section>
    //     <Link
    //       className="footerLink"
    //       to="codegrid.gumroad.com/l/codegridpro"
    //       target="_blank"
    //     >
    //       Link in the Description
    //     </Link>
    //   </section>
    // </div>
  );
}

export default Home;

