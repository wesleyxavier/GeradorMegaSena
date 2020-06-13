import React, { Component } from "react";
import styled from "styled-components";
import Numero from "./Numero";

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

const MyButton = styled.button`
  border: none;
  background: #74b9ff;
  color: white;
  width: 50vw;
  height: 38px;
  border-radius: 10px;
`;

export default class GeradorMegaSenaMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [0, 1, 2, 3, 4, 5],
    };
  }

  newFunction = () => {
    let contagem = 0;
    this.setState({
      lista: [0, 1, 2, 3, 4, 5],
    });
    const interval = setInterval(() => {
      if (contagem > 6) {
        clearInterval(interval);
        return;
      }
      const lista = document.querySelectorAll(`.scene`)[contagem];
      if (lista) {
        const div = lista.children[0];
        if (div) div.click();
      }

      contagem++;
    }, 100);
  };

  render() {
    return (
      <main>
        <MyDiv>
          {this.state.lista.map((l, index, x) => {
            return (
              <Numero
                numero={{
                  Numero: l,
                  Index: index,
                  Lista: x,
                  Funcao: (resultado = []) => {
                    let res = resultado.sort().map((c) => {
                      if (Number(c) > 60) {
                        c = 60;
                      }
                      return c;
                    });
                    
                    this.setState({
                      lista: res,
                    });
                  },
                }}
                key={index}
              ></Numero>
            );
          })}
        </MyDiv>
        <MyDiv style={{ height: "auto" }} justifyContent="center">
          <MyButton onClick={(_) => this.newFunction()}>Boa "Sorte"</MyButton>
        </MyDiv>
      </main>
    );
  }
}
