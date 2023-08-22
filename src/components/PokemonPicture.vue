<template>
    <div class="pokemon-container">
        <center><img class="hidden-pokemon" :src="imgSrc" alt="POKEMON"></center>
        <center><img class="fade-in" v-if="showPokemon" :src="imgSrc" alt="POKEMON"></center>
    </div>
</template>

<script>
export default {
    props:{
        pokemonId:{
            type: Number,
            required: true
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed:{
        
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
     margin: auto;
    height: 200px;
    width: 200px;
    position: absolute;
   left: 45%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>