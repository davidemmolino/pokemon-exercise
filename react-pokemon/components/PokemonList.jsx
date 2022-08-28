import React from 'react'
import { ListItemDisplay, ListItemTitle } from './ListView/styled';
import Flexbox from 'flexbox-react';
import LazyLoad from 'parm-react-lazyload';

const listStyle = {
	listStyleType: "none"
};

const Loading = () => (
	<div>
		<p>Loading...</p>
	</div>
);

const PokemonList = ({ pokemon, pokemonBagIds, addToBag }) => {
	//can just filter out pokemon that are in bag using filter by id
  return (
    <>
			{pokemon.map(entry => {
					return (
						<LazyLoad placeholder={<Loading />}>
							<li style={listStyle} aria-label="pokemon-card" key={entry.name}>
								<ListItemDisplay onClick={() => addToBag(entry)} id={entry.name} inBag={pokemonBagIds.includes(entry._id)}>
									<Flexbox flexDirection='column'>
										<ListItemTitle>{entry.name}</ListItemTitle>
										<img src={entry.image} alt={entry.name} />
									</Flexbox>
								</ListItemDisplay>
							</li>
						</LazyLoad>
					)
				})
			}
		</>
  )
}

export default PokemonList;
