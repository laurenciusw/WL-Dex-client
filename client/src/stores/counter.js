import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    imgUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
    pokes: [],
    detail: [],
    pokemonId: '',
    mypokes: []
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
        console.log(this.pokes)
      } catch (error) {
        console.log(error)
      }
    },

    //detail poke
    async fetchDetail(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/getpoke/' + id,
          method: 'get'
        })
        this.detail = data
        this.pokemonId = id
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },

    //generate token
    async generateToken() {
      try {
        console.log('masuk')
        const reponse = await axios({
          url: this.baseUrl + '/generate-token',
          method: 'post',
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTI4MDM5fQ.v_45DowTkgzsByW4UB1g9WzQW23LYMSmjo3JvIPcomg'
          }
        })

        const cb = this.changeStatus()

        window.snap.pay(reponse.data.token, {
          onSuccess: function (result) {
            console.log('berhasil')
            cb()
          }
        })
      } catch (error) {
        console.log(error)
      }
    },

    //change status
    async changeStatus() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/subscribe',
          method: 'patch',
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTI4MDM5fQ.v_45DowTkgzsByW4UB1g9WzQW23LYMSmjo3JvIPcomg'
          }
        })
      } catch (error) {
        console.log(error)
      }
    },

    //catch Poke
    async catchPoke(data) {
      try {
        const { response } = await axios({
          url: this.baseUrl + '/addpokemon',
          method: 'post',
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTI4MDM5fQ.v_45DowTkgzsByW4UB1g9WzQW23LYMSmjo3JvIPcomg'
          },
          data: data
        })
        this.fetchMyPoke()
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    //fetch my poke
    async fetchMyPoke() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/mypoke',
          method: 'get',
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTI4MDM5fQ.v_45DowTkgzsByW4UB1g9WzQW23LYMSmjo3JvIPcomg'
          }
        })
        this.mypokes = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
