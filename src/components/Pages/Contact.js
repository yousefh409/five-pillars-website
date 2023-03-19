import React, { useState } from "react";

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
    <div>
      <h1>Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.657283261851!2d-121.70941822415733!3d37.727721571997314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe12ff32b1385%3A0xf58f6aba7af5b5a3!2sFive%20Pillars%20Islamic%20Cemetery!5e0!3m2!1sen!2sus!4v1679177976590!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

//export default Contact;
