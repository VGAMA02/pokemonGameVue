import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonApi