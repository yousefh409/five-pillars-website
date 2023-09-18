import React, { useState } from 'react';
import Title from '../../components/Title/Title';

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
    <div className="p-12 lg:px-64 pb-24">
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
          {/* Left column content */}
          <div>
            <Title content="Contact Info" />
            <div className="ml-6">
              {/* Contact Info */}
              <div className="ml-6">
                <div className="subtitle-font text-3xl text-black py-4">
                  Phone
                </div>
                <p className="text-lg">(510) 552-7755 - Adnan Zaki</p>
                <p className="text-lg">(510) 517-8397 - Mohammad Zaki</p>
                <div className="subtitle-font text-3xl text-black py-4">
                  Email
                </div>
                <p className="text-lg">info@5pillarscemetery.com</p>
                <div className="subtitle-font text-3xl text-black py-4">
                  Hours
                </div>
                <p className="text-lg">Monday through Sunday, 10AM - 5PM</p>
                <div className="subtitle-font text-3xl text-black py-4">
                  Address
                </div>
                <p className="text-lg">39675 Cedar Blvd. Ste: 1001A,</p>
                <p className="text-lg">Newark, CA 94560</p>
              </div>
            </div>
          </div>
          <div className="map-text lg:hidden">
            {/* Map text for small screens */}
            <Title content="Map" />
            <p className="mb-4 text-lg">
              1761 Laughlin Rd, Livermore, CA 94551
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.657283261851!2d-121.70941822415733!3d37.727721571997314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe12ff32b1385%3A0xf58f6aba7af5b5a3!2sFive%20Pillars%20Islamic%20Cemetery!5e0!3m2!1sen!2sus!4v1679177976590!5m2!1sen!2sus"
              width="400"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <div className="hidden lg:block">
            <Title content="Map" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.657283261851!2d-121.70941822415733!3d37.727721571997314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe12ff32b1385%3A0xf58f6aba7af5b5a3!2sFive%20Pillars%20Islamic%20Cemetery!5e0!3m2!1sen!2sus!4v1679177976590!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
