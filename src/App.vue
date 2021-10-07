<template>
  <div class="apartment-list">
    <ApartmentCard
      v-for="apartment in apartments"
      class="apartment-list__item"
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.apartment-list {
  margin: 0 auto;
  padding: 0 8px;
  width: 100%;
  max-width: 960px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }

  &__item {
    box-shadow: 0 1px 2px black;
  }
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
