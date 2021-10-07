<template>
  <div class="apartment-card">
    <div class="apartment-card__title">
      3-х комнатная на Минской
    </div>
    <div class="apartment-card__info">
      <div class="apartment-card__info-item">Минская 3а</div>
      <div class="apartment-card__info-item">кв 123</div>
      <div class="apartment-card__info-item">134 м²</div>
    </div>
    <PersonLink
      class="apartment-card__seller"
      name="Василий Михайлович Дроздов"
    />

    <LikeButton class="apartment-card__like" />
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
  props: {}
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
    margin-top: 8px;
    font-size: 16px;
    line-height: 19px;
  }

  &__info-item {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
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
