import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    text-align: center;
`
  
//   .card-container:hover {
//     transform: scale(1.05);
//   }
  

export const Card = props => {
    return(
        <CardContainer>
            <img alt='monsters' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </CardContainer>
    );
}