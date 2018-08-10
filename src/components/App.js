import React, { Component } from 'react';
import Header from './Header';
import SignUpForm from './SignUpForm'
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}

export default App;
