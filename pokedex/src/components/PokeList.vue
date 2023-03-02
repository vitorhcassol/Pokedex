<template>
    <div id="list">
        <PokeCard v-for="(pokemon, key) in pokemons"
        :key="key"
        :url="pokemon.url"/>
    </div>
</template>

<script>

import PokeCard from './PokeCard.vue';

export default {
    props: [
        'pokemons'
    ],

    components: {
        PokeCard
    }
}

</script>

<style scoped>

#list {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-areas: 
        'L R'
        'L R'
    ;

    align-self: center;
    justify-self: center;
}

</style>