import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { ListItemDisplay, ListItemTitle } from './styled';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      offset: 0,
      limit: 20
    };

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.debouncedSearch = this.debouncedSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  fetchPokemon() {
    // your code here
  }

  debouncedSearch() {
    // your code here
  }

  onChange() {
    // your code here
  }

  render() {
    const { pokemon } = this.state;
    return (
      <Flexbox flexDirection='column' alignItems='center' width='100vw'>
        <Flexbox width='250px' marginTop='13px'>
          testing
          <input onChange={this.debouncedSearch(this.onChange, 250)} placeholder="Search for a Pokémon!"/>
        </Flexbox>
        <Flexbox marginTop='15px' padding='0px 10vw'>
          <Flexbox flexWrap='wrap'>
          {pokemon.map(entry => {
                return (
                  <ListItemDisplay>
                    <Flexbox key={entry.name} flexDirection='column'>
                      <ListItemTitle>{entry.name}</ListItemTitle>
                      <img src={entry.image} />
                    </Flexbox>
                  </ListItemDisplay>
                )
              })
            }
          </Flexbox>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default ListView;
