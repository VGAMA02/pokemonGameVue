<template>

    <h1 v-if="!pokemon"> </h1>
    <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <!--IMG -->
        <PokemonPictureVue :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <!-- Opciones -->
        <PokemonOptionsVue :pokemons="pokemonArr" @selection="checkAnswer"/>

        <div v-if="showAnswer">
            <h2>{{message}}</h2>
            <button @click="newGame">Nuevo juego</button>
        </div>


    </div>

</template>

<script>
import PokemonOptionsVue from '@/components/PokemonOptions.vue'
import PokemonPictureVue from '@/components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
/* console.log(getPokemonOptions()); */
export default {
  components: {
    PokemonOptionsVue,
    PokemonPictureVue
  },
  data(){
    return{
        pokemonArr:[],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
    }
  },
  methods:{
    async mixPokemonArray(){
        this.pokemonArr = await getPokemonOptions()
        const rndInt = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectId){
        this.showPokemon = true
        this.showAnswer = true
        if(selectId === this.pokemon.id){
            this.message = `Correcto, ${this.pokemon.name}`
        }else{
            this.message = `ups el pokemon es, ${this.pokemon.name}`
        }
    },
    newGame(){
        this.showPokemon = false
        this.showAnswer = false
        this.pokemonArr = []
        this.mixPokemonArray()
    }
  },
  mounted(){
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>