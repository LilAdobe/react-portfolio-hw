import React from 'react';
import avatar from '../../assets/images/avatar.png';



// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: '#EAE6E5',
  },

  avatar:{
    maxWidth: '25%',
    height: 'auto'
    
  }

};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Me</h2>
      <img src={avatar} style={styles.avatar}/>
      
      <p>
        Hi Im Alexis Guzman, I have worked different types of jobs, such as being a book keepers assistant. To
        an assistant to Vera Concrete managing invoices and minor marketing.
        I'm currently attending a code bootcamp. Learning Javascript, HTML and CSS, and ready to apply to my
        future career.
        Placeholder - info
        The Massachusett Indians were north of Plymouth Colony, led by Chief Massasoit, and the Pokanoket tribe
        were north, east, and south.
        Tisquantum was living with the Pokanokets, as his native tribe of the Patuxets had been effectively
        wiped out prior to the arrival of the Mayflower;
        indeed, the Pilgrims had established their former habitation as the site of Plymouth Colony.
        [58] The Narragansett tribe inhabited Rhode Island.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
    </section>
  );
}

export default Section;
