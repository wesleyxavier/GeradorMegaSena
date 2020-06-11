import React, { Component } from 'react';
import "./Geradormegasena.scss";
import GeradorMegaSenaHeader from './header/GeradorMegaSenaHeader';
import GeradorMegaSenaMain from './main/GeradorMegaSenaMain';

export default class GeradorMegaSena extends Component {
    render() {
        return (
            <section className="gerador-mega-sena">
                <GeradorMegaSenaHeader />
                <GeradorMegaSenaMain />
            </section>
        )
    }
}
