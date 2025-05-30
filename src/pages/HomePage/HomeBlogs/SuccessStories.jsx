// import customer5 from "../../../components/Images/manishimg.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SuccessStories.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextRevealByWord } from "../../../components/magicui/TextReveal.tsx";
import CE_blogsData from "../../../components/assets/CE_blogsData";
import IC_blogsData from "../../../components/assets/IC_blogsData";

const SuccessStories = () => {
  const [active, setActive] = useState(3);
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateBlog = () => {
    navigate("/intern-chronicles");
  };

const ceItems = CE_blogsData.slice(-4).reverse();
const icItems = IC_blogsData.slice(-4).reverse();

  const mixedItems = [];
  for (let i = 0; i < 4; i++) {
    if (icItems[i]) mixedItems.push(icItems[i]);
    if (ceItems[i]) mixedItems.push(ceItems[i]);
  }
  
  const items = mixedItems; 

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    loadShow();
    // eslint-disable-next-line
  }, [active]);

  const loadShow = () => {
    const itemsElement = document.querySelectorAll(".sliderSuccess .item");
    itemsElement[active].style.transform = `none`;
    itemsElement[active].style.zIndex = 1;
    itemsElement[active].style.filter = "none";
    itemsElement[active].style.opacity = 1;
    // Show after
    let stt = 0;
    for (let i = active + 1; i < itemsElement.length; i++) {
      stt++;
      itemsElement[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = "blur(5px)";
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      itemsElement[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = "blur(5px)";
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="homeBlog">
      <div className="blogHead" data-aos="fade-up">
        <h1>Blogs</h1>
      </div>
      <div className={`blogDetail ${isSmallScreen ? "overflow-x-hidden" : ""}`}>
        <div className="sliderSuccess" onClick={navigateBlog}>
          <div
            style={{
              position: "relative",
              marginTop: "90px",
              width: "100%",
              height: "500px",
              overflow: isSmallScreen ? "hidden" : "visible",
            }}
            data-aos="fade-up"
          >
            {items.map((item, index) => (
              <div
                className="item"
                key={index}
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "380px",
                  textAlign: "justify",
                  borderRadius: "12px",
                  padding: "20px",
                  transition: "0.5s",
                  left: "calc(50% - 150px)",
                  top: "0",
                  marginBottom: "100px",
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "white",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt="User Avatar"
                  style={{
                    transition: "transform 0.3s ease, filter 0.3s ease",
                    border: "3px solid #d0e7b0",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.filter = "brightness(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                />
                <h1
                  className="text-lg font-extrabold text-gray-950 uppercase "
                  style={{
                    marginBottom: "0",
                    fontWeight: "700",
                    textAlign: "center",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {item.role}
                </h1>
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "justify",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
        {item.blogDescription}
                </p>
                <h2 style={{ color: "#2e004d" }}>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="blogDescrp mt-8 text-gray-300">
          {isSmallScreen ? (
            <>
              <p data-aos="fade-left">
                The journey of a mechanical engineering student often begins
                with curiosity and determination, but where it leads is a
                testament to hard work, adaptability, and seizing opportunities.
              </p>
              <p data-aos="fade-left">
                In this blog, we celebrate the inspiring stories of students
                from the mechanical department who have carved remarkable paths
                into leading companies like Jaguar Land Rover (JLR), Microsoft,
                Tata Steel, and more.
              </p>
            </>
          ) : (
            <TextRevealByWord
              text={`The journey of a mechanical engineering student often begins with curiosity and determination, but where it leads is a testament to hard work, adaptability, and seizing opportunities. In this blog, we celebrate the inspiring stories of students from the mechanical department who have carved remarkable paths into leading companies like Jaguar Land Rover (JLR), Microsoft, Tata Steel, and more.`}
              className="text-lg sm:text-xl leading-relaxed whitespace-pre-line text-center"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
