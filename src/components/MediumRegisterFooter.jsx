import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 


export function MediumRegisterFooter() {
  const [email, setEmail] = useState(""); 
  const [isSubscribed, setIsSubscribed] = useState(false); 

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
    <div className="flex flex-col items-center justify-center h-[8rem] lg:mb-8 mb-16 mt-8 lg:mt-0 px-4 sm:px-6 lg:px-12">
      <p className="text-gray-500 text-sm sm:text-base text-center">
        Get notified about new blogs every week by registering here.
      </p>

      <p className="text-yellow-400/90 font-semibold text-lg sm:text-xl mt-2 text-center">
        Stay updated with the latest blogs from Mekanika
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 items-center justify-center w-full mt-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="w-full md:w-72 h-10 rounded-lg border border-gray-700 text-white bg-gray-900 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <button
          type="submit"
          className={`w-32 h-10 rounded-lg flex items-center justify-center text-sm ${
            isSubscribed ? "text-gray-950" : "text-yellow-400"
          } bg-gradient-to-r ${
            isSubscribed
              ? "from-yellow-300 to-yellow-400"
              : "from-gray-900 via-gray-800 to-gray-900"
          }`}
          disabled={isSubscribed}
        >
          {isSubscribed ? (
            <span className="flex items-center">
              <CheckIcon className="mr-1 size-4 text-black font-bold" />
              Subscribed
            </span>
          ) : (
            <span className="flex items-center">
              Subscribe{" "}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1 text-yellow-400" />
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
