import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {
  const inputRef = useRef(false);

  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <>
      <div className="container-contacts">
        <div className="contacts">
          <h1>Get in touch</h1>
          <p>Fell free to drop us a line below!</p>
          <form>
            <input
              type="text"
              ref={inputRef}
              placeholder="Your Name"
              value={value}
              onChange={handleChange}
              required
            />
            <input type="email" placeholder="Your Email" required />
            <textarea
              placeholder={`Type your message here mr ${value}`}
              required
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="nested-contacts">
        <h1>Contact Us</h1>
        <div className="box">
          <img src={assets.location} alt="" />
          <p>309 st Palestine</p>
        </div>
        <div className="box">
          <img src={assets.mail_icon} alt="" />
          <p>Tomato@gmail.com</p>
        </div>
        <div className="box">
          <img src={assets.phone} alt="" />
          <p>+212 68374-3827</p>
        </div>
        <div className="box">
          <img src={assets.user} alt="" />
          <p>Powered by Anas --bd</p>
        </div>
        <div className="social-media">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
