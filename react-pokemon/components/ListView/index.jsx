import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import PokemonList from '../PokemonList';
import PokeBag from '../PokeBag';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      bag: [],
      pokemonBagIds: [],
      offset: 0,
      limit: 20,
      searchString: ''
    };

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.debouncedSearch = this.debouncedSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
    this.fetchFromBag = this.fetchFromBag.bind(this);
  }

  componentDidMount() {
    // this.fetchPokemon();
    this.fetchFromBag();
  }

  async fetchPokemon() {
    // your code here
    try {
      //create query params
      const query = { 
        'search': this.state.searchString,
        // 'limit': this.state.limit,
        // 'offset': this.offset
      };
      const myUrl = window.location.href;
      const url = new URL(`${myUrl}pokemon`);
      for (let key in query) {
        url.searchParams.append(key, query[key]);
      }

      const res = await fetch(url);
      const data = await res.json();

      this.setState(prevState => ({
        ...prevState,
        pokemon: [...data]
      }));
    } catch (err) {
      console.log(err);
    }
  }
  
  debouncedSearch(func, delay) {
    // your code here
    let timer; 
    return (...args) => {
      const delayedFunction = (e) => {
        clearTimeout(timer);
        func(...args, delay);
      }
      clearTimeout(timer);
      timer = setTimeout(delayedFunction, delay)
    }
  }

  onChange(e) {
    // your code here
    //add to local state
    this.setState(prevState => ({
      ...prevState,
      searchString: e
    }));
    this.fetchPokemon()
  }

  fetchFromBag() {
    const bag = {...localStorage};
    for (const pokemon in bag) {
      this.addToBag(JSON.parse(bag[pokemon]))
    }
  };

  addToBag(pokemon) {
    //add to local state
    const { pokemonBagIds } = this.state;
    //avoid duplicate pokemon in bag
    if (!(pokemonBagIds.includes(pokemon._id))) {
      this.setState(prevState => ({
        ...prevState,
        bag: [...prevState.bag, pokemon],
        pokemonBagIds: [...prevState.pokemonBagIds, pokemon._id]
      }))
      //add to localStorage
      localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
    }
  };

  removeFromBag(pokemon) {
    //remove from local state
    const { name, _id } = pokemon;
    this.setState(prevState => ({
      ...prevState, 
      bag: [...prevState.bag.filter(currPokemon => currPokemon.name != name)],
      pokemonBagIds: [...prevState.pokemonBagIds.filter(pokemonId => pokemonId != _id)]
    }));
    //remove from local storage
    localStorage.removeItem(name);
  };

  render() {
    const { pokemon, bag, searchString, pokemonBagIds } = this.state;
    //might have used useCallback or useMemo passing down props, depending on dataset or calculation
    return (
      <Flexbox flexDirection='column' alignItems='center' width='100vw'>
        <PokeBag bag={bag} removeFromBag={this.removeFromBag}/>
        <Flexbox width='250px' marginTop='13px'>
          <input value={searchString} onChange={event => this.onChange(event.target.value)} placeholder="Search for a Pokémon!"/>
        </Flexbox>
        <Flexbox marginTop='15px' padding='0px 10vw'>
          <ul>
            <Flexbox flexWrap='wrap'>
              <PokemonList pokemon={pokemon} addToBag={this.addToBag} pokemonBagIds={pokemonBagIds}/>
            </Flexbox>
          </ul>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default ListView;
// onChange={this.debouncedSearch(this.onChange, 250)}
