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

          <div class="flex flex-col space-y-3 p-2">
            <a href="#" class="transition hover:text-blue-600">My Profile</a>
            <a href="#" class="transition hover:text-blue-600">Edit Profile</a>
            <a href="#" class="transition hover:text-blue-600">Settings</a>
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

      <!-- content -->
      <div>
        <div class="mx-auto justify-center content-center p-40">
          <div
            class="max-w-sm min-w-[1200px] h-[780px] mx-auto justify-center border-4 content-center grid grid-cols-2 mt-8 bg-white shadow-2xl rounded-3xl col-span-1 p-4"
          >
            <img :src="imgUrl + pokemonId + '.png'" />
            <div class="ml-8">
              <div class="grid grid-cols-2">
                <div>
                  <h1 class="text-2xl font-bold">{{ detail.name }}</h1>
                  <!-- <p class="font-medium text-gray-700">{{ detail.Category.name }}</p> -->
                </div>
              </div>
              <div class="font-medium text-gray-700 mt-3 mr-2 text-justify">
                <h1>Pokemon Type :</h1>
              </div>
              <div
                v-for="types in detail.types"
                :key="types.index"
                class="bg-black hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full mr-4 w-20 mt-3"
              >
                <p>{{ types.type.name }}</p>
              </div>
              <div class="ml-14 mt-4" style="height: 170px; width: 170px"></div>
              <div>
                <button
                  @click.prevent="addpoke"
                  class="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-1 px-4 rounded-full shadow-lg mr-4 w-72 mt-3\ justify-center"
                  @mouseover="hover = 'red'"
                  @mouseleave="hover = 'white'"
                >
                  <svg
                    class="svg-icon"
                    style="width: 1.5em; height: 2em; fill: currentColor; overflow: hidden"
                    viewBox="100 100 800 600"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M512 85.333333C747.52 85.333333 938.666667 276.48 938.666667 512 938.666667 747.52 747.52 938.666667 512 938.666667 276.48 938.666667 85.333333 747.52 85.333333 512 85.333333 276.48 276.48 85.333333 512 85.333333M512 170.666667C337.92 170.666667 194.133333 300.8 173.226667 469.333333L346.88 469.333333C365.653333 395.52 432.64 341.333333 512 341.333333 591.36 341.333333 658.346667 395.52 677.12 469.333333L850.773333 469.333333C829.866667 300.8 686.08 170.666667 512 170.666667M512 853.333333C686.08 853.333333 829.866667 723.2 850.773333 554.666667L677.12 554.666667C658.346667 628.48 591.36 682.666667 512 682.666667 432.64 682.666667 365.653333 628.48 346.88 554.666667L173.226667 554.666667C194.133333 723.2 337.92 853.333333 512 853.333333M512 426.666667C465.066667 426.666667 426.666667 465.066667 426.666667 512 426.666667 558.933333 465.066667 597.333333 512 597.333333 558.933333 597.333333 597.333333 558.933333 597.333333 512 597.333333 465.066667 558.933333 426.666667 512 426.666667Z"
                    />
                  </svg>
                  <p class="">Catch Pokemon</p>
                </button>
                <router-link
                  :to="'/'"
                  class="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transform transition duration-300 ease-in-out w-72 mt-3 justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline-block mr-2 -mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Kembali ke Home
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      asideOpen: true,
      profileOpen: false
    }
  },

  created() {
    this.fetchDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchDetail', 'catchPoke', 'generateToken']),
    addpoke() {
      const value = {
        pokeImg: this.imgUrl + this.pokemonId + '.png',
        pokeName: this.detail.name
      }
      this.catchPoke(value)
    },
    prepare() {
      this.generateToken()
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['detail', 'imgUrl', 'pokemonId'])
  }
}
</script>
