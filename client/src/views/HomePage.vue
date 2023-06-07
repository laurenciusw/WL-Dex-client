<template>
  <main class="min-h-screen w-full bg-gray-100 text-gray-700">
    <!-- header page -->
    <header
      class="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2"
    >
      <!-- logo -->
      <div class="flex items-center space-x-2">
        <button type="button" class="text-3xl" @click="asideOpen = !asideOpen">
          <i class="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
      <div>
        <button
          type="button"
          @click="profileOpen = !profileOpen"
          class="h-9 w-9 overflow-hidden rounded-full"
        >
          <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
        </button>
      </div>
    </header>
    <!-- aside -->
    <div class="flex">
      <aside
        class="flex w-72 flex-col space-y- border-r-2 border-gray-200 bg-white p-2"
        :class="{ hidden: !asideOpen }"
      >
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-home"></i></span>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-cart"></i></span>
          <span>Cart</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-shopping-bag"></i></span>
          <span>Shopping</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-heart"></i></span>
          <span>My Favourite</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>Profile</span>
        </a>
      </aside>

      <!-- card -->
      <div
        class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
      >
        <card v-for="poke in pokes" :key="poke.index" :pokes="poke" :imgUrl="imgUrl" />
      </div>
    </div>
  </main>
</template>

<script>
import card from '../components/card.vue'
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      asideOpen: true
    }
  },
  components: {
    card
  },
  created() {
    this.fetchHandler()
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchHandler'])
  },
  computed: {
    ...mapWritableState(useCounterStore, ['pokes', 'imgUrl'])
  }
}
</script>
