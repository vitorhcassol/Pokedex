<template>
    <div class="card">

        <!-- Section das informações à esquerda-->
        <section class="col-a">
            <span> {{ name }} </span>
            <div>
                <Type
                v-for="(type, key) in types" :key="key"
                :type="type"/>
            </div>
        </section>

        <section class="col-c">
            <span> #{{ idFormatado }} </span>
        </section>

        <!-- Section da Imagem à direita -->
        <section class="col-b">
            <img :src="img" :alt="name">
        </section>

    </div>
</template>

<script>

import Type from './Type.vue'

export default {
    props: {
        url: String
    },

    components: {
        Type
    },

    data() {
        return {
            info: "",
            name: "",
            img: "",
            id: "",
            rootTypes: [],
        }
    },

    methods: {
        //Busca as informações que serão usadas na composição do card a partir da url passada
        getInfo() {
            this.axios
            .get( this.url )
            .then((response) => {
                this.info = response.data
                this.name = this.primeiraLetraMaiuscula(response.data.name)
                this.id = response.data.id
                this.rootTypes = response.data.types
                this.img = response.data.sprites.front_default
            })
        },

        //Retorna uma string com a primeira letra maiúscula
        primeiraLetraMaiuscula(string) {
            return string[0].toUpperCase() + string.substring(1)
        }
    },

    computed: {
        types() {
            return this.rootTypes.map(x => this.primeiraLetraMaiuscula(x.type.name))
        },

        //Retorna o id formatado no estilo do Figma
        idFormatado(id) {
            return (this.id).toLocaleString('en-US', {
                minimumIntegerDigits: 3, 
                useGrouping: false
            })
        }
    },

    watch: {
        url: {
            handler() {
                this.getInfo()
            },
            immediate: true
        }
    }
}

</script>

<style scoped>
.card {
    display: grid;
    grid-template-areas: 
        'A B'
        'C B'
    ;

    justify-self: center;
    align-self: center;

    grid-template-columns: 40% 1fr;
    grid-template-rows: 50% 1fr;

    width: 15rem;
    height: 10rem;

    border-radius: 1.5rem;

    background-color: var(--secondary-color);
    color:var(--white);

    box-shadow: 0.4rem 0.4rem var(--box-shadow-color);

    font-family: var(--pixel-font);
    font-size: 1.6rem;
}

.col-a {
    grid-area: A;

    display:flex;
    flex-direction: column;

    gap: 0.8rem;

    padding: 1rem 0rem 1rem 1rem;
}

.col-b {
    grid-area: B;

    display: flex;
    align-items: flex-end;
    justify-content: end;

}

.col-c {
    grid-area: C;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 0rem 0rem 1rem 1rem;
}

.col-a div {
    display: grid;
    grid-gap: 0.4rem;
}

.col-b img {
    width: 9rem;
}

@media only screen and (min-width: 426px) {
    .card {
        width: 35.5vw;
        height: 23.8vw;

        max-width: 23rem;
        max-height: 13rem;
    }

    .col-b img {
        width: fit-content;
    }
}

@media only screen and (min-width: 900px) {
    .card {
        font-size: 2.1rem;

        width: 25.5vw;
        height: 13.8vw;

        max-width: 27rem;
        max-height: 17rem;
    }

    .col-a {
        gap: 1.1rem;
    }

    .col-a div {
        grid-gap: 0.8rem;
    }
}

@media only screen and (min-width: 1441px) {
    .card {
        font-size: 2.4rem;

        width: 15.5vw;
        height: 10.8vw;

        max-width: 35rem;
        max-height: 25rem;
    }

    .col-a {
        gap: 2rem;
    }

    .col-a div {
        grid-gap: 1.6rem;
    }

    .col-b img {
        width: 7vw;

        max-width: 16rem;
    }
}

</style>