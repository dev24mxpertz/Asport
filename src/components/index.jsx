import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import "./componentstyle.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import img1 from "../assests/logo1.png";
import img2 from "../assests/logo2.png";
import img3 from "../assests/logo2.png";
import img4 from "../assests/logo2.png";
import img5 from "../assests/logo2.png";
import img6 from "../assests/logo2.png";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Index = () => {
  const [loadernumber, setloadernumber] = useState(0);
  const [showHome, setshowHome] = useState(false);
  const scrollRef = useRef(null); // Ref for locomotive scroll container
  const homeRef = useRef(null); // Separate ref for Home component

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      getDirection: true,
      multiplier: 1, // Control scroll speed multiplier if needed
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    const t1 = gsap.timeline();

    t1.to(".index_main_container_child_image_div1", {
      top: "47%",
      transform: "translate(-50%,-50%) rotate(0deg)",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    t1.to(".index_main_container_child_image_div2", {
      top: "48%",
      transform: "translate(-50%,-50%) rotate(0deg)",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    t1.to(".index_main_container_child_image_div3", {
      top: "49%",
      transform: "translate(-50%,-50%) rotate(0deg)",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    t1.to(".index_main_container_child_image_div4", {
      top: "50%",
      transform: "translate(-50%,-50%) rotate(0deg)",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    t1.to(
      ".index_main_container_child_loadernumber",
      {
        textContent: "100%",
        duration: 5,
      },
      "=-4"
    );
    t1.to(
      ".index_main_container_child_loader_div",
      {
        width: "100%",
        duration: 5,
      },
      "=-4"
    );
    t1.to(".index_main_container_child_loadernumber", {
      opacity: 0,
      duration: 1,
    });
    t1.to(".index_main_container_child_loader_div", {
      opacity: 0,
    });
    t1.to(".index_main_container_child_image_div4", {
      width: "100%",
      height: "100%",
      duration: 1,
    });
    t1.to(".index_main_container_child_image_div4_heading_div", {
      opacity: 1,
      duration: 1,
      top: "48%",
    });
    t1.to(
      ".index_main_container_child_image_div4_heading_div>h1:nth-child(1)",
      {
        fontSize: "3.7vw",
        opacity: 1,
        duration: 1,
      }
    );
    t1.to(
      ".index_main_container_child_image_div4_heading_div>h1:nth-child(2)",
      {
        fontSize: "3.5vw",
        opacity: 1,
        duration: 1,
      }
    );
    t1.to(
      ".index_main_container_child_image_div4_heading_div>h1:nth-child(1)",
      {
        fontSize: "3.3vw",
        opacity: 1,
        duration: 1,
      }
    );
    t1.to(
      ".index_main_container_child_image_div4_heading_div>h1:nth-child(2)",
      {
        fontSize: "3vw",
        opacity: 1,
        duration: 1,
      }
    );
    t1.to(
      ".index_main_container_child_image_div4_heading_div",
      {
        opacity: 1,
        duration: 1,
        top: "40%",
      },
      "=-2"
    );
    t1.to(".index_main_container_child_image_div4_heading_div>p", {
      opacity: 1,
      duration: 1,
    });
    t1.to(" .index_main_container_child_image_div4_heading_div>button", {
      opacity: 1,
      duration: 1,
    });
    t1.to(".index_main_container_child_image_div4_heading_div_span", {
      opacity: 1,
      duration: 1,
    });

    t1.then(() => {
      setshowHome(true);
      ScrollTrigger.refresh(); // Refresh after the timeline completes
      scroll.update(); // Update LocomotiveScroll after content load
    });

    window.addEventListener("resize", () => {
      scroll.update();
      ScrollTrigger.refresh();
    });

    //  gsap.to('.index-hero' , {
    //   y:"-100%",
    //   ease:"none",
    //   duration:0.3,
    //   scrollTrigger:{
    //     trigger:".index_main_container_child_image_div4",
    //     start:"top top",
    //     end:"100vh bottom",
    //     scrub:1
    //   }
    //  })

    // Clean up on component unmount
    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", () => {
        scroll.update();
        ScrollTrigger.refresh();
      });
    };
  }, [showHome]);

  return (
    <>
      <div ref={scrollRef} data-scroll-container className="scroll-container">
        <div className="index_main_container ">
          <div className="index_main_container_child_image_div1"></div>
          <div className="index_main_container_child_image_div2"></div>
          <div className="index_main_container_child_image_div3"></div>
          <div className="index_main_container_child_image_div4">
            <div className="index_main_container_child_image_div4_heading_div">
              <h1>More Languages</h1>
              <h1>Fewer Barriers</h1>
              <p>
                See how Google is expanding support for thousands of the world's
                languages.
              </p>
              <button>Scroll Down</button>
              <span className="index_main_container_child_image_div4_heading_div_span">
                <i className="bi bi-arrow-down-circle"></i>
              </span>
            </div>
          </div>
          <h4 className="index_main_container_child_loadernumber">
            {loadernumber}%
          </h4>
          <div className="index_main_container_child_loader_div"></div>
        </div>
        {showHome && (
          // <Home homeRef={homeRef}/>
          <>
            <div ref={homeRef}>
              <section className="index-hero" data-scroll-section>
                <div className="hero-content-box">
                  <h1> HII, I'M Aman Sharma</h1>
                  <h3>FullStack Developer</h3>
                  <p>
                    Innovative Frontend & Backend Developer looking for an
                    opportunity to advance my career with reputated brands.
                    Expertise in ReactJS, NodeJS, HTML, Css, JavaScript, GSAP,
                    MongoDB, MySQL, RestFull-API'S, AdobeXD, Figma, UI/UX
                    Development & Designing, ThreeJS and many More.
                  </p>

                  <div className="dividediv">
                    <p>Age - 24</p>
                    <p>Nationallity - Indian</p>
                  </div>

                  <div className="dividediv">
                    <p>Gender - Male</p>
                    <p>Language - Hindi , English</p>
                  </div>
                  <div className="dividediv">
                    <p>Phone - +916263571539</p>
                    <p>Email - amansharma1503@gmail.com</p>
                  </div>
                  <div className="socialdiv">
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.linkedin.com/in/amansharma1503/"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-linkedin"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://github.com/Amansh23"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-github"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="mail:amansharma1503@gmail.com"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-envelope-at-fill"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://twitter.com/aman_sharma2309"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-twitter-x"></i>
                      </button>
                    </Link>

                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.instagram.com/_aman_2309/"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-instagram"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.facebook.com/people/Aman-Sharma/pfbid0cX3kppbcEfGeeWehkuCxC1aVEZoLXd2o4bVrBdckXnEKH9wBQ72mSCsGUEzpFtWCl/"
                    >
                      <button className="btn btn-outline-success">
                        <i className="bi bi-facebook"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="index-main" data-scroll-section>
                {/* <Gallery/> */}
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
