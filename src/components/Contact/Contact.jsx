import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <p>Email: <a href="mailto:osama.khazali97@gmail.com">osama.khazali97@gmail.com</a></p>
        <p>Phone: <a href="tel:+962799999999">+962 799 999 999</a></p>
      </div>
      
      <form className="contact-form" action="#" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;