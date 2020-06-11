import React, { Component } from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;
  height: 100%;
  div {
    margin: auto;
    height: 100px;
    width: 100px;
    box-shadow: 0 1rem 1rem rgba(44, 55, 66, 0.15);
  }
`;
export default class GeradorMegaSenaMain extends Component {
  render() {
    return (
      <main>
          <div>
              
          </div>
        <MyDiv>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </MyDiv>
      </main>
    );
  }
}
