<template>
  
        <div class="modal">
          <div class="mask"></div>
          <div class="content">
            <h3>编辑表单</h3>
            <form id="edit-form">
              <div class="item">
                <label for="name">姓名</label>
                <input type="text" id="name" name="name"/>
              </div>
              <div class="item">
                <label for="sex">性别</label>
                <input type="radio" name="sex" checked id="edit-male" value="0"/>
                <label for="edit-male" class="sex">男</label>
                <input type="radio" name="sex" id="edit-female" value="1"/>
                <label for="edit-female" class="sex">女</label>
              </div>
              <div class="item">
                <label for="email">邮箱</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="item">
                <label for="sNo">学号</label>
                <input type="text" name="sNo" id="sNo" readonly>
              </div>
              <div class="item">
                <label for="birth">出生年</label>
                <input type="text" name="birth" id="birth" />
              </div>
              <div class="item">
                <label for="phone">手机号</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div class="item">
                <label for="address">住址</label>
                <input type="text" name="address" id="address" />
              </div>
              <div class="item">
                <label for=""></label>
                <input class="btn" type="submit" id="edit-student-btn" value="提交" />
              </div>
            </form>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>