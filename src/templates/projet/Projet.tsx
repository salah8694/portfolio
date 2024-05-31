import React from 'react';
import './Projet.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from '../../assets/images/kasa.png';
import img2 from '../../assets/images/todo.png';
import img3 from '../../assets/images/atlas.png';
import img4 from '../../assets/images/django.png';
import img5 from '../../assets/images/djangoRest.png';

const Projet = () => {
    const images =[
        img1,
        img2,
        img3,
        img4,
        img5
    ]
  return (
    <div className='projet'>
    <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
    {images.map((img, index) => (
      <div key={index}>
        <img src={img} alt={`Image ${index + 1}`} />
      </div>
    ))}
    </Carousel>
    </div>
  )
}

export default Projet