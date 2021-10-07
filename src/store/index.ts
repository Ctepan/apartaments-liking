import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IApartment } from '@/core/entities'

interface State {
  apartments: IApartment[]
  likedApartments: number[]
}

export default createStore<State>({
  state: {
    apartments: [],
    likedApartments: []
  } as State,
  mutations: {
    setApartments(state, payload: IApartment[]) {
      state.apartments = payload
    },
    addLikedApartment(state, payload: number) {
      state.likedApartments.push(payload)
    },
    removeLikedApartment(state, payload: number) {
      const index = state.likedApartments.indexOf(payload)

      if (index === -1) {
        return
      }

      state.likedApartments.splice(index, 1)
    }
  },
  actions: {
    async updateApartments({ commit }) {
      const apartments = await fetch('/entities.json').then(x => x.json()).then(x => x.response)
      commit('setApartments', apartments)
    },
    likeApartment({ commit }, apartmentId: number) {
      commit('addLikedApartment', apartmentId)
    },
    unlikeApartment({ commit }, apartmentId: number) {
      commit('removeLikedApartment', apartmentId)
    },
    toggleApartmentLike({ dispatch, state }, apartmentId: number) {
      if (state.likedApartments.includes(apartmentId)) {
        dispatch('unlikeApartment', apartmentId)

        return
      }

      dispatch('likeApartment', apartmentId)
    }
  }
})

export const key: InjectionKey<Store<State>> = Symbol('store')

export function useStore() {
  return baseUseStore(key)
}
