<template>
  <div class="apartment-card__like">
    <img
      class="apartment-card__like-icon"
      src="@/assets/icons/heart.svg"
      alt=""
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LikeButton'
})
</script>

<style scoped lang="scss">
.like-button {
  &__like {
     display: flex;
     align-items: center;
     justify-content: center;
     width: 32px;
     height: 32px;
     border-radius: 50%;
     background: #0005;
  }

  &__like-icon {
     height: 20px;
     width: 20px;
     color: white;
     fill: currentColor;

    &_active {
       fill: currentColor;
    }
  }
}
</style>
