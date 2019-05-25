import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="_header">
      <div className="container">
        <a href="/" className="">88影视院</a>
      </div>
    </header>;
  }
}
