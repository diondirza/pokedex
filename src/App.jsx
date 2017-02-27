import React, { Component } from 'react';

import Info from './components/Info';
import List from './components/List';
import Filter from './components/Filter';
import {
   getAllPokemon,
   getPokemonDetail,
   getAllPokemonTypes,
   getPokemonTypeDetail,
} from './common/repository';

import './styles/global.css';

class App extends Component {
  state = {
    page: 0,
    data: [],
    selectedData: null,
    loading: false,
    filters: [],
    selectedFilter: null,
  }

  componentDidMount() {
    const tasks = [ getAllPokemon(), getAllPokemonTypes() ];

    Promise.all(tasks).then(responses => {
      let data = responses[0] ? responses[0].results : [];
      let filters = responses[1] ? responses[1].results : [];

      this.setState({ ...this.state, data, filters });
    }).catch((err) => console.error(err));
  }

  handleClick = (data) => {
    const id = parseInt(data.url.split('/')[6], 10);

    if (this.clickId) clearTimeout(this.clickId);

    this.clickId = setTimeout(() => {
      this.setState({ ...this.state, loading: true });
      getPokemonDetail(id).then(response => {
        const selectedData = response;
        this.setState({ selectedData, loading: false });
      });
    }, 1000);
  }

  handleScroll = (e) => {
    const el = e.target;
    const bottomPos = el.scrollHeight - el.offsetHeight;

    if (!this.state.selectedFilter && el.scrollTop === bottomPos) {
      const page = this.state.page + 1;

      getAllPokemon(page).then(response => {
        const data = this.state.data.concat(response.results);
        this.setState({ ...this.state, data, page });
      });
    }
  }

  handleFilter = (data) => {
    this.setState({ ...this.state, selectedFilter: data });
    getPokemonTypeDetail(data.name).then(response => {
      const data = response.pokemon.map(o => o.pokemon);
      this.setState({ ...this.state, data, selectedData: null });
    });
  }

  handleClearFilter = () => {
    getAllPokemon().then(response => {
      const data = response.results;
      this.setState({ ...this.state, data, selectedData: null, selectedFilter: null });
    });
  }

  render() {
    const {
      data,
      selectedData,
      loading,
      filters,
    } = this.state;
    return (
      <div className="pokedex">
        <div className="pokedex-header">
          <h1>Pokedex</h1>
        </div>
        <section className="pokedex-body">
          <Info data={selectedData} loading={loading} />
          <List
            data={data}
            onClick={this.handleClick}
            onScroll={this.handleScroll}
          />
          <Filter
            data={filters}
            onClick={this.handleFilter}
            onClear={this.handleClearFilter}
          />
        </section>
      </div>
    );
  }
}

export default App;
