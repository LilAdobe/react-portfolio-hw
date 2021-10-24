import React from 'react';
import '../styles/Footer.css'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {

  footingStyle: {
    fontSize: '30px',
    textAlign: 'center',
  },
  icons:{
    maxHeight:'100px',
    maxWidth:'100px',
  }
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (

<footer style={styles.footerStyle} id="contact-me" className="footer">

<a href="https://github.com/liladobe" target="_blank">
<img src={icon1} style={styles.icons} />
</a>
<a href="https://www.linkedin.com/in/alexis-guzman-75427113b" target="_blank">
<img src={icon2} style={styles.icons}/>
</a>
<h2 style={styles.footerStyle}> Other Profiles</h2>
<p>&copy; Guzman, Inc.</p>
</footer>

  );
}


export default Footer;