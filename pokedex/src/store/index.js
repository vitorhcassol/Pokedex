import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

    state: {
        pokePage: []
    },

    mutations: {
        loadPokemons(state, pokePage) {
            state.pokePage = pokePage
        }
    },

    actions: {
        loadPokemons({ commit }, url) {
            axios
            .get(url)
            .then((response) => {
                commit('loadPokemons', response.data)
            })
        }
    },

    modules: {

    }

})