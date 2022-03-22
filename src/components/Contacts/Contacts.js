import React, { useRef, useState } from "react";
import "./Contacts.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleFormSubmint = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_srh0zy4",
        "template_6vj8gxi",
        formRef.current,
        "nr7tqMTPf8ZXScIZs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          {" "}
          <h2 className="c-title">Let's dicuss your projects</h2>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +8801715676974
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              sajibhossensa90@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Dhaka ,Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          {" "}
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleFormSubmint}>
            <input
              type="text"
              placeholder="Enter your Name"
              name="user_name"
              id=""
            />

            <input
              type="text"
              placeholder="Enter your Subject"
              name="user_subject"
              id=""
            />

            <input
              type="email"
              placeholder="Enter your Email"
              name="user_email"
              id=""
            />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
          {done && <h2>Thank you</h2>}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
