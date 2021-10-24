import React from 'react';
import '../styles/Header.css';
import background from '../assets/images/test.PNG';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    flexWrap: 'wrap'
  },
  headingStyle: {
    fontSize: '50px',
  },

  
};

// We use JSX curly braces to evaluate the style object

function Header({ currentPage, handlePageChange }) {
  return (


    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Alexis Guzman</h1>
      <nav>
            <ul>
                <li>
                    <a href="#Section" onClick={() => handlePageChange('Section')}
                  className={currentPage === 'Section' ? 'nav-link active' : 'nav-link'}>About Me</a>
                </li>
                <li>
                    <a href="#Projects" onClick={() => handlePageChange('Projects')}
                  className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Work Examples</a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                </li>
                <li>
                    <a href="https://my.indeed.com/p/alexisg-cymebow/preview">Resume</a>
                </li>
            </ul>
        </nav>
      
        
    </header>
  );
}

export default Header;
