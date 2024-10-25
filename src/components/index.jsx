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

const Index = () => {
  const [loadernumber, setloadernumber] = useState(0);
  const [showHome, setshowHome] = useState(false);
  const scrollRef = useRef(null); // Ref for locomotive scroll container
  const homeRef = useRef(null); // Separate ref for Home component

  const generateRows = () => {
    const rows = [];
    const images = [img1, img2, img3, img4, img5, img6]; // Array of imported images
    for (let i = 0; i < 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={images[2 * i]} alt={`img-${2 * i + 1}`} />
          </div>
          <div className="card card-right">
            <img src={images[2 * i + 1]} alt={`img-${2 * i + 2}`} />
          </div>
        </div>
      );
    }
    return rows;
  };

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

    window.addEventListener("resize", () => {
      scroll.update();
      ScrollTrigger.refresh();
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

    const ScrollTriggerSettings = {
      trigger: ".index-main",
      scroller: scrollRef.current,
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const LeftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const LeftRotationValues = [-30, -20, -35];
    const RightRotationValues = [30, 20, 35];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft, {
        x: LeftXValues[index],
        scrollTrigger: {
          trigger: ".index-main",
          scroller: scrollRef.current,
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * LeftXValues[index]
            }px) rotate(${progress * LeftRotationValues[index]}deg)`;
            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) rotate(${progress * RightRotationValues[index]}deg)`;
          },
        },
      });
    });

    gsap.to(".index-logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    gsap.to(".index-line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    gsap.to("index-btn", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

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
                <div className="index-hero-img">
                  <img src={img1} alt="img1" />
                </div>
              </section>

              <section className="index-main" data-scroll-section>
                <div className="index-main-content">
                  <div className="index-logo">
                    <img src={img2} alt="img2" />
                  </div>
                  <div className="index-copy">
                    <div className="index-line">
                      <p>Deliver into coding without clutter.</p>
                    </div>
                    <div className="index-line">
                      <p>Deliver into coding without clutter.</p>
                    </div>
                    <div className="index-line">
                      <p>Deliver into coding without clutter.</p>
                    </div>
                  </div>
                  <div className="index-btn">
                    <button>Get PRO</button>
                  </div>
                </div>
                {generateRows()}
              </section>

              <section className="index-footer" data-scroll-section>
                <Link
                  className="index-footer-link"
                  to="codegrid.gumroad.com/l/codegridpro"
                  target="_blank"
                >
                  Link in the Description
                </Link>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
