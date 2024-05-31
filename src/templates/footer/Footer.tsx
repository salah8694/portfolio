import React from 'react';
import './Footer.css';
import linkedin from '../../assets/images/reseaux/linkedin.png';
import twitter from '../../assets/images/reseaux/logo-twitter.png';
import github from '../../assets/images/reseaux/github.png';


const Footer = () => {

  const images = [
    
    linkedin,
    twitter,
    github
    
  ];

  return (

    <div className='footer'>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`logo-${index}`} className='reseau'/>
          ))}
          <div className='copyright'>
          
          
          </div>
        </div>
        
      
   
  )
}

export default Footer;
