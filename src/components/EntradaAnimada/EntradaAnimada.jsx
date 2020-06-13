import React, { Component } from "react";
import "./EntradaAnimada.scss";
import { Link } from "react-router-dom";

export default class EntradaAnimada extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    setTimeout(() => {
      let hello = document.querySelector(".hello");
      hello.style.visibility = "visible";
      let button = document.querySelector("button.logo");
      button.style.boxShadow = "0rem 1rem 1rem rgba(155, 155, 155, .2)";
    }, 5000);
    return (
      <div className="entrada-animada">
        <Link to="/Mega" className="logo">
          <button
            type="button"
            className="logo"
          >
            <svg
              className="hello"
              width="230.3px"
              height="155.9px"
              viewBox="0 0 230.3 155.9"
            >
              <path
                fill="none"
                stroke="#000000"
                d="M0.5,0.2c2.2,5.8,0.7,12,0.9,18.2C2,33.2,4.9,48.5,7,63.2
                      c2.2,15.4,5.8,30.3,7.4,45.7c1.3,13.2,0.4,29.8,4.7,42c-0.3-16.9-3.1-48.5,19.5-49.6c21.2-1,11.1,25.8,23.1,37.2
                      c28.4,27,66.2-29,34.8-38.2c-7.2,17.2-5.8,50.6,21.5,44.5c14.1-3.2,20.7-26.4,22.9-39.2c1.3-7.5,12.1-75.8,1-73.9
                      c-12.1,2.1-15.8,45.5-16.3,54.4c-0.8,14.8,1.3,26.9,6.8,40.2c4.6,11,6.9,19.4,19.3,20.7c14.3,1.6,21.8-11.7,27.2-24
                      c8.4-19.3,6.5-43,6.5-64c0-7.3-4.1-27-13-15.4c-4.3,5.6-4.1,23.6-4.4,30.7c-0.5,11.9-1.1,24.4,2.4,35.7c5,15.9,14.8,31.2,30.1,38.3
                      c7.9,3.7,19.4,7.5,25.9-0.5c3.6-4.4,4.6-23.3,2.2-28.6c-5.5-12.5-25-10.9-29.4,1.6c-5.2,14.8,1.6,25.3,9,34.8"
              />
            </svg>
          </button>
        </Link>
      </div>
    );
  }
}
