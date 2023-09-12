import pokemonApi from "@/api/pokemonApi"
export const getPokemons = () => {
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map((_,index) => index + 1) //iniciar el array desde 1 y dejarlo preparado con 650 posiciones limpias
}

 const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4));
    return pokemons
}

export const getPokemonNames = async([a,b,c,d] = []) => {
    /* const resp = await pokemonApi.get(`/1`)
    console.log(resp.data.name);
    console.log(a,b,c,d); */
    const arrPromiseArr = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`)
    ]
    const [p1,p2,p3,p4] = await Promise.all(arrPromiseArr) //hace muchas peticiones simultaneamente
   /*  console.log(resps); */

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}

export default getPokemonOptions