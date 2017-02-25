import React, { Component } from 'react';

import Info from './components/Info';
import List from './components/List';
import { getAllPokemon, getPokemonDetail } from './common/repository';

import './styles/App.css';

class App extends Component {
  state = {
    data: [],
    selectedData: null,
  }

  componentDidMount() {
    getAllPokemon().then(response => {
      const data = response.results;
      this.setState({ data });
    })
  }

  handleClick = (data) => {
    const id = parseInt(data.url.split('/')[6], 10);

    getPokemonDetail(id).then(response => {
      const selectedData = response;
      console.log(selectedData);
      this.setState({ ...this.state, selectedData });
    });
  }

  render() {
    const { data, selectedData } = this.state;
    return (
      <div className="pokedex">
        <div className="pokedex-header">
          <h1>Pokedex</h1>
        </div>
        <section className="pokedex-body">
          <Info data={selectedData} />
          <List data={data} onClick={this.handleClick} />
        </section>
      </div>
    );
  }
}

export default App;
