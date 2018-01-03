import React from 'react';
import Ionicon from 'react-ionicons';
import './styles.css';

const ContactComponent = () => {
  return (
    <div className="contact-wrapper">
      <a href="https://www.github.com/tmclean85"><Ionicon icon="ion-social-github" fontSize="100px" color="black" /></a>
      <a href="mailto:trevor.a.mclean@gmail.com"><Ionicon icon="ion-ios-email" fontSize="100px" color="black" /></a>
      <a href="https://ca.linkedin.com/in/trevor-a-mclean"><Ionicon icon="ion-social-linkedin" fontSize="100px" color="black" /></a>
    </div>
  );
};

export default ContactComponent;
