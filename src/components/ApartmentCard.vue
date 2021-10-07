<template>
  <div class="apartment-card">
    <div class="apartment-card__title">
      {{ title }}
    </div>
    <div class="apartment-card__info">
      <div
        v-for="item in info"
        :key="item"
        class="apartment-card__info-item"
      >
        {{ item }}
      </div>
    </div>

    <PersonLink
      class="apartment-card__seller"
      :name="seller"
    />

    <LikeButton
      class="apartment-card__like"
      :active="liked"
      @click="handleLikeClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PersonLink from '@/core/components/PersonLink.vue'
import LikeButton from '@/core/components/LikeButton.vue'

export default defineComponent({
  name: 'ApartmentCard',
  components: {
    PersonLink,
    LikeButton
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    liked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    seller: {
      type: String,
      default: ''
    },
    info: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    function handleLikeClick() {
      emit('like:toggle', props.id)
    }

    return {
      handleLikeClick
    }
  }
})
</script>

<style scoped lang="scss">
.apartment-card {
  min-width: 240px;
  padding: 16px;
  display: block;
  background: white;
  border-radius: 16px;
  position: relative;

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  &__info {
    display: flex;
    flex-flow: row wrap;
    margin-top: 8px;
    font-size: 16px;
    line-height: 19px;
  }

  &__info-item {
    margin-right: 16px;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }
  }

  &__seller {
    margin-top: 24px;
  }

  &__like {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
