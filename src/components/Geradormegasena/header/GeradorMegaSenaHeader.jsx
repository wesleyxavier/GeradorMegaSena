import React, { Component } from "react";
import styled from "styled-components";

const MyDiv = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    h1 {
        color: #3b3b3b;
    }
`;

export default class GeradorMegaSenaHeader extends Component {
  render() {
    return (
      <header>
        <MyDiv>
          <div>
            <h1>Mega Sena</h1>
          </div>
        </MyDiv>
      </header>
    );
  }
}
