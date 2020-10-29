import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pokemonSchema = Schema({
    name: { type: String, unique: true, required: true },
    url: { type: String },
    image: { type: String, unique: true, required: true }
});

const Pokemon = mongoose.model('pokemon', pokemonSchema, 'Pokemon');
export default Pokemon;