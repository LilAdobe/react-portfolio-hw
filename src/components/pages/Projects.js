import React from 'react';
import Gif from '../../assets/images/pgif.jpg'

const styles = {
  projectsStyle: {
    background: '#8f8073',
    height: '100px'
  },
  projects1Style: {
    fontSize: '30px',
    textAlign: 'center',
  },
};


function Projects() {
  return (

    <section>
      <h2>Work</h2>
      <a href="https://liladobe.github.io/professor-gif/" target="_blank">
        <p class="title">Professor-Gif</p>
        <img src={Gif} title= "Professor-Gif"/>
          </a>
          <a href="https://github.com/LilAdobe/professor-gif" target="_blank">
            <p class="title">Professor-Gif Github</p>
            <img title="Professor-Gif" src="assets/images/pgif.jpg" className="mexample"/>
            </a>

              <a href="https://eom-10-4.herokuapp.com/login" target="_blank">
                <p class="title">Essence_Of_Music</p>
                <img src="assets/images/eom.jpg" className="mexample"/>
              </a>
              <a href="https://github.com/Thurstoncox3/Essence_Of_Music" target="_blank">
                <p class="title">Essence_Of_Music Github</p>
                <img src="assets/images/eomgit.jpg" className="mexample"/>
              </a>
            </section>
            );
  }


            export default Projects;