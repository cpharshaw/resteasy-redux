import React, { Component } from 'react'
import './ui/test.css';


export class Test extends Component {
  render() {
    return (
      <div>
        <div className="scrollmenu">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
          <a href="#blog">Blog</a>
          <a href="#tools">Tools</a>
          <a href="#base">Base</a>
          <a href="#custom">Custom</a>
          <a href="#more">More</a>
          <a href="#logo">Logo</a>
          <a href="#friends">Friends</a>
          <a href="#partners">Partners</a>
          <a href="#people">People</a>
          <a href="#work">Work</a>
        </div>

        <h2>Horizontal Scrollable Menu</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>
    )
  }
}

export default Test;
