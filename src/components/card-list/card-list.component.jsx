import React from 'react';
import styled from 'styled-components';

import { Card } from '../card/card.component';

const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const CardList = (props) => {
    return(<Container>{
        props.monsters.map(monster => <Card key={monster.id} monster={monster}/>) }
        </Container>);
}