import React, {Component} from 'react';
import './square.css';

const Square = props => (
    <section id= {props.id} className="tc pa3 hvr-float-shadow animated zoomInUp" value={props.id} onClick={()=> props.clickedPrincess(props.id)}>
    <article className="w4 pa2">
    <img src={props.image} className="db" alt="princess"/>
    </article>
    </section>
)
export default Square;


