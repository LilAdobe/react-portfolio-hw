import React from 'react';


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  footerStyle: {
    background: '#8f8073',
    height: '100px'
  },
  footingStyle: {
    fontSize: '30px',
    textAlign: 'center',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (

<footer style={styles.footerStyle} id="contact-me" className="footer">
<h2 style={styles.footerStyle}>Contact Me</h2>
<ul>
    <li>
        <a href="tel:+9193765104">919-376-5104</a>
        <a href="mailto:alexisguzman157@outlook.com">Email</a>
        <a href="https://www.linkedin.com/in/alexis-guzman-75427113b">Linkedin</a>
        <a href="https://github.com/LilAdobe">Github</a>

    </li>
</ul>
<p>&copy; Guzman, Inc.</p>
</footer>

  );
}


export default Footer;