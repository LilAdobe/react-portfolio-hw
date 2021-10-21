import React from 'react';

const styles = {
  contactStyle: {
    background: '#8f8073',
    height: '100px'
  },
  contact1Style: {
    fontSize: '30px',
    textAlign: 'center',
  },
};


function Contact() {
  return (

    <contact style={styles.contactStyle} id="contact-me" className="contact">
      <h2 style={styles.contact1Style}>contact test adsfasdfdsadfdsa</h2>
      <section>
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href="tel:+9193765104">919-376-5104</a>
            <a href="mailto:alexisguzman157@outlook.com">Email</a>
            <a href="https://www.linkedin.com/in/alexis-guzman-75427113b">Linkedin</a>
            <a href="https://github.com/LilAdobe">Github</a>

          </li>
        </ul>
      </section>
      </contact>
      );
  }


      export default Contact;