import customer5 from "./Images/manishimg.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SuccessStories.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessStories = () => {
  const [active, setActive] = useState(3);
  const navigate = useNavigate();

  const navigateBlog = () => {
    navigate("/intern-chronicles");
  };
  const items = [
    {
      image: customer5,
      name: "Manish S",
      story:
        "For me, the resources that I referred to mostly were the textbooks that are recommended by professors.",
      role: "Intern @ JLR",
      
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ye12uqiRKyT6laYAJBUVTA.jpeg",
      name: "Aniketh S Gund",
      story:
        "Apart from that Tata is not much concerned about any software or extracurricular activities.",
      role: "Intern @ Tata Steel",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*aPvLzceqCXqIwVWsBdi6_g.jpeg",
      name: "Tanushree Prasad",
      story:
        "Majorly to work in this domain one needs to have good knowledge about the core mechanical engineering concepts",
      role: "Intern @ Tata Steel",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:750/format:webp/1*UON0m5ktaFuvPQOoVq3WMw.jpeg",
      name: "Sayantan Sarkar",
      story:
        "To get into an automotive role, you don’t need any extra subjects other than mechanical curriculum.",
      role: "Intern @ JLR",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*1wKTDqxpXFnXe3mr15VZjQ.jpeg",
      name: "Anushka Kulkarni",
      story:
        " I believe that one project and one intern would be good. It would be great if you could do more.",
      role: "DS Intern @ Microsoft",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*QSst2ZFasUWHXIom0VTqMg.jpeg",
      name: "Apurv Gaurav",
      story:
        "Try to prepare for multiple profiles rather than putting all your hard work into a single profile.",
      role: "Analyst @ BlackRock",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*4QFZWal4FI8mJRZ1QJol6A.jpeg",
      name: "Ashutosh Dash",
      story:
        "Apart from the core domain, the finance domain requires a set of skills depending on the segment that you are focusing on.",
      role: "Intern @ Bajaj Auto Ltd",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Cp8nhcSc4JDnBMkrowvcsA.png",
      name: "Praveen Yadav",
      story:
        "They don’t specifically search for any particular skill set but pursuing some projects in the core mechanical domain.",
      role: "Intern @ JLR",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*E2ZeZ8OqO4tpd8TRqooneQ.png",
      name: "Snehal Swadhin",
      story:
        "Product is one of the easiest domains because product doesn’t require much preparation.",
      role: "Product @Ather Energy",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    },4000);

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
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="homeBlog">
      <div className="blogHead">
        <h1>Blogs</h1>
      </div>
      <div className="blogOverflow">
      <div className="blogDetail">
        <div className="sliderSuccess" onClick={navigateBlog}>
          <div
            style={{
              position: "relative",
              marginTop: "90px",
              width: "100%",
              height: "500px",
              overflow: "hidden",
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
                  height: "340px",
                  textAlign: "justify",
                  borderRadius: "12px",
                  padding: "20px",
                  transition: "0.5s",
                  left: "calc(50% - 150px)",
                  top: "0",
                  marginBottom: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden", 
                  color: "white",
                }}
              >
                <img
                  src={item.image}
                  alt="User Avatar"
                  className=" "
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
                <h1 className="stars " style={{marginBottom:"0"}}>{item.role}</h1>
                <p className="" style={{marginTop:"10px"}}>{item.story}</p>
                <h2 className=" ">{item.name}</h2>
              </div>
            ))}
            {/* 
        <button
          id="next"
          className="  "
          onClick={() =>
            setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev))
          }
        >
          {">>"}
        </button>
        <button
          id="prev"
          className=" "
          onClick={() => setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev))}
        >
          {" "}
          {"<<"}
        </button> */}
          </div>
        </div>{" "}
        <div className="blogDescrp">
          <p data-aos="fade-left">
            The journey of a mechanical engineering student often begins with
            curiosity and determination, but where it leads is a testament to
            hard work, adaptability, and seizing opportunities.
          </p>
          <p data-aos="fade-left">
            In this blog, we celebrate the inspiring stories of students from
            the mechanical department who have carved remarkable paths into
            leading companies like Jaguar Land Rover (JLR), Microsoft, Tata
            Steel, and more.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SuccessStories;
