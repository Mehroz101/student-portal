import React from "react";
import "../styles/Contact.css";
import contactImg from "../assets/bannerImg.png";

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: '100px', minHeight: '80vh' }}>
      <div className="contact-container">
        <div className="contact-img-box">
          <img src={contactImg} alt="Contact Visual" />
        </div>
        <div className="contact-text-box">
          <h2>Get in Touch</h2>
          <p><b>Email:</b> info@mnsuet.edu.pk</p>
          <p><b>Phone:</b> +92 61 933 0442</p>
          <p><b>Address:</b> MNS-UET, Multan, Punjab, Pakistan</p>
          <p>We value your feedback and inquiries. Please contact us for any information or support regarding the university, admissions, or events.</p>
        </div>
      </div>
      <div className="contact-static-section">
        <h2>Office Hours</h2>
        <ul>
          <li><b>Monday - Friday:</b> 9:00 AM - 4:00 PM</li>
          <li><b>Sunday: Saturday</b> Closed</li>
        </ul>
        <h2>Departments</h2>
        <ul>
          <li>Admissions Office: admissions@mnsuet.edu.pk</li>
          <li>Examinations: exams@mnsuet.edu.pk</li>
          <li>Student Affairs: student.affairs@mnsuet.edu.pk</li>
          <li>General Inquiries: info@mnsuet.edu.pk</li>
        </ul>
        <h2>Social Media</h2>
        <ul>
          <li>Facebook: facebook.com/mnsuet</li>
          <li>Twitter: twitter.com/mnsuet</li>
          <li>LinkedIn: linkedin.com/school/mnsuet</li>
        </ul>
      </div>
      <div className="contact-info-section">
        <div className="contact-map">
          <iframe
            title="MNS-UET Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.104240333243!2d71.4942716!3d30.1652189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458d336766f6f79%3A0x38546c04c733d572!2sMuhammad%20Nawaz%20Sharif%20University%20of%20Engineering%20%26%20Technology%2C%20Multan!5e0!3m2!1sen!2s!4v1718187530764!5m2!1sen!2s"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
