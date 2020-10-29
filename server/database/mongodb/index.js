import mongoose from 'mongoose';
import Pokemon from './schema/pokemon.model';

const databaseUrl = 'mongodb://localhost:27017/pokemon';

export const connectDatabase = () => {
    return mongoose.connect(databaseUrl);
};

const model = { Pokemon };

export default model;