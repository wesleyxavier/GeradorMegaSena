import React, { Component } from "react";
import MyDiv from "../../MyDiv";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1Styled = styled.h1`
  color: #3b3b3b;
`;

export default class GeradorMegaSenaHeader extends Component {
  render() {
    return (
      <header>
        <MyDiv justifyContent="center">
          {<div>
            <Link to="/"> <H1Styled>Mega Sena</H1Styled></Link>
          </div>}
        </MyDiv>
      </header>
    );
  }
}
