import './App.scss';
import React from 'react';
import Navbar from './pagejs/navbar';
import Landing from './pagejs/landing';
import Jobs from './pagejs/jobs'

class App extends React.Component {
  render() {
    return (

      <section className='Landing-Page'>
        <Navbar />
        <Landing />
        <Jobs />
      </section>

    )
  }
}

export default App;
