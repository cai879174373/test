import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    update: function (state) {},
    getDataCall: function (state, payload) {
      state.dataList = payload.data
    },
    addData: function (state, payload) {
      state.dataList = state.dataList.concat(payload.data)
      console.log(state.dataList)
    }
  },
  getters: {
    getAverage: state => {
      var num = 0
      state.dataList.forEach(v => {
        console.log(v)
        num += v.data
      })
      return (num / state.dataList.length).toFixed(2)
    },
    getData: state => state.dataList
  },
  actions: {
    async getDataCall (context) {
      // TODO
      var res = await mockGenerator()
      context.commit('getDataCall', {
        data: res
      })
    },
    async addData (context) {
      var res = await mockGenerator()
      context.commit('addData', {
        data: res
      })
    }
  }
})
