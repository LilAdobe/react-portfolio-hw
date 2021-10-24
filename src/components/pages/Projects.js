import React from 'react';
import GifGit from '../../assets/images/pgif.jpg'
import Gif from '../../assets/images/gif.png'
import Eom from '../../assets/images/eom.jpg'
import EomGit from '../../assets/images/eomgit.jpg'
import Wet from '../../assets/images/shweather.png'
import WetGit from '../../assets/images/weathergit.jpg'


const styles = {
  projectsStyle: {
    background: '#8f8073',
    height: '100px'
  },
  projects1Style: {
    fontSize: '30px',
    textAlign: 'center',
  },
  images: {
    maxHeight: '350px',
    maxWidth: '350px',
    minHeight: "50%",
    display: "block",
    maxWidth: "100%",
    height: "auto"

  },


  images1: {
    maxHeight: '500px',
    maxWidth: '500px',
    minHeight: "50%",
    display: "block",
    maxWidth: "100%",
    height: "auto"

  },
};


function Projects() {
  return (

    <section className="container  text-Black text-center pt-5" >
      <h2>Projects Created/Worked On</h2>
      <a href="https://liladobe.github.io/professor-gif/" target="_blank">
        <p class="title" >Professor-Gif</p>
        <img src={Gif} style={styles.images1} title="Professor-Gif" />
      </a>
      <a href="https://github.com/LilAdobe/professor-gif" target="_blank">
        <p class="title">Professor-Gif Github</p>
        <img style={styles.images} title="Professor-Gif" src={GifGit} className="mexample" />
      </a>

      <a href="https://eom-10-4.herokuapp.com/login" target="_blank">
        <p class="title">Essence_Of_Music</p>
        <img style={styles.images1} src={Eom} className="mexample" />
      </a>
      <a href="https://github.com/Thurstoncox3/Essence_Of_Music" target="_blank">
        <p class="title">Essence_Of_Music Github</p>
        <img style={styles.images} src={EomGit} className="mexample" />
      </a>

      <a href="https://liladobe.github.io/weather-guzman/" target="_blank">
        <p class="title">Weather-Dashboard</p>
        <img src={Wet} style={styles.images1} class="mexample"/>
        </a>
          <a href="https://github.com/LilAdobe/weather-guzman" target="_blank">
            <p class="title">Weather-Dashboard Github</p>
            <img src={WetGit} style={styles.images} class="mexample"/>
          </a>

        </section>
        );
  }


        export default Projects;