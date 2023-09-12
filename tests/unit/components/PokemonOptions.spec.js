import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonOptions'
import {pokemons} from '../mocks/pokemons.mock'
describe('PokemonOptions Component', () => {
    let wrapper
    beforeEach(() => {
         wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemons
            }
        })
    })
    test('debe ded hacer match con el snapshopt', () => {
        /* console.log(wrapper.html()) */
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('pikachu') 
        expect(liTags[1].text()).toBe('ivysaur') 
        expect(liTags[2].text()).toBe('venusaur') 
        expect(liTags[3].text()).toBe('charmander') 
    })

    test('debe de emitir "selection con sus respectivos parametros al hacer click"', () => {
        const [li1,li2,li3,li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[0]).toEqual([2])
        expect(wrapper.emitted('selection')[0]).toEqual([3])
        expect(wrapper.emitted('selection')[0]).toEqual([4])




    })
    
})