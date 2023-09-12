//import { shallowMount } from '@vue/test-utils'
import pokemonApi from '@/api/pokemonApi'
describe('pokemonApi', () => {
    test('axios debe estar configurado', () => {
        console.log(pokemonApi);
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })

})
