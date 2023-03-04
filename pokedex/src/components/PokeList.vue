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
        'C C'
    ;

    align-self: center;
    justify-self: center;
}

@media only screen and (min-width: 900px) {
    #list {
        grid-template-areas:
            'C C C'
        ;
    }
}

@media only screen and (min-width: 1441px) {
    #list {
        grid-template-areas:
            'C C C C C'
        ;
    }
}

</style>