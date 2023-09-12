
import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'
describe('Pokemon Component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
        
    })
    test('debe de hacer match con el snapsshot',() => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('debe de llamar mixPokemonArray ak montar',() => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage) // se monta de nuevo para que el spy funcione
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })
    test('debe de hacer match con el snapsshot cuando cargan los pokemons',() => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes pokemonPicture y pokemonOptions',() => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        
        expect(wrapper.find('pokemon-picture-vue-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-options-vue-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-picture-vue-stub').attributes('pokemonid')).toBe("1")
        expect(wrapper.find('pokemon-options-vue-stub').attributes('pokemons')).toBeTruthy()
    }) 

    test('pruebas con check answer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`)
    }) 
})