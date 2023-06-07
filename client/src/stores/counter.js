import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    pokes: [],
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
  }),
  actions: {
    //fetch poke
    async fetchHandler() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/getpoke',
          method: 'get'
        })
        this.pokes = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
