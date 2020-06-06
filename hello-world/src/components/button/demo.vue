<!--  -->
<template>
  <div>
    <div style="margin-bottom: 20px;">
      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col span="8">
          <div>
            <span style="font-size: 22px;font-weight: bold;">基本信息</span>
            <br />
            <span style="font-size:10px">111111</span>
          </div>
        </van-col>
        <van-col span="8">
          <div style="height:35px;margin-top: 12px;">
            <van-button
              style="height:100%"
              round
              icon="https://img.yzcdn.cn/vant/logo.png"
              type="default"
            >language</van-button>
          </div>
        </van-col>
      </van-row>
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        input-align="right"
        size="large"
        arrow-direction="left"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        input-align="right"
        size="large"
      />
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value"
        label="时间选择"
        input-align="right"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="picker"
        :value="sex"
        label="性别"
        placeholder="请选择"
        input-align="right"
        @click="showPickerSex = true"
      />
      <van-popup v-model="showPickerSex" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirmSex"
          @cancel="showPickerSex = false"
        />
      </van-popup>
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        input-align="right"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" hairline :loading="loading" @click="loading=true">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      username: "",
      password: "",
      value: "",
      showPicker: false,
      minDate: new Date(1800, 0, 1),
      maxDate: new Date(2025, 10, 1),
      sex: "",
      columns: ["男", "女"],
      showPickerSex: false,
      sms: "",
      loading: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    onConfirmSex(value) {
      this.sex = value;
      this.showPicker = false;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>