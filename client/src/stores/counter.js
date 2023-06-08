import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'https://wlhck.site',
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
            access_token: localStorage.access_token
          }
        })

        const cb = this.changeStatus()

        window.snap.pay(reponse.data.token, {
          onSuccess: function (result) {
            Swal.fire({
              icon: 'success',
              title: 'You are a member now!',
              showConfirmButton: false,
              timer: 1500
            })
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
            access_token: localStorage.access_token
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
            access_token: localStorage.access_token
          },
          data: data
        })
        this.fetchMyPoke()
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: 'Success catch the Pokemon!!',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    //fetch my poke
    async fetchMyPoke() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/mypoke',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.mypokes = data
      } catch (error) {
        console.log(error)
      }
    },

    //handle login
    async loginHandler(value) {
      console.log(value)
      try {
        const { data } = await axios({
          url: this.baseUrl + '/login',
          method: 'post',
          data: value
        })
        localStorage.access_token = data.access_token
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    //handle register
    async registerHanlder(value) {
      console.log('masuk router')
      try {
        await axios({
          url: this.baseUrl + '/register',
          method: 'post',
          data: value
        })
        this.router.push('/login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    }
  }
})
