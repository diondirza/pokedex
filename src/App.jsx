import React, { Component } from 'react';

import List from './components/List';
import Screen from './components/Screen';
import {getAllPokemon} from './common/repository';

import './styles/App.css';

class App extends Component {
  state = {
    data: null,
    selectedData: null,
  }

  componentDidMount() {
    getAllPokemon().then(response => {
      const data = response.results;
      this.setState({ data });
    })
  }

  handleClick = (data) => {
    const selectedData = data;
    this.setState({ ...this.state, selectedData });
  }

  render() {
    const { data, selectedData } = this.state;
    return (
      <div className="pokedex">
        <div className="pokedex-header">
          <h1>Pokedex</h1>
        </div>
        <section className="pokedex-body">
          <section className="pokedex-detail">
            <Screen data={selectedData} />
          </section>
          <List data={data} onClick={this.handleClick} />
        </section>
      </div>
    );
  }
}

export default App;
