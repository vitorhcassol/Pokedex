<template>
  <div id="wrapper">
    <Header></Header>
    <PokeList :pokemons="pokemons"/>
    <Footer
    :previousPageURL="previousPage"
    :nextPageURL="nextPage"

    @backward="getUrl(previousPage)"
    @forward="getUrl(nextPage)"
    ></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import PokeList from './components/PokeList.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    PokeList,
    Footer
  },

  data() {
      return {
        pokemons: null,
        nextPage: null,
        previousPage: undefined
      }
  },

  methods: {
    //Busca a url com uma página de 10 pokemons
    getUrl(url) {
    this.axios
    .get(url)
    .then((response) => {
        this.pokemons = response.data.results;
        this.nextPage = response.data.next;
        this.previousPage = response.data.previous;
      })
    }
  },

  created() {
      this.getUrl('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }
}

</script>

<style>

/* IMPORTANDO A FONTE VT323 */
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

/* IMPORTANDO A FONTE CANTORA ONE */
@import url('https://fonts.googleapis.com/css2?family=Cantora+One&display=swap');

/* RESET DE ESTILIZAÇÃO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Paleta de cores */
  --primary-color: #DC092C;
  --secondary-color: #28ABFD;
  --terciary-color: #01261F;
  --white: #fff;
  --black: #222529;
  --light-terciary: hsla(169, 95%, 8%, 0.4);
  --light-black: hsl(214, 9%, 15%, 0.95);
  --box-shadow-color: hsla(169, 95%, 8%, 0.2);

  /* Fontes */
  --pixel-font: 'VT323', monospace;
  --logo-font: 'Cantora One', sans-serif;

  /* Padronização de tamanho */
  font-size: 62.5%; /* 1rem = 10px */

  
}

#wrapper {
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
}

</style>