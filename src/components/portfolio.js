import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'
// import Navbar from './Navbar';
import Contact from './pages/Contact';
import Section from './pages/Section';
import Projects from './pages/Projects';

// const styles = {
//   portfolioStyle: {
//     background: '#8f8073',
//     height: '100px'
//   },
//   portfolio1Style: {
//     fontSize: '30px',
//     textAlign: 'center',
//   },
// };


function Portfolio() {
  const [currentPage, setCurrentPage] = useState('Section');

  const renderPage = () => {
    if (currentPage === 'Section') {
      return <Section />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />{renderPage()}
      <Footer />
    </div>

  );
}


export default Portfolio;

    // <portfolio style={styles.portfolioStyle} id="contact-me" className="portfolio">
  // <h2 style={styles.portfolio1Style}>portfolio</h2>
  // <ul>
  //     <li>
  //         <p>portfolio</p>

  //     </li>
  // </ul>
  // <p>&copy; Guzman, Inc.</p>
  // </portfolio>
