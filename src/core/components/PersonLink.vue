<template>
  <div class="person-link">
    <svg class="person-link__icon" width="24" height="24" fill="currentColor">
      <use width="24" height="24" href="@/assets/icons/person-circle.svg#icon" />
    </svg>
    <span class="person-link__name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PersonLink',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.person-link {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  color: #5085EA;
  cursor: pointer;

  &:hover &__name {
    text-decoration: underline;
  }

  &__icon {
     margin-right: 8px;
   }
}
</style>
