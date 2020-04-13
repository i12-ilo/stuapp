<template>
  <div class="student-add" id="student-add">
    <form id="student-add-form">
      <div class="item">
        <label form="name">姓名</label>
        <input type="text" name="name" id="name" v-model="name" />
      </div>
      <div class="item">
        <label for="sex">性别</label>
        <input type="radio" name="sex" checked id="male" value="0" v-model="sex" />
        <label for="male" class="sex">男</label>
        <input type="radio" name="sex" id="female" value="1" v-model="sex" />
        <label for="female" class="sex">女</label>
      </div>
      <div class="item">
        <label for="email">邮箱</label>
        <input type="text" name="email" id="email" v-model="email" />
      </div>
      <div class="item">
        <label for="sNo">学号</label>
        <input type="text" name="sNo" id="sNo" v-model="sNo" />
      </div>
      <div class="item">
        <label for="birth">出生年</label>
        <input type="text" name="birth" id="birth" v-model="birth" />
      </div>
      <div class="item">
        <label for="phone">手机号</label>
        <input type="text" name="phone" id="phone" v-model="phone" />
      </div>
      <div class="item">
        <label for="address">住址</label>
        <input type="text" name="address" id="address" v-model="address" />
      </div>
      <div class="item">
        <label for></label>
        <input class="btn" id="add-student-btn" type="submit" value="提交" @click="handleClick" />
        <input class="btn" type="reset" value="重置" />
      </div>
    </form>
  </div>
</template>

<script>
import api from "../util/getData";
export default {
  data() {
    return {
      sNo: "",
      name: "",
      sex: "",
      birth: "",
      address: "",
      email: "",
      phone: ""
    };
  },
  methods: { 
    handleClick: function(e) {
      e.preventDefault();
      api
        .addStu({
          name: this.name,
          sNo: this.sNo,
          sex: this.sex,
          birth: this.birth,
          address: this.address,
          email: this.email,
          phone: this.phone
        })
        .then(res => {
          if (res.data.msg != "添加成功") {
          alert(`添加失败${res.data.msg}`);
          } else {
            alert("ok!添加成功");
            this.$router.push({
                path:"/showStu"
            })
          }
        });
    }
  }
};
</script>

<style>
</style>