<template>
  <div class="login">
    <h1>登录注册</h1>
    {{ form }}
    <el-form ref="form" :model="data">
      <el-form-item label="账号">
        <el-input v-model="data.username"  />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="data.password" />
      </el-form-item>
    </el-form>
    <div class="bottom-btn">
      <el-button type="primary" @click="onLogin">登录</el-button>
    </div>
  </div>
</template>
<script lang="ts" >
import { login } from "@/api/index";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { setToken } from "@/utils/index";
import { useRouter } from "vue-router";
export default {
  setup() {
    const data = ref({
      username: "admin",
      password: "123456",
    });
    const router = useRouter();
    const toPage = (path:string) => {
      router.push(path);
    };

    const onLogin = async () => {
      const { username, password } = data.value;
      try {
        const { accesstoken } = await login({ username, password });
        if(!accesstoken) throw(new Error('用户名或密码错误'));
        setToken(accesstoken)
        ElMessage.success("登录成功");
        toPage('/');
      } catch (err) {
        console.log(err);
        ElMessage.error(err.message);
      }
    };

    return { data, onLogin };
  },
};
</script>
<style lang="scss" scoped>
.login {
  h1 {
    text-align: center;
    padding: 10px;
  }
  width: 500px;
  margin: 200px auto 0;
}
.bottom-btn {
  display: flex;
  justify-content: flex-end;
}
</style>