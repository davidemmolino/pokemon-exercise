import React from 'react'
import Flexbox from 'flexbox-react';
import { ListItemDisplay, ListItemTitle } from './ListView/styled';

const listStyle = {
	listStyleType: "none"
};

const PokeBag = ({ bag, removeFromBag }) => {
  return (
    <ul aria-label="pokemon-bag">
			<Flexbox flexDirection="row">
				{bag.map(entry => (
						<li style={listStyle} aria-label="pokemon-bag-card" key={entry.name}>
						<ListItemDisplay onClick={() => removeFromBag(entry)} id={entry.name} aria-label={`${entry.name}-card-bag`}>
							<Flexbox key={entry.name} flexDirection="column">
								<ListItemTitle>{entry.name}</ListItemTitle>
								<img src={entry.image} />
							</Flexbox>
						</ListItemDisplay>
						</li>
				))}
			</Flexbox>
    </ul>
  )
}

export default PokeBag;
