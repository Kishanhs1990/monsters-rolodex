import React, { Component } from "react";
import styled from 'styled-components';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

const AppContainer = styled.div`
    text-align: center;  
`;

const Heading = styled.h1`
font-family: 'Bigelow Rules';
font-size: 72px;
color: #0ccac4;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };
  }
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users})) 
    }
    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    } 

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <AppContainer>
        <Heading> Monsters Rolodex</Heading>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </AppContainer>
    );
  }
}

export default App;
