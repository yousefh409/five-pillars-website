import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted!', email, subject, message);
    // Reset form after submission
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="info-section">
        <h2>Phone</h2>
        <p style={{marginTop: 0}}>(510) 552-7755 - Adnan Zaki</p>
        <p>(510) 517-8397 - Mohammad Zaki</p>
        <p>info@5pillarscemetery.com</p>
        <p>10 AM - 5 PM Mon - Sun</p>
        <p>Mailing address:</p>
        <p>39675 Cedar Blvd. Ste: 1001A,</p>
        <p>Newark, CA 94560</p>
      </div>
      <div className="main-section">
        <h1>Contact Us</h1>
        <h2>Map</h2>
        <div className="map-text">
          <p style={{ fontSize: "20px" }}>
            1761 Laughlin Rd, Livermore, CA 94551
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.657283261851!2d-121.70941822415733!3d37.727721571997314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe12ff32b1385%3A0xf58f6aba7af5b5a3!2sFive%20Pillars%20Islamic%20Cemetery!5e0!3m2!1sen!2sus!4v1679177976590!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Email Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Subject:</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
