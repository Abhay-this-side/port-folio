import React from 'react';
import './Projects.css'; 
import Tele from '../../assets/telegram.png';
import Interview from '../../assets/interview.png';
import Hosp from '../../assets/hospital.png';

const Projects = () => {
    return (
        <section id='projects'> 
            <span className="projectTitle">Works</span> 
            <span className="projectDesc">Below are my projects I have worked on .</span>
            <div className="projectBars">
                <div className="projectBar"> 
                    <img src={Tele} alt="UIDesign" className="projectBarImg" /> 
                    <div className="projectBarText"> 
                        <h2><a href='https://mock-interview-two.vercel.app/' className="no-underline-link" rel="noreferrer" target='_blank'>Interviewer</a></h2>
                        <p>Bot for users to search projects by the name of languages.Data is stored locally and utilized BotFather and telebot library to interact with Telegram API using CRUD operations.</p>
                    </div>
                    
                </div>
                <div className="projectBar"> 
                    <img src={Interview} alt="WebDesign" className="projectBarImg" /> 
                    <div className="projectBarText">
                        <h2><a href='https://github.com/Abhay-this-side/TelegramBot_Projects' className="no-underline-link" rel="noreferrer" target='_blank'>Telegram Bot</a></h2>
                        <p>Bot for users to search projects by the name of languages.Data is stored locally and utilized BotFather and telebot library to interact with Telegram API using CRUD operations.</p>
                    </div>

                </div>
                <div className="projectBar">
                    <img src={Hosp} alt="AppDesign" className="projectBarImg" /> 
                    <div className="projectBarText"> 
                        <h2><a href='https://github.com/Abhay-this-side/Hospital_Manager?tab=readme-ov-file' className="no-underline-link" rel="noreferrer" target='_blank'>Hospital Manager(ASAAN)</a></h2>
                        <p>Bot for users to search projects by the name of languages.Data is stored locally and utilized BotFather and telebot library to interact with Telegram API using CRUD operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;