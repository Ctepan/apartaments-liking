<template>
  <div>
    <ApartmentCard/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import ApartmentCard from './components/ApartmentCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    ApartmentCard
  },
  setup() {
    const store = useStore()
    const apartments = computed(() => store.state.apartments)

    store.dispatch('updateApartments')

    return {
      apartments
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
