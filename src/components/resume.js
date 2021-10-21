import React from 'react';

const styles = {
    resumeStyle: {
      background: '#8f8073',
      height: '100px'
    },
    resume1Style: {
      fontSize: '30px',
      textAlign: 'center',
    },
  };
  
  
  function resume() {
    return (
  
  <resume style={styles.resumeStyle} id="contact-me" className="resume">
  <h2 style={styles.resume1Style}>resume</h2>
  <ul>
      <li>
          <p>resume</p>
  
      </li>
  </ul>
  <p>&copy; Guzman, Inc.</p>
  </resume>
  
    );
  }
  
  
  export default resume;