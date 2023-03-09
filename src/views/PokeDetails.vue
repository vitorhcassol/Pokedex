<template>
    <div id="pokemon">
        <!-- Card superior com informações básicas -->
        <section class="blue-header">
            <div class="around-inside-header">
                <div class="col-a">
                    <!-- Nome e botão de retornar -->
                    <div id="name">
                        <!-- Nome do Pokemon -->
                        <span> {{ name }} </span>
                    </div>
                    <!-- Medidas -->
                    <div id="measurements">
                        <span> HT {{ height }} `</span>
                        <span> WT {{ weight }} lbs</span>
                    </div>
                </div>
                <div class="col-b">
                    <img :src="img" :alt="name">
                    <span> #{{ idFormatado }} </span>
                </div>
            </div>
        </section>
        <!-- Tipos do pokémon -->
        <section class="wrapper">
            <span>TYPE</span>
            <div class="types">
                <Type
                v-for="(type, key) in types" :key="key"
                :class="'tagDetail'"
                :type="type"
                />
            </div>
        </section>
        <!-- Sessão com informações mais aprofundadas/stats -->
        <section class="wrapper">
            <span>STATS</span>
            <div class="frame">
                <div class="column">
                    <span> HP </span> 
                    <span> ATK </span> 
                    <span> DEF </span> 
                </div>
                <div class="columnValues">
                    <span>{{ this.hp }}</span>
                    <span>{{ this.attack }}</span>
                    <div>{{ this.defense }}</div>
                </div>
                <div class="division">
                    <svg height="100" width="5">
                        <line x1="0" y1="0" x2="0" y2="100" style="stroke:var(--black);stroke-width:3" />
                    </svg>
                </div>
                <div class="column">
                    <span> SPC ATK </span> 
                    <span> SPC DEF </span> 
                    <span> SPEED </span> 
                </div>
                <div class="columnValues">
                    <span>{{ this.specialAttack }}</span>
                    <span>{{ this.specialDefense }}</span>
                    <div>{{ this.speed }}</div>
                </div>
            </div>
        </section>
        <!-- Cadeia de evolução do pokemon -->
        <section class="wrapper">
            <span>EVOLUTION CHAIN</span>
            <PokeChainList
            :url="this.species">
            </PokeChainList>
        </section>
    </div>
</template>

<script>

import Type from '../components/Type.vue'
import PokeChainList from '../components/PokeChainList.vue'

export default {

    components: {
        Type,
        PokeChainList
    },

    data() {
        return {
            name: '', 
            height: '',
            weight: '',
            img: '',
            rootId: '', 
            rootTypes: [],
            hp: undefined,
            attack: undefined,
            defense: undefined,
            specialAttack: undefined,
            specialDefense: undefined,
            speed: undefined,
            species: undefined
        }
    },

    computed: {
        types() {
            return this.rootTypes.map(x => this.primeiraLetraMaiuscula(x.type.name))
        },

        idFormatado() {
            return (this.rootId).toLocaleString('en-US', {
                minimumIntegerDigits: 3, 
                useGrouping: false
            })
        }
    },

    methods: {
        //Busca de acordo com a URL passada pelo router
        //As informações necessárias para a construção
        //da tela
        getBasics() {
            this.axios
            .get( this.$route.params.url )
            .then((response) => {
                this.name = this.primeiraLetraMaiuscula(response.data.name);
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

        //Retorna uma string com a primeira letra maiúscula
        primeiraLetraMaiuscula(string) {
            return string[0].toUpperCase() + string.substring(1)
        }
    },

    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getBasics();
            }, { immediate: true}
        )
    }
}

</script>

<style scoped>

#pokemon {
    height: 100vh;

    color: var(--white);
    font-family: var(--pixel-font);
    font-size: 2.4rem;

    background-color: var(--primary-color);
}

.blue-header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 28rem;

    padding-block: 3rem 4.5rem;

    margin-bottom: 3rem;

    border-radius: 0rem 0rem 2rem 2rem;

    background-color: var(--secondary-color);
}

.around-inside-header {
    display: grid;
    grid-template-areas: 
        'L R'
    ;

    width: 80vw;
    max-width: 819.2px;
}

.col-a {
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    padding-top: 4.5rem;
}

#name {
    display: flex;
    flex-direction: column;

    gap: 3.6rem;
}

#measurements {
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
}

.col-b {
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    align-items: center;

    gap: 1.5rem;
}

.col-b img{
    width: 23vw;

    min-width: fit-content;
    max-width: 18rem;
}

.wrapper {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 1.5rem;
    
    margin-bottom: 3rem;
}

.types {
    display: flex;
    
    gap: 1.5rem;
}

.frame {
    display: grid;
    grid-template-areas: 
        'C C C C C'
    ;
    grid-template-columns: 10% 35% 10% 35% 10%;

    padding: 3rem 1.5rem;

    width: 80vw;

    max-width: 819.2px;

    color: var(--terciary-color);

    border: 0.5rem solid var(--terciary-color);
    background-color: var(--white);
}

.column,
.columnValues {
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
}

.columnValues {
    align-items: end;
}

.division {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>