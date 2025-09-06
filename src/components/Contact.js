import React from 'react';
import assets from '../assets/assets';

const Contact = () => {
  return (
    // This is the main container div
    <div id="contact" className="contact-container">
      {/* The form acts as the left-side container */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left" // Combined form and contact-left
        target="_blank"
        rel="noopener noreferrer"
      >
        <input
          type="hidden"
          name="access_key"
          value="c573cda8-2be6-49c8-9675-496a0dcc3fbb"
        />
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          required
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          required
        />
        <br />
        <label>Your message:</label>
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-input"
          required
        ></textarea>
        <div className="submit_button">
          <button type="submit" className="button">
            Send message
          </button>
        </div>
      </form>

      {/* The contact-right div is a sibling to the form */}
      <div className="contact-right">
        <h1>Let's Connect</h1>
        <hr />
        <h4 className="contact-text">
          I'm always open to discussing new opportunities, interesting projects,
          or potential collaborations. Whether you have a question, want to work
          together, or just want to say hello, feel free to reach out!
        </h4>
        {/* img can't directly link to external website, need to <a> link it */}
        <a href="https://github.com/slcha25/" target="_blank" rel="noopener noreferrer">
          <img
            className="gitHub"
            src={assets.GitHub}
            alt="GitHub"
            width="50px"
            height="50px"
          />
        </a>
        <a href="https://www.linkedin.com/in/sok-chan/" target="_blank" rel="noopener noreferrer">
          <img
            className="linkedIn"
            src={assets.LinkedIn}
            alt="LinkedIn"
            width="50px"
            height="50px"
          />
        </a>
        <a href="mailto:s.leng.chan@outlook.com">
          <img
            className="eMail"
            src={assets.email}
            alt="Email"
            width="50px"
            height="50px"
          />
        </a>
        <div className="response">
          <h3>Response Time</h3>
          <h5>
            I typically respond within 24 hours. For urgent matters, feel free
            to connect with me on LinkedIn.
          </h5>
        </div>
        <br />
        <h5 className="reserved_right">
          © 2025 Sandra Chan. All rights reserved.
        </h5>
      </div>
    </div> // This closes the main container div
  );
};

export default Contact;
// The extra '}' at the end of the original file was removed
