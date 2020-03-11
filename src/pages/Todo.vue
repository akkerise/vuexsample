<template>
  <div>
    <el-card v-for="card in cards" :key="card.id" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ card.title }}</span>
      </div>
    </el-card>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    name: "Todo",
    components: {},
    data() {
      return {
        ...mapState(["cards"])
      };
    },
    methods: {
    }
  };
</script>
<style>
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both;
  }
  
  .box-card {
    width: 480px;
  }
</style>
