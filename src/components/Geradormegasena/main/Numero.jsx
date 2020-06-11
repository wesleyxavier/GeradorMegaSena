import React, { useState } from "react";
import "./Numero.scss";
import styled from "styled-components";

const NovoSpanNumero = styled.span`
  color: #aaa;
`;

export default function Numero(props) {
  let [flip, setFlip] = useState(false);

  const tempoEsperaSegundo = 5;
  const segundo = 1000;
  const velocidade = 10;

  let newFunction = () => {
    let contagem = 0;
    const interval = setInterval(() => {
      let aleatorio = Math.floor(
        Math.random() * (60 + (props.numero.Index + 1))
      );
      if (aleatorio % 7) {
        aleatorio += 7;
      }
      if (aleatorio > 60) {
        aleatorio = 60;
      }
      if (!props.numero.Lista.includes(aleatorio)) {
        props.numero.Lista.splice(props.numero.Index, 1, aleatorio);
      }

      if (contagem >= tempoEsperaSegundo * velocidade) {
        clearInterval(interval);
        props.numero.Funcao(props.numero.Lista);
        return;
      }
      funcSetFlip();
      console.log(flip);
      console.log(contagem);
      contagem++;
    }, segundo / velocidade);
  };

  return (
    <div className="scene">
      <div
        id={`scene_${props.numero.Numero + 1}`}
        onClick={(_) => newFunction()}
        style={{ transition: `transform ${segundo / velocidade}ms` }}
        className={`card ${flip ? "is-flipped" : ""}`}
      >
        <div className="card__face card__face--front">
          <NovoSpanNumero>{props.numero.Numero + 1}</NovoSpanNumero>
        </div>
        <div className="card__face card__face--back">Maoie</div>
      </div>
    </div>
  );

  function funcSetFlip() {
    flip = !flip;
    setFlip(flip);
  }
}
