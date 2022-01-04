import DadJokesService from '@/services/dadjokesservice';
import { createStore } from 'vuex';

export default createStore({
  state: {
    randomDadJoke: '',
  },
  mutations: {
    SET_RANDOM_DAD_JOKE(state, payload) {
      state.randomDadJoke = payload;
    },
  },
  actions: {
    GET_RANDOM_DAD_JOKE({ commit }) {
      DadJokesService.getRandomDadJoke()
        .then((res) => {
          commit('SET_RANDOM_DAD_JOKE', res.data.joke);
        });
    },
  },
  getters: {
    RANDOM_DAD_JOKE: (state) => state.randomDadJoke,
  },
  modules: {
  },
});
