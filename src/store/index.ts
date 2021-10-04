import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IApartment } from '@/core/entities'

interface State {
  apartments: IApartment[],
  likedApartments: number[]
}

export default createStore<State>({
  state: {
    apartments: [],
    likedApartments: []
  },
  mutations: {
    setApartments(state, payload: IApartment[]) {
      state.apartments = payload
    }
  },
  actions: {
    updateApartments: async function({ commit }) {
      const apartments = await fetch('/entities.json').then(x => x.json()).then(x => x.response)
      commit('setApartments', apartments)
    }
  }
})

export const key: InjectionKey<Store<State>> = Symbol('store')

export function useStore() {
  return baseUseStore(key)
}
