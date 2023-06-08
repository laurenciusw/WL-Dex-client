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
          <img
            src="https://www.clipartmax.com/png/middle/251-2514739_drawn-pokeball-svg-black-and-white-pokeball.png"
            alt="plchldr.co"
          />
        </button>
        <!-- dropdown profile -->
        <div
          class="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
          :class="{ hidden: !profileOpen }"
        >
          <div class="flex items-center space-x-2 p-2">
            <img
              src="https://www.clipartmax.com/png/middle/251-2514739_drawn-pokeball-svg-black-and-white-pokeball.png"
              alt="plchldr.co"
              class="h-9 w-9 overflow-hidden rounded-full"
            />
            <div class="font-medium">Haii!</div>
          </div>

          <div class="p-2">
            <button class="flex items-center space-x-2 transition hover:text-blue-600">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <div>Log Out</div>
            </button>
          </div>
        </div>
      </div>
    </header>
    <!-- aside -->
    <div class="flex">
      <aside
        class="flex w-72 flex-col space-y- border-r-2 border-gray-200 bg-white p-2"
        :class="{ hidden: !asideOpen }"
      >
        <a
          @click.prevent="this.$router.push('/')"
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-home"></i></span>
          <span>Home</span>
        </a>
        <a
          @click="$router.push('/mypokepage')"
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>Trainer Account</span>
        </a>
        <a
          @click.prevent="prepare"
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-captions"></i></span>
          <span>Subscribe</span>
        </a>
      </aside>

      <!-- card -->
      <div
        class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        <myPokeCard v-for="poke in mypokes" :key="poke.id" :pokes="poke" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import myPokeCard from '../components/myPokeCard.vue'
import router from '../router'

export default {
  data() {
    return {
      asideOpen: true,
      profileOpen: false
    }
  },
  components: {
    myPokeCard
  },
  created() {
    this.fetchMyPoke()
  },
  methods: {
    ...mapActions(useCounterStore, ['generateToken', 'fetchMyPoke']),
    prepare() {
      console.log(this.generateToken)
      this.generateToken()
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['mypokes'])
  }
}
</script>
