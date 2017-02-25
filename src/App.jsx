import React, { Component } from 'react';

import Info from './components/Info';
import List from './components/List';
import { getAllPokemon, getPokemonDetail } from './common/repository';

import './styles/App.css';

class App extends Component {
  state = {
    data: [],
    selectedData: null,
    page: 0,
    loading: false,
  }

  componentDidMount() {
    getAllPokemon().then(response => {
      const data = response.results;
      this.setState({ ...this.state, data });
    });
  }

  handleClick = (data) => {
    const id = parseInt(data.url.split('/')[6], 10);

    if (this.clickId) clearTimeout(this.clickId);

    this.setState({ ...this.state, loading: true });
    this.clickId = setTimeout(() => {
      getPokemonDetail(id).then(response => {
        const selectedData = response;
        this.setState({ ...this.state, selectedData, loading: false });
      });
    }, 1000);
  }

  handleScroll = (e) => {
    const el = e.target;
    const bottomPos = el.scrollHeight - window.innerHeight + 56;

    if (el.scrollTop === bottomPos) {
      const page = this.state.page + 1;

      getAllPokemon(page).then(response => {
        const data = this.state.data.concat(response.results);
        this.setState({ ...this.state, data, page });
      });
    }
  }

  render() {
    const { data, selectedData, loading } = this.state;
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
        </section>
      </div>
    );
  }
}

export default App;
