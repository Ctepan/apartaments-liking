<template>
  <div class="person-link">
    <img
      class="person-link__icon"
      src="@/assets/icons/user-circle.svg"
      alt=""
    >
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
     color: currentColor;
     height: 24px;
     width: 24px;
     margin-right: 8px;
   }
}
</style>
