import React, { Component } from 'react'
import Header from './Header'
import Profile from './Profile'
import Footer from './Footer'
import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Profile />
        <Footer />
      </div>
    )
  }
}

export default App
