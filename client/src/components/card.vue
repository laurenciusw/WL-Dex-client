<template>
  <div
    @click="$router.push(`detail/${pokes.entry_number}`)"
    class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="flex space-x-4"></div>
    <div>
      <img
        style="object-fit: contain"
        :src="imgUrl + pokes.entry_number + '.png'"
        class="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        alt=""
      />
      <h2 class="mb-1 text-xl font-semibold">{{ formatName }}</h2>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="space-x-2"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  props: ['pokes', 'imgUrl'],
  data() {
    return {
      pokeName: ''
    }
  },
  computed: {
    formatName() {
      return (
        this.pokes.pokemon_species.name.charAt(0).toUpperCase() +
        this.pokes.pokemon_species.name.slice(1)
      )
    }
  }
}
</script>

<style></style>
