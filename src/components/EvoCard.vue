<template>
    <div
    v-if="img"
    @click="goToPokemonDetail(this.url)"
    class="evo-wrapper">
        <div class="evo-card">
            <img :src="img" :alt="pokemon">
        </div>
        <div> {{ name }} </div>
    </div>
</template>

<script>

export default {
    props: [
        'pokemon'
    ],

    data() {
        return {
            img: "",
            name: "",
            url: undefined
        }
    },

    methods: {
        //Retorna a url com o id do pokemon (evita erros no console de reading undefined)
        getUrl() {
            this.axios
            .get( "https://pokeapi.co/api/v2/pokemon/" + this.pokemon )
            .then((response) => {
                this.url = "https://pokeapi.co/api/v2/pokemon/" + response.data.id
            })
        },

        //Busca as informações que serão usadas na composição do card a partir da url passada
        getInfo(url) {
            this.axios
            .get( url )
            .then((response) => {
                this.name = this.primeiraLetraMaiuscula(response.data.name);
                this.img = response.data.sprites.front_default;
            })
        },

        //Retorna uma string com a primeira letra maiúscula
        primeiraLetraMaiuscula(string) {
            return string[0].toUpperCase() + string.substring(1)
        },

        //Encaminha para a tela de detalhes do pokemon
        goToPokemonDetail(url) {
            this.$router.push({name: 'Pokemon', params: {url: url}})
        }
    },

    watch: {
        pokemon: {
            handler(newPokemon) {
                if (newPokemon !== undefined) {
                    this.getUrl();
                }
            },
            immediate: true
        },

        url(newUrl) {
            this.getInfo(newUrl);
        } 
    }
}

</script>

<style scoped>

.evo-wrapper {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 1.5rem;

    cursor: pointer;
}

.evo-card {
    display: flex;
    
    min-width: 7.5rem;
    min-height: 7.5rem;

    border-radius: 0.5rem;
    background-color: var(--secondary-color);

    border: 0.1rem solid var(--terciary-color);
}

</style>