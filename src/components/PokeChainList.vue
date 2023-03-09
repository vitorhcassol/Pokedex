<template>
    <div 
    id="evo-list">
        <EvoCard
        v-for="(pokemon, index) in evolutionArray"
        :key="index"
        :pokemon="pokemon"
        ></EvoCard>
    </div>
</template>

<script>

import EvoCard from '../components/EvoCard.vue'

export default {
    components: {
        EvoCard
    },

    props: [
        'url'
    ],

    data() {
        return {
            evolutionChainUrl: undefined,
            evolutionChainObj: undefined,
            evolutionArray: []
        }
    },

    methods: {
        //Retorna a url da evolution chain a partir do prop
        getEvolutionChainUrl(){
            this.axios
            .get( this.url )
            .then((response) => {
                this.evolutionChainUrl = response.data.evolution_chain.url
            })
        },

        //Retorna o objeto com a evolution chain
        getEvolutionChainObj() {
            this.axios
            .get( this.evolutionChainUrl )
            .then((response) => {
                this.evolutionChainObj = response.data.chain
            })
        },

        //Retorna um array com o link das evoluções
        prepareEvoArray() {
            //this.evolutionArray = this.evolutionChainObj.species.name;

            let evoData = this.evolutionChainObj;

            do {
                this.evolutionArray.push(evoData.species.name);

                evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        }
    },

    watch: {
        url(newUrl) {
            this.getEvolutionChainUrl()
        },

        evolutionChainUrl(newEvolutionChainUrl) {
            this.getEvolutionChainObj()
        },

        evolutionChainObj(newEvolutionChainObj) {
            this.prepareEvoArray()
        }
    }
}

</script>

<style>

#evo-list {
    display: flex;

    width: 80vw;
    max-width: 819.2px;

    justify-content: space-around;

    gap: 1.5rem;
}

</style>