import React, { Component } from "react";
import api from "../../services/api";

export default class Pokemon extends Component {
  state = {
    pokemon: {}
  };
  async componentDidMount() {
    const { url } = this.props.match.params;

    const response = await api.get(`/pokemon/${url}`);

    this.setState({ pokemon: response.data });
  }
  render() {
    const { pokemon } = this.state;
    return (
      <div className="pokemon-info">
        <h1>{pokemon.name}</h1>
        <p>
          URL: <a href={pokemon.url} target="_blank">{pokemon.url}</a>
        </p>
      </div>
    );
  }
}
