import React, { useState } from "react";
import "./Numero.scss";
import styled from "styled-components";

const NovoSpanNumero = styled.span`
  color: #aaa;
`;

export default function Numero(props) {
  let [flip, setFlip] = useState(false);
  let segundo;
  let contagem = 0;
  const tempoEsperaSegundo = 5;
  const velocidade = 10;

  let IntervalFlipNumeroAleatorio = () => {
    contagem = 0;
    segundo = (Math.random() * 1000);
    const interval = setInterval(() => {
      numerosAleatorio();

      if (ValidarParaInterval(interval)) return;

      funcSetFlip();
    }, segundo / velocidade);
  };

  let ValidarParaInterval = (interval) => {
    if (contagem >= tempoEsperaSegundo * velocidade) {
      clearInterval(interval);
      props.numero.Funcao(props.numero.Lista);
      return true;
    }

    contagem++;

    return false;
  };

  let funcSetFlip = () => {
    flip = !flip;
    setFlip(flip);
  };

  let numerosAleatorio = () => {
    let aleatorio = Math.floor(Math.random() * (59 + (props.numero.Index + 1)));

    if (aleatorio % 7) aleatorio += 7;
    if (aleatorio > 60)  aleatorio = 60;

    if (!props.numero.Lista.includes(aleatorio))
      props.numero.Lista.splice(props.numero.Index, 1, aleatorio);
  };

  return (
    <div className="scene">
      <div
        id={`scene_${props.numero.Numero + 1}`}
        onClick={(_) => IntervalFlipNumeroAleatorio()}
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
}
