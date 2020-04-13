<template>
  <div id="turn-page">
    <ul>
      <button  class="prev btn" @click="prev">上一页</button>
      <template v-if="totalPage<=7">
        <li class="num" v-for="i in totalPage" :key="i" :class="i==nowPage?'active':''">{{i}}</li>
      </template>
      <template v-else>
        <li class="num" v-for="i in list" :key="i" :class="i==nowPage?'active':''">{{i}}
        </li>
      </template>
      <button class="next btn" @click="next">下一页</button>
    </ul>

  </div>
</template>

<script>
import { mapState } from "vuex";
import uuid from "uuid" 
export default {
  created(){
   this.$store.dispatch("getTotalPage")
  },
  data(){
    return {
      nowPage:1
    }
  },
  computed: {
    ...mapState({
      totalPage: state => state.totalPage
    }),
    list(){
      if(this.nowPage<=4){
        return [1,2,3,4,5,6,'...',this.totalPage]
      }else if(this.nowPage>4&&this.nowPage+4<this.totalPage){
        return [1,'...',this.nowPage-2,this.nowPage-1,this.nowPage,this.nowPage+1,this.nowPage+2,'...',this.totalPage]
      }else{
        return [1,'...',this.totalPage-5,this.totalPage-4,this.totalPage-3,this.totalPage-2,this.totalPage-1,this.totalPage]
      }
    }
  },
  methods:{
    prev(){
      if(this.nowPage==1){
        return;
      }else{
        this.nowPage--;
      }
    },
    next(){
      if(this.nowPage==this.totalPage){
        return;
      }else{
        this.nowPage++;
      }
    }
  }
};
</script>

<style>
#turn-page ul li{
display:inline-block;
list-style: none;
width:30px;
height:30px;
border:1px solid #ccc;
line-height:30px;
border-radius:3px;
margin:5px;
}
#turn-page ul li.active{
  border:1px solid #008c8c;
}
#turn-page button.btn{
  height:30px;
  border:1px solid #ccc;
}
</style>