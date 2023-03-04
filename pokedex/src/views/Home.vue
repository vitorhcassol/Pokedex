<template>
    <div id="wrapper">
        <Header
        @reset-page="this.$store.dispatch('loadPokemons', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')"
        ></Header>
        <PokeList :pokemons="pokePage.results"/>
        <Footer
        :previousPageURL="pokePage.previous"
        :nextPageURL="pokePage.next"
        
        @backward="this.$store.dispatch('loadPokemons', pokePage.previous)"
        @forward="this.$store.dispatch('loadPokemons', pokePage.next)"
        ></Footer>
    </div>
</template>

<script>

import Header from '../components/Header.vue';
import PokeList from '../components/PokeList.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Pokemon',

    components: {
        Header,
        PokeList,
        Footer
    },

    computed: {
        pokePage () {
            return this.$store.state.pokePage;
        }
    },

    created() {
        this.$store.dispatch('loadPokemons', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    }
}

</script>

<style scoped>

#wrapper {
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
}

</style>