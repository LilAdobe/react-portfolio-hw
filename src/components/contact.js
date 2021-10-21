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
  
  
  function contact() {
    return (
  
  <contact style={styles.contactStyle} id="contact-me" className="contact">
  <h2 style={styles.contact1Style}>contact</h2>
  <ul>
      <li>
          <p>contact</p>
  
      </li>
  </ul>
  <p>&copy; Guzman, Inc.</p>
  </contact>
  
    );
  }
  
  
  export default contact;