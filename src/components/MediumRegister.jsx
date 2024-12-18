import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import { TypewriterEffectSmooth } from "./ui/typeWriterEffect";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

export function MediumRegister() {
  const [email, setEmail] = useState(""); 
  const [isSubscribed, setIsSubscribed] = useState(false); 

  const words = [
    { text: "Stay" },
    { text: "updated" },
    { text: "with" },
    { text: "the" },
    { text: "latest" },
    { text: "blogs" },
    { text: "from" },
    { text: "Mekanika.", className: "text-yellow-300 dark:text-yellow-300" },
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();

    const templateParams = {
      email: email,
      year: currentYear,
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setIsSubscribed(true); 
          toast.success("Successfully Subscribed!"); 
          setEmail(""); 
        },
        (err) => {
          console.error("Failed to send email", err);
          toast.error("Failed to subscribe. Please try again."); 
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center h-[20rem] px-4 sm:px-8 lg:px-16">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        To get notified about new blogs every week, Register here.
      </p>
      <TypewriterEffectSmooth words={words} />

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center w-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="w-full md:w-72 h-12 rounded-xl border  border-gray-700  text-white bg-gray-900 text-sm px-3"
          required
        />
        <button
          type="submit"
          className={`w-36 h-12 rounded-xl flex items-center justify-center ${
            isSubscribed ? "text-gray-950" : "text-gray-100"
          } bg-gradient-to-r ${
            isSubscribed
              ? "from-yellow-300 to-yellow-400"
              : "from-gray-900 via-gray-800 to-gray-900"
          }`}
          disabled={isSubscribed}
        >
          {isSubscribed ? (
            <span className="flex items-center">
              <CheckIcon className="mr-2 size-4 text-black" />
              Subscribed
            </span>
          ) : (
            <span className="flex items-center">
              Subscribe{" "}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1 text-white" />
            </span>
          )}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
