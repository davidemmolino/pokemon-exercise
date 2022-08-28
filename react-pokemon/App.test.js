import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './components/PokemonList';
import { act } from 'react-dom/test-utils';

//dummy data
const dummyData =  {
  pokemonData: [
    {
      "name": "mew",
      "url": "https://pokeapi.co/api/v2/pokemon/151/",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    }
  ],
  pokemonBagIds: ["123"]
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

//testing with just Jest, not too familiar and not able to debug too much because of time constraint
it('renders without crashing', () => {
  const { pokemonData, pokemonBagIds} = dummyData;
  act(() => {
    ReactDOM.createRoot(container).render(<PokemonList pokemonBagIds={pokemonBagIds} pokemon={pokemonData} />);
  })
});

//how I would do it with RTL, won't let me install RTL because of dependency versioning.
describe('testing add/remove pokemon from bag', () => {
  //test click functionality
  test('clicking on pokemon card should add/remove to/from bag', () => {
      const { pokemonData, pokemonBagIds} = dummyData;
      //render pokemon list
      render(<PokemonList pokemonBagIds={pokemonBagIds} pokemon={pokemonData} />);
      //get mew pokemon card
      const pokemonCard = screen.getByRole("li", { name: "pokemon-card"});
      expect(pokemonCard).toBeInDocument();
      // mew card has loaded to page and clicked on
      fireEvent.click(pokemonCard);
      //mew card now appears in bag
      const pokemonBagCard = screen.getByRole("li", { name: "pokemon-bag-card" });
      expect(pokemonBagCard).toBeInDocument();
      //click again to remove
      user.click(pokemonBagCard);
      expect(pokemonBagCard).not.toBeInDocument();
  });
});
