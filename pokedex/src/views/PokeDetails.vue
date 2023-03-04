<template>
    <div id="pokemon">
        <!-- Card superior com informações básicas -->
        <section class="basic-info">
            <div>
                <span> {{ rootName }} </span>
                <span> HT {{ height }} '</span>
                <span> WT {{ weight }} lbs</span>
            </div>
            <div>
                <img :src="img" :alt="rootName">
                <span> {{ rootId }} </span>
            </div>
        </section>
        <!-- Tipos do pokémon -->
        <section class="type">

        </section>
        <!-- Sessão com informações mais aprofundadas/stats -->
        <section class="stats">

        </section>
        <!-- Cadeia de evolução do pokemon -->
        <section class="evolutions">

        </section>
    </div>
</template>

<script>

export default {

    data() {
        return {
            rootName: undefined, //PRECISA SER FORMATADO
            height: undefined,
            weight: undefined,
            img: undefined,
            rootId: undefined, //PRECISA SER FORMATADO
            rootTypes: [], //PRECISA SER FILTRADO
            hp: undefined,
            attack: undefined,
            defense: undefined,
            specialAttack: undefined,
            specialDefense: undefined,
            speed: undefined,
            species: undefined,
            evolutionChain: undefined,
            evolutions: []
        }
    },

    methods: {
        //Busca de acordo com a URL passada pelo router
        //As informações necessárias para a construção
        //da tela
        getInfo() {
            this.getBasics();
        },

        getBasics() {
            this.axios
            .get( this.$route.params.url )
            .then((response) => {
                this.rootName = response.data.name;
                this.height = response.data.height;
                this.weight = response.data.weight;
                this.img = response.data.sprites.front_default;
                this.rootId = response.data.id;
                this.rootTypes = response.data.types;
                this.hp = response.data.stats[0].base_stat;
                this.attack = response.data.stats[1].base_stat;
                this.defense = response.data.stats[2].base_stat;
                this.specialAttack = response.data.stats[3].base_stat;
                this.specialDefense = response.data.stats[4].base_stat;
                this.speed = response.data.stats[5].base_stat;
                this.species = response.data.species.url;
            })
        },

        getEvolutionChain(url) {
            this.axios
            .get( url )
            .then((response) => {
                this.evolutionChain = response.data.evolution_chain.url;
            })
        },

        getEvolutions(url) {
            this.axios
            .get( url )
            .then((response) => {
                this.evolutions = response.data.chain.evolves_to;
            })
        }
    },

    watch: {
        species(newSpecies) {
            this.getEvolutionChain(newSpecies);
        },

        evolutionChain(newEvolutionChain) {
            this.getEvolutions(newEvolutionChain);
        }
    },

    created() {
        this.getInfo();
    }
}
</script>