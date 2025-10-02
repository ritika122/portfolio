import React, { useState } from "react";
import emailjs from "emailjs-com";
import backgroundImage from "../assets/contactimage.jpg"; // adjust path & file name
import SideNav from "./Navigation"; // adjust path to SideNav component

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kh81i8a", // service ID
        "template_q74c67b", // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "qn_rLsFm0wEb3axID" // public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Top-right nav button */}
      <div className="menu-button">
        <SideNav />
      </div>

      <div className="contact-form">
        <h2 className="contact-title">Contact</h2>

        <form onSubmit={handleSubmit} className="contact-inputs">
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter your Subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-input subject-input"
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-input message-input"
          />

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
      <style>
        {`
          .contact-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .menu-button {
            position: absolute;
            top: 1.5rem;
            right: 2.5rem;
            z-index: 30;
          }
          .contact-form {
            width: 100%;
            min-height: 30vh;
            max-width: 28rem;
            background: rgba(0, 0, 0, 0.6); /* dark overlay for text visibility */
            padding: 2rem;
            border-radius: 8px;
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); /* subtle outer shadow */
          }
          .contact-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 4rem;
            text-align: center;
          }
          .contact-subtitle {
            color: #a0a0a0;
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
          }
          .contact-inputs {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .contact-input {
            background-color: #4a4a4a;
            border: none;
            border-radius: 0;
            padding: 0.75rem;
            font-size: 0.875rem;
            color: #fff;
            box-shadow: 0 2.5px rgba(255, 255, 255, 0.89), 0 2px 4px rgba(255, 255, 255, 0.1); /* white line/shade effect */
            outline: none;
          }
          .subject-input {
            background-color: #404040;
            box-shadow: 0 2.5px rgba(255, 255, 255, 0.89), 0 2px 4px rgba(255, 255, 255, 0.1);
          }
          .message-input {
            background-color: #404040;
            height: 6rem;
            resize: none;
            box-shadow: 0 2.5px rgba(255, 255, 255, 0.89), 0 2px 4px rgba(255, 255, 255, 0.1);
          }
          .contact-submit {
            width: 80px;
            margin: 0 auto;
            display: block;
            background-color: transparent;
            color: #fff;
            font-weight: medium;
            padding: 0.5rem;
            border: 2px solid #fff;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .contact-submit:hover {
            background-color: #333;
          }
          @media (max-width: 640px) {
            .contact-form {
              padding: 1rem;
            }
            .contact-title {
              font-size: 1.25rem;
            }
            .contact-input,
            .message-input,
            .contact-submit {
              font-size: 0.75rem;
              padding: 0.5rem;
            }
            .message-input {
              height: 4rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;