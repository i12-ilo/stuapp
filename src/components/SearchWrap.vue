<template>
  <div class="serachWrap">
    <input placeholder="请输入搜索文字" v-model="content" />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    search() {
        this.$api.SearchStuList(this.content).then(res=>{
            this.$store.dispatch("changeSl",res.data.data.searchList);
        })
    }
  }
};
</script>

<style>
.serachWrap {
    padding:10px;
  width: 600px;
  height: 40px;
  line-height: 40px;
}
.serachWrap input {
  width: 200px;
  height: 40px;
  line-height: 40px;
}
.serachWrap button {
  margin-left: 20px;
  width: 60px;
  height: 40px;
  background-color: #008c8c;
  color: #fff;
  outline:none;
}
</style>