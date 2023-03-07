<template>
    <div
    v-if="img"
    class="evo-list">
        <div id="evo-card">
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
            name: ""
        }
    },

    computed: {
        url() {
            return "https://pokeapi.co/api/v2/pokemon/" + this.pokemon
        },
    },

    methods: {
        getInfo() {
            this.axios
            .get(this.url)
            .then((response) => {
                this.name = this.primeiraLetraMaiuscula(response.data.name);
                this.img = response.data.sprites.front_default;
            })
        },

        //Retorna uma string com a primeira letra maiúscula
        primeiraLetraMaiuscula(string) {
            return string[0].toUpperCase() + string.substring(1)
        }
    },

    watch: {
        pokemon: {
            handler(newPokemon) {
                this.getInfo()
            },
            immediate: true
        }
    }
}

</script>

<style scoped>

.evo-list {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 1.5rem;
}

#evo-card {
    display: flex;

    min-width: 7.5rem;
    min-height: 7.5rem;

    border-radius: 0.5rem;
    background-color: var(--secondary-color);

    border: 0.1rem solid var(--terciary-color);
}

</style>