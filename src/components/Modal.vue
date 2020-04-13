<template>
  <div class="modal" v-show="show">
    <div class="mask" @click="maskClick"></div>
    <div class="content">
      <h3>编辑表单</h3>
      <form id="edit-form">
        <div class="item">
          <label for="name">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            :value="stuInfo&&stuInfo.name"
            @input="change('name',$event.target.value)"
          />
        </div>
        <div class="item">
          <label for="sex">性别</label>
          <input
            type="radio"
            name="sex"
            :checked="stuInfo&&stuInfo.sex==0"
            id="edit-male"
            value="0"
            @change="change('sex',0)"
          />
          <label for="edit-male" class="sex">男</label>
          <input
            type="radio"
            name="sex"
            id="edit-female"
            :checked="stuInfo&&stuInfo.sex==1"
            value="1"
            @change="change('sex',1)"
          />
          <label for="edit-female" class="sex">女</label>
        </div>
        <div class="item">
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            id="email"
            :value="stuInfo&&stuInfo.email"
            @input="change('email',$event.target.value)"
          />
        </div>
        <div class="item">
          <label for="sNo">学号</label>
          <input type="text" name="sNo" :value="stuInfo&&stuInfo.sNo" id="sNo" readonly />
        </div>
        <div class="item">
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            id="birth"
            :value="stuInfo&&stuInfo.birth"
            @input="change('birth',$event.target.value)"
          />
        </div>
        <div class="item">
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            id="phone"
            :value="stuInfo&&stuInfo.phone"
            @input="change('phone',$event.target.value)"
          />
        </div>
        <div class="item">
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            id="address"
            :value="stuInfo&&stuInfo.address"
            @input="change('address',$event.target.value)"
          />
        </div>
        <div class="item">
          <label for></label>
          <input class="btn" type="submit" id="edit-student-btn" value="提交" @click="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      stu: {}
    };
  },
  computed: {
    ...mapState({
      stuInfo: state => state.OneInfo[0],
      show: state => state.modalShow
    })
  },
  methods: {
    change(name, value) {
      console.log(name, value);
      this.stu[name] = value;
    },
    submit(e) {
      e.preventDefault();
      let newObj = Object.assign({}, this.stuInfo, this.stu);
      this.$api.UpdateOneInfo(newObj).then(res => {
        if (res.data.msg == "修改成功") {
          this.$toast({ msg: "√" + res.data.msg, type: 1 });
          this.$store.dispatch("changeM");
          this.$router.push("/showStu");
        } else {
          this.$toast({ msg: "×修改失败" + res.data.msg, type: 2 });
        }
      });
    },
    maskClick() {
      // this.$toast({msg:"修改成功",type=1})
      this.$store.dispatch("changeM");
    }
  }
};
</script>

<style>
</style>