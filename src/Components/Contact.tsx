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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces
    if (!name) return "Name is required";
    if (!nameRegex.test(name)) return "Name must contain only letters and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email address";
    return "";
  };

  const validateSubject = (subject: string) => {
    const subjectRegex = /[a-zA-Z]/; // Must contain at least one letter
    if (!subject) return "Subject is required";
    if (!subjectRegex.test(subject)) return "Subject must contain at least one letter";
    return "";
  };

  const validateMessage = (message: string) => {
    const messageRegex = /[a-zA-Z]/; // Must contain at least one letter
    if (!message) return "Message is required";
    if (!messageRegex.test(message)) return "Message must contain at least one letter";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change
    setErrors({
      ...errors,
      [name]:
        name === "name"
          ? validateName(value)
          : name === "email"
          ? validateEmail(value)
          : name === "subject"
          ? validateSubject(value)
          : validateMessage(value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const subjectError = validateSubject(formData.subject);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
    });

    // If any error exists, prevent submission
    if (nameError || emailError || subjectError || messageError) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

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
          setErrors({ name: "", email: "", subject: "", message: "" });
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
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              placeholder="Enter your Subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact-input subject-input"
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-input message-input"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

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
          .input-group {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .error {
            color: #ff4d4d;
            font-size: 0.75rem;
            margin-top: 0.25rem;
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
            .error {
              font-size: 0.65rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;