<template>
  <div>
    <ApartmentCard
      :id="1"
      :liked="isLiked(1)"
      @like:toggle="handleApartmentLikeToggle"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import ApartmentCard from '@/components/ApartmentCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    ApartmentCard
  },
  setup() {
    const store = useStore()
    const apartments = computed(() => store.state.apartments)
    const liked = computed(() => store.state.likedApartments)

    store.dispatch('updateApartments')

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
