<template>
  <div>
    <search-wrap />
    <table>
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>手机号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="(item,index) in stuMsg" :key="index">
          <td>{{item.sNo}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex==0?"男":"女"}}</td>
          <td>{{item.email}}</td>
          <td>{{new Date().getFullYear()-item.birth}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>
            <!-- <router-link to="/modal" tag="button" class="btn edit" @click="handleEdit(item.sNo)">编辑</router-link> -->
            <button class="btn edit" @click="handleEdit(item.sNo)">编辑</button>&nbsp;
            <button class="btn delete" @click="removeOne(item.sNo)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <transition>
      <stu-modal></stu-modal>
    </transition>
    <turn-page></turn-page>
  </div>
</template>

<script>
import stuModal from "./Modal";
import searchWrap from "./SearchWrap";
import TurnPage from "./TurnPage"
import { mapState } from "vuex";
export default {
  created() {
    this.$api.findByPage(1, 10).then(data => {
      this.$store.dispatch("changeSl", data.data.data.findByPage);
    });
  },
  computed: {
    ...mapState({
      stuMsg: state => state.stuList
    })
  },
  methods: {
    removeOne: function(sNo) {
      this.$api.removeOne(sNo).then(res => {
        if (res.data.msg == "删除成功") {
          this.$api.findByPage(1, 10).then(data => {
            this.stuMsg = data.data.data.findByPage;
          });
        } else {
          alert("删除失败！");
        }
      });
    },
    handleEdit: function(id) {
      this.$store.dispatch("findOne", id);
      this.$store.dispatch("changeM");
    }
  },
  components: {
    stuModal,
    searchWrap,
    TurnPage
  }
};
</script>

<style>
.v-enter {
  top: -100%;
  opacity: 0;
}
.v-leave {
  top: 0;
  opacity: 1;
}
.v-enter-active {
  transition: all 0.8s;
  top: 0;
  opacity: 1;
}
.v-leave-active {
  transition: all 0.8s;
  top: -100%;
  opacity: 0;
}
</style>