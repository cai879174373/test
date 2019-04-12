<template>
  <div class="test">
    <div>平均值: {{getAverage}}</div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div class="id">id: {{item.id}}</div>
      <div class="data">data: {{item.data}}</div>
      <div class="time">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      average: ''
    }
  },
  computed: {
    ...mapGetters({
      getAverage: 'getAverage',
      getData: 'getData'
    }),
    ...mapState({
      dataList: state => state.dataList
    })
  },
  methods: {
    update () {
      this.addData()
    },
    ...mapActions({
      getDataCall: 'getDataCall',
      addData: 'addData'
    })
  },
  mounted () {
    this.getDataCall()
  }
}
</script>

<style scoped lang="less">
.test {
  .list {
    display: flex;
    flex-direction: row;
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}
.list {
  width: 40%;
  margin: 0 auto;
  height: 100px;
  text-align: left;
  flex-wrap: wrap;
  .id {
    width: 50%
  }
  .data {
    width: 50%
  }
  .time {
    width: 100%;
  }
}
</style>
