import React, { useEffect, useRef } from 'react';
import "./App.css";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projet from '../src/templates/projet/Projet';
import Nav from '../src/templates/nav/Nav';
import Windows from '../src/templates/window/Windows';
import Competence from '../src/templates/competence/Competence';
import Experience from '../src/templates/experience/Experience';
import Footer from '../src/templates/footer/Footer';
import Forms from '../src/templates/forms/Forms';
import Avis from '../src/templates/avis/Avis';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const flairRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {


    
    gsap.set(flairRef.current, { xPercent: -50, yPercent: -50 });

    const xSetter = gsap.quickSetter(flairRef.current, 'x', 'px');
    const ySetter = gsap.quickSetter(flairRef.current, 'y', 'px');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.classList.add("show"); // Ajouter la classe pour afficher le curseur
      }
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("show"); // Retirer la classe pour masquer le curseur lorsque la souris quitte la zone
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave); // Gérer le cas où la souris quitte la fenêtre

    gsap.to('#name', {
      duration: 2,
      text: "Salah Mouhli",
      color: '#dddddd', // Couleur pour la transition
      color2: '#000000',
      ease: "sine",
      scrollTrigger:{
        trigger:".pingouin",
        toggleActions:"restart reverse play reverse ",
        start:"top 4%",
        end:"bottom 15%",
        markers:false,
        scrub:2,
      } 
    });

    

    gsap.to('#presentation', {
      
      duration: 2,
      text: "Developer Engineer",
      color: '#ffffff', // Couleur pour la transition
      color2: '#000000',
      ease: "bounce"},
     
    );

    gsap.to('#comment', {
      x:100,
      duration: 2,
      text: "... Je crée des solutions numériques, engageantes et accessibles....",
      color: '#dddddd', // Couleur pour la transition
      color2: '#000000',
      ease: "sine",
      
    },);
    


    gsap.to('#competence', {
      x:0,
      duration: 2,
      text: "Compétences",
      color: '#dddddd', // Couleur pour la transition
      color2: '#000000',
      ease: "sine",
      scrollTrigger:{
        trigger:"#react",
        toggleActions:"restart reverse play reverse ",
        start:"top 95%",
        end:"bottom 99%",
        markers:false,
        scrub:2,
      } 
    });

    gsap.to('#experience', {
      
      
      duration: 2,
      text: "Expériences",
      color: '#dddddd', // Couleur pour la transition
      color2: '#000000',
      ease: "sine",
      background:"linear-gradient(to bottom, #00000000 0%,#000000 30%, #000000 90%, #00000000 100%)",
      scrollTrigger:{
        trigger:"#experience",
        toggleActions:"restart reverse play reverse ",
        start:"top 80%",
        end:"bottom 90%",
        markers:false,
        scrub:2,
      } 
    });
    gsap.to('#projets', {
      
      
      duration: 2,
      text: "Projets",
      color: '#dddddd', // Couleur pour la transition
      color2: '#000000',
      ease: "sine",
      background:"linear-gradient(to bottom, #00000000 0%,#000000 30%, #000000 90%, #00000000 100%)",
      scrollTrigger:{
        trigger:"#projets",
        toggleActions:"restart reverse play reverse ",
        start:"top 80%",
        end:"bottom 90%",
        markers:false,
        scrub:2,
      } 
    });

    let deg = gsap.utils.random(25, 115);
    let deg2 = gsap.utils.random(218, 320);

    gsap.to('#presentation', {
      duration: 1,
      '--degree': `${deg}deg`,
      '--degree2': `${deg2}deg`,
      '--color': '#ff0000', // Couleur 1
      '--color2': '#00ff00', // Couleur 2
      ease: 'none',
      yoyo: true,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []);

  return (
    <div className="app">
      <div className="cursor" ref={cursorRef}></div> {/* Div du curseur */}
      <header></header>
      <Nav/>
      <main>
        <div className='corps'>
          <div id="name" />
          <div id="presentation" />
          <div id="comment" />
          <div id="smd">
            <div className='corpsRight'>
              <div id="container">
                <Windows/>
              </div>
            </div>
            <button className='download'>Télécharger</button>
          </div>
        </div>
        <div id="competence"/>
            <Competence/>
        <div className='container3'>
          <div id="experience"/>
            <Experience/>          
        </div>
        <div className='container4'>
          <div id="projets"/>
            <Projet/>
            <Avis/>
            
        </div>
        <Forms/>
        <Footer/>
      
      </main>

    </div>
  );
};

export default App;













