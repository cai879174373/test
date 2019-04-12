<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span class="title"> 面试指引</span>
    <div class="instruction">完成Test.Vue</div>
    <div class="instruction">1.进入后加载mock数据（mock方法的默认调用即可）到store（调用mock.js）</div>
    <div class="instruction">2.页面需要同步更新store中的getAverage与getData</div>
    <div class="instruction">3.完成store中getAverage方法，计算列表中data的平均值（例子：{data:1,data:2}, 平均值为1.5）保留两位小数</div>
    <div class="instruction">4.完成点击《加载更多》按钮加载更多数据到store（每次数据量不限，但页数要连贯），并同步更新平均值</div>
    <div class="instruction">5.把列表按照id: item.id, data: item.data, 下一列item.time排版，元素居中，有更好看到排版更佳</div>
    <div class="instruction">6.自由发挥优化用户体验</div>

  </div>
</template>

<script>

export default {
  name: 'home',
  created () {
    document.title = 'Vue面试题'
  }

}
</script>

<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:100%;
  text-align: center;
  img{
    max-width: 100px;

  }
  .instruction{
    font-size: 15px;
    padding: 5px;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
  }
}

</style>
