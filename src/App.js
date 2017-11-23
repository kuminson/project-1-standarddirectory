import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
