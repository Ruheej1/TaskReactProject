import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
     
      <footer>
        
        <a href="#"><i className="fab fa-facebook-f endicons"></i></a>
        <a href="#"><i className="fab fa-twitter endicons"></i></a>
        <a href="#"><i className="fab fa-instagram endicons"></i></a>
        <a href="#"><i className="fab fa-pinterest endicons"></i></a>
        <h6 className='foot-txt'>@2022 Unbranded design studio. all rights reserved</h6>
      </footer>
      
    );
  }
}

export default Footer;
