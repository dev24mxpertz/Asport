import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import "./componentstyle.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Certificates from "./Certificates";
import ExperienceCont from "./ExperienceCont";

const Index = () => {
  const [loadernumber, setloadernumber] = useState(0);
  const [showHome, setshowHome] = useState(false);
  const scrollRef = useRef(null); 
  const homeRef = useRef(null); 
const imagecontainerRef = useRef(null);
const imageRef = useRef(null);
const overlayRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      getDirection: true,
      multiplier: 1,
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
      ScrollTrigger.refresh();
      scroll.update(); 
    });

    window.addEventListener("resize", () => {
      scroll.update();
      ScrollTrigger.refresh();
    });

  
    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", () => {
        scroll.update();
        ScrollTrigger.refresh();
      });
    };
  }, [showHome]);


  useEffect(() => {
    
    if(showHome){
      const overlay = overlayRef.current;
      const imagecontainer = imagecontainerRef.current;
           imagecontainer.style.visibility = "visible";
           const t2 = gsap.timeline({
             scrollTrigger: {
               trigger: imagecontainer,
               start: "top center",
               once: true,
             },
           });

           t2.to(overlay, {
             width: "0%",
             ease: "power2.inOut",
             duration: 1.4,
           }).from(imageRef.current, {
             scale: 1.6,
             ease: "power2.inOut",
             duration: 1,
             delay: -1.4,
           });

           return () => {
             t2.kill();
           };
    }
 
  }, [showHome,imagecontainerRef,overlayRef,imageRef]);

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
                <div ref={imagecontainerRef} className="profile_image">
                  <div ref={overlayRef} className="img-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1729608462362-21193b628e56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="ContainerImage"
                    ref={imageRef}
                  />
                </div>
              </section>

              <section className="index-main" data-scroll-section>
                <Projects />
              </section>
              <section className="index-main" data-scroll-section>
                <Certificates />
              </section>
              <section className="index-main" data-scroll-section>
                <ExperienceCont />
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
