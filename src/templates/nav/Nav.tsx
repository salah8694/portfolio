import React from 'react';
import pingouin from "../../assets/images/Lxpigouin.png";
const Nav = () => {
  return (
<nav>
    <img src={pingouin} width={80} className='pingouin' alt="Pingouin" />
    <h1>@portfolio:~$<span>_</span></h1>
    <a href="#name">Accueil</a>
    <a href="#competence">Compétences</a>
    <a href="#experience">Expériences</a>
    <a href="#projets">Projets</a>
    <a href="#contact">Contact</a>
</nav>
    
    
  )
}

export default Nav