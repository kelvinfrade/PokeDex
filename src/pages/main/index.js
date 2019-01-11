import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";
export default class Main extends Component {
  //estado (obg) para armazenar informações da API
  state = {
    pokemon: [],
    pokemonsInfo: {},
    page: 1
  };
  //Metodo executado assim que o componente é exibido em tela
  componentDidMount() {
    this.loadPokemons();
  }
  // Função nossa temos que usuar o arroy function ele não sobrescreve o valor do this.
  //promisses e assync e await
  loadPokemons = async (page = 1) => {
    const response = await api.get(`/pokemon?page=${page}`);
    const { results, ...pokemonsInfo } = response.data;
    this.setState({ pokemon: results, pokemonsInfo, page });
    //console.log(response.data.results);
  };
  prevPage = () => {
    const { page, pokemonsInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadPokemons(pageNumber);
  };

  nextPage = () => {
    const { page, pokemonsInfo } = this.state;

    if (page === pokemonsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadPokemons(pageNumber);
  };

  render() {
    //desistruturação
    const { pokemon } = this.state;
    //<h1>Contagem de Pokemons: {pokemon.length}</h1>;
    return (
      <div className="pokemons-list">
        {pokemon.map(pokemons => (
          //<h2 key={pokemons.url}>{pokemons.name}</h2>
          <article key={pokemons.url}>
            <strong>{pokemons.name}</strong>
            <p>{pokemons.url}</p>
           
           
            <Link to={`/pokemons/${pokemons.url}`}>Acessar</Link>

          </article>
        ))}
        <div className="actions">
          <button disabled="{page === 1}" onClick={this.prevPage}>
            Anterior
          </button>
          <button
            disabled="{page === pokemonsInfo.pages}"
            onClick={this.nextPage}
          >
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
