<template>
  <div>
    <ApartmentCard/>
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

    store.dispatch('updateApartments')

    return {
      apartments
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
