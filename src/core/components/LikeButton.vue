<template>
  <div class="like-button">
    <svg v-if="active" class="like-button__icon" width="20" height="20" fill="currentColor">
      <use width="20" height="20" href="@/assets/icons/heart-fill.svg#icon" />
    </svg>
    <svg v-else class="like-button__icon" width="20" height="20" fill="currentColor">
      <use width="20" height="20" href="@/assets/icons/heart.svg#icon" />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LikeButton',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">
.like-button {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 36px;
   height: 36px;
   border-radius: 50%;
   background: #0005;
  cursor: pointer;

  &__icon {
    color: white;
  }
}
</style>
