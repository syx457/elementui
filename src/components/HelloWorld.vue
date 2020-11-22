<template>
  <div class="hello">
    <div>
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="250px" class="el-carousel">
        <el-carousel-item v-for="item in banners" :key="item.image" class="el-carousel-item">
          <img :src="item.image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import {getHome} from "@/network/home";

export default {
  name: 'HelloWorld',
  data() {
    return {
      radio: "1",
      banners: []
    }
  },
  created() {
    this.getHome()
  },
  methods: {
    getHome() {
      getHome().then(res => {
        this.banners = res.data.banner.list
      })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel{
  width: 80% !important;

  margin: 0 auto;
}
.el-carousel-item{
  background-color: white !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
