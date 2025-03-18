import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/resume.pdf';

const Intro = () => {

  const handleDownload = () => {
    window.open(resume, '_blank'); 
  };

  return (
    <section id='intro'>
      <div className='introContent'> 
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Abhay</span><br/>Software Developer
        </span>
        <p className='introPara'>
          I'm a frontend developer passionate about building new things. I have proficiency<br/> in Frontend Tech Stack and have tried my hands on backend as well. <br/>Know data structures and algorithms in addtion with core subjects Would love to <br/>share my resume with you .....
        </p>
        
  
          <button className='btn' onClick={handleDownload}>
          <img src={btnImg} alt='hire me' className='btnImg' /> Download CV
        </button>
        
      </div>
      <img src={bg} alt='profile' className='bg'/>
    </section>
  );
}

export default Intro;
