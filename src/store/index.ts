import DadJokesService from '@/services/dadjokesservice';
import { createStore } from 'vuex';
import { RANDOM_DAD_JOKE } from './getter-types';
import { SET_RANDOM_DAD_JOKE } from './mutation-types';
import { GET_RANDOM_DAD_JOKE } from './action-types';

export default createStore({
  state: {
    randomDadJoke: '',
  },
  mutations: {
    [SET_RANDOM_DAD_JOKE](state, payload) {
      state.randomDadJoke = payload;
    },
  },
  actions: {
    [GET_RANDOM_DAD_JOKE]({ commit }) {
      DadJokesService.getRandomDadJoke()
        .then((res) => {
          commit('SET_RANDOM_DAD_JOKE', res.data.joke);
        });
    },
  },
  getters: {
    [RANDOM_DAD_JOKE]: (state) => state.randomDadJoke,
  },
  modules: {
  },
});
