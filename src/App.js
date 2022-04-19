import React, { Component } from 'react'
import './App.css';

import {Routes, Route,Link} from 'react-router-dom';

import Page from './components/Page-One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        {/* <section id="school">
          <div className="container">
            <div className="row">
              <header>
                <div className="col-md-4">
                <h1 className="base">Bt Mobile</h1>
                </div>
                <div className="col-md-8" style={{marginLeft: "-5px"}}>
                  <nav>
                  <ul>
                    <li><a href="/page-one" className="dps">Home</a></li>
                    <li><a href="/two" className="dps">About Us</a></li>
                    <li><a href="/three" className="dps">Services</a></li>
                    <li><a href="/four" className="dps">News</a></li>
                    <li><a href="/five" className="dps">Portfolio</a></li>
                    <li><a href="/six" className="dps">pages</a></li>
                    <li><a href="/login" className="dps">login</a></li>
                  </ul>
                </nav>
                </div>
              </header>
            </div>
          </div>
        </section> */}
        <Routes>
          <Route path="/page-one" element={<Page />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />
          <Route path="/six" element={<Six />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default App;

