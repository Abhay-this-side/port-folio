import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a passionate web developer with an urge of creating visually appealing and user-friendly websites. I have a strong understanding of languages used in development and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Canva.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>DSA</h2>
                        <p>I have a strong understanding of algorithms and data structures <a href='https://leetcode.com/u/Abhay_Here/' className="no-underline-link" rel="noreferrer" target='_blank'>Abhay</a>.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Languages</h2>
                        <p>C/C++, MySQL,Python, Java, JavaScript, HTML, CSS, Tailwind. Frameworks : MongoDB, ReactJS, Bootstrap.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Familiar with</h2>
                        <p>NextJs, NodeJS, ExpressJS, MongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;