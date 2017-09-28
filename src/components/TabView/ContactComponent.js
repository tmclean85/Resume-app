import React from 'react';
import Ionicon from 'react-ionicons';
import './styles.css';

const contactStyle = {
  width: '100%',
  height: 300,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const ContactComponent = () => {
  return (
    <div className="contact-wrapper">
      <a href="www.github.com/tmclean85"><Ionicon icon="ion-social-github" fontSize="100px" color="black" /></a>
      <a href="mailto:trevor.a.mclean@gmail.com"><Ionicon icon="ion-ios-email" fontSize="100px" color="black" /></a>
      <a href="https://ca.linkedin.com/in/trevor-a-mclean"><Ionicon icon="ion-social-linkedin" fontSize="100px" color="black" /></a>
    </div>
  );
};

export default ContactComponent;
