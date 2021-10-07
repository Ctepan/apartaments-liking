<template>
  <div>
    <ApartmentCard
      v-for="apartment in apartments"
      :key="apartment.id"
      :id="apartment.id"
      :liked="isLiked(apartment.id)"
      :title="apartment.title"
      :info="apartment.info"
      :seller="apartment.seller"
      @like:toggle="handleApartmentLikeToggle"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import ApartmentCard from '@/components/ApartmentCard.vue'
import { IAddress, IPerson, IApartment } from '@/core/entities'

export default defineComponent({
  name: 'App',
  components: {
    ApartmentCard
  },
  setup() {
    const store = useStore()
    const apartmentsData = computed(() => store.state.apartments)
    const liked = computed(() => store.state.likedApartments)

    store.dispatch('updateApartments')

    const apartments = computed(() => apartmentsData.value.map(x => ({
      id: x.id,
      title: x.attributes.title,
      seller: getFullName(x.relationships),
      info: [getFullAddress(x.attributes.address), getFullArea(x), getRoomsInfo(x)]
    })))

    function getFullName(person: IPerson) {
      return `${person.attributes.last_name} ${person.attributes.first_name} ${person.attributes.middle_name}`
    }

    function getFullAddress(address: IAddress) {
      return `${address.city} ${address.street}, ${address.house}к${address.room}`
    }

    function getFullArea(apartment: IApartment) {
      return `${apartment.attributes.area} ${apartment.attributes.unit}`
    }

    function getRoomsInfo(apartment: IApartment) {
      return `К-во комнат: ${apartment.attributes.rooms}`
    }

    function isLiked(id: number) {
      return liked.value.includes(id)
    }

    function handleApartmentLikeToggle(id: number) {
      store.dispatch('toggleApartmentLike', id)
    }

    return {
      apartments,
      isLiked,
      handleApartmentLikeToggle
    }
  }
})
</script>

<style lang="scss">
#app {
  background: #777;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
