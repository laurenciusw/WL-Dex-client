<template>
  <!-- Container -->
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
    <!-- Login component -->
    <div class="flex shadow-md">
      <!-- Login form -->
      <div
        class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
        style="width: 24rem; height: 32rem"
      >
        <div class="w-72">
          <!-- Heading -->
          <h1 class="text-xl font-semibold">Welcome back</h1>
          <small class="text-gray-400">Welcome back! Please enter your details</small>

          <!-- Form -->
          <form class="mt-4" @submit.prevent="loginSumbit">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <button
                class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
              >
                Sign in
              </button>
              <googlelogin />
              <!-- <button
                class="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
              >
                <img
                  class="w-5 mr-2"
                  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                />
                Sign in with Google
              </button> -->
            </div>
          </form>

          <!-- Footer -->
          <div class="text-center">
            <span class="text-xs text-gray-400 font-semibold">Don't have account?</span>
            <router-link v-bind:to="'/register'" class="text-xs font-semibold text-purple-700"
              >Sign up</router-link
            >
          </div>
        </div>
      </div>

      <!-- Login banner -->
      <div
        class="flex flex-wrap content-center justify-center rounded-r-md"
        style="width: 24rem; height: 32rem"
      >
        <img
          class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
          src="https://m.media-amazon.com/images/I/71BO-lgtuVL.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  methods: {
    ...mapActions(useCounterStore, ['loginHandler']),
    loginSumbit() {
      const value = {
        email: this.email,
        password: this.password
      }
      this.loginHandler(value)
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style></style>
