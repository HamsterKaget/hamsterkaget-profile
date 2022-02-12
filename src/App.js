import './App.scss';
import React from 'react';
import Navbar from './pagejs/navbar';
import Landing from './pagejs/landing';
import Jobs from './pagejs/jobs';
import Skills from './pagejs/skills.js';
import Library from './pagejs/library.js'

class App extends React.Component {
  render() {
    return (

      <section className='Landing-Page'>
        <Navbar />
        <Landing />
        <Jobs />
        <Skills />
        <Library />
      </section>

    )
  }
}

export default App;
