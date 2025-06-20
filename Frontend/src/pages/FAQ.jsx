import React from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "How do I create an account?",
    answer: "Click on the Register link and fill out the required information to create your account."
  },
  {
    question: "What if I forget my password?",
    answer: "Use the 'Forgot Password' option on the login page to reset your password."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to us via the Contact Us page for any assistance."
  },
  {
    question: "How do I update my profile information?",
    answer: "After logging in, go to your profile page and click the 'Edit Profile' button to update your information."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard security practices to protect your data."
  },
  {
    question: "Can I access the portal on mobile devices?",
    answer: "Absolutely! The portal is fully responsive and works on all devices."
  },
  {
    question: "How do I join the alumni directory?",
    answer: "Once you graduate, you can request to join the alumni directory from your profile page."
  },
  {
    question: "Who can see my profile?",
    answer: "Only registered users and alumni can view your profile information."
  },
  {
    question: "How do I reset my email address?",
    answer: "Go to your profile settings and update your email address. A verification will be sent to your new email."
  },
  {
    question: "What browsers are supported?",
    answer: "We support all modern browsers including Chrome, Firefox, Edge, and Safari."
  }
];

const FAQ = () => (
  <div className="faq-page-container">
    <h1 className="faq-title">Frequently Asked Questions</h1>
    <div className="faq-list">
      {faqData.map((item, idx) => (
        <div className="faq-item" key={idx} tabIndex={0}>
          <div className="faq-q">
            <span className="faq-q-icon">❓</span>
            <span className="faq-q-text">{item.question}</span>
          </div>
          <div className="faq-a">{item.answer}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
