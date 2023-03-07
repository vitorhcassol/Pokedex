<template>
    <EvoCard
    :pokemon="evolutionArray"
    ></EvoCard>
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
            this.evolutionArray = this.evolutionChainObj.species.name;
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