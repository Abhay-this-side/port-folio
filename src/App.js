import Navbar from "./components/Navbar/navbar.js";
import Intro from "./components/Intro/intro.js";
import React from 'react';
import Projects from './components/Projects/Projects.js';
import Skills from "./components/Skills/Skills.js";
import Message from './components/Message/message.js'
import Footer from "./components/Footer/footer.js"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
