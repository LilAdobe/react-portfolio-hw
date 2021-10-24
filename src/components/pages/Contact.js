import React from 'react';
import '../../styles/Contact.css'

const styles = {
  contactStyle: {
    background: '#8f8073',
    height: '100px'
  },
  contact1Style: {
    fontSize: '35px',
    textAlign: 'center',
    marginTop: '27px'
  },
  contact2Style: {
    fontSize: '20px',
    textAlign: 'center',
  },
  box: {

    marginTop: '30px',
    borderRadius: '10px',
    width: '75%',
  }
};


function Contact() {
  return (

    <contact style={styles.contactStyle} id="contact-me" className="contact">

      <h2 style={styles.contact1Style} className="container">CONTACT ME</h2>

      <form id='form' className="container  text-white text-center pt-5" style={styles.contact}>
        <div class="mb-3">
          <input type="text" className='form-control' placeholder='Name' />
        </div>
        <div className="mb-4">
          <input type="email" class="form-control" placeholder='Email address' />
        </div>
        <div className="mb-3">
          <textarea type="text" class="form-control" placeholder='Please enter a short message here' rows='3' />
        </div>
        <button type="button" class="btn btn-danger">Submit</button>
      </form>


      <section style={styles.contact2Style}>
        <h2 className="  text-black text-center pt-5" >Personal Contact</h2>
        <ul>
          <a className="container  text-white text-center " href="tel:+9193765104">  Personal Phone Number</a>
          <a className="container  text-white text-center " href="mailto:alexisguzman157@outlook.com"> Personal Email</a>
          <a className="container  text-white text-center" href="https://www.linkedin.com/in/alexis-guzman-75427113b">Linkedin</a>
          <a className="container  text-white text-center" href="https://github.com/LilAdobe">Github</a>

        </ul>
      </section>
    </contact>
  );
}


export default Contact;