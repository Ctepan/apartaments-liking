<template>
  <div>
    <ApartmentCard/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ApartmentCard from './components/ApartmentCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    ApartmentCard
  },
  setup() {
    const apartments = ref([])

    onMounted(async () => { apartments.value = await fetch('/entities.json').then(x => x.json()) })

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
