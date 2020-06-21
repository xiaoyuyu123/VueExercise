<template>
      <div v-if="code==0">
            <a-row style="margin-top: 150px">
                  <a-col :span="8"></a-col>
                  <a-col :span="8">
                        <a-card>
                              <span slot="title">登录</span>
                              <a-form :form="form" :label-col="{span:5}">
                                    <a-form-item label="问卷代号">
                                          <a-input v-decorator="['code',{rules:[{required:true, message:'请输入问卷代号'}]}]"></a-input>
                                    </a-form-item>
                                    <a-form-item>
                                          <a-button type="primary" block>
                                                <router-link :to="'/fill/'+form.getFieldValue('code')">
                                                      进入问卷
                                                </router-link>
                                          </a-button>
                                    </a-form-item>
                              </a-form>
                        </a-card>
                  </a-col>
                  <a-col :span="8"></a-col>
            </a-row>
      </div>
      <div v-else-if="code>=0">

      </div>
      <div v-else>
            <a-result status="success" title="已提交，感谢参与" >
                  <template #subTitle>
                      您的问卷结果已提交至服务器，感谢您使用本系统。
                  </template>
                  <template #extra>
                        <a-button key="console" type="primary">
                              <router-link to="/home">回到主页</router-link>
                        </a-button>
                  </template>
            </a-result>
      </div>
</template>

<script>
      export default {
            name: "FillForm",
            props:[
                  'code',
            ],
            data() {
                  return {
                        form: this.$form.createForm(this, {name: 'loginForm'}),
                  }
            },
            methods: {
                  changePage: function () {
                        this.code=-1;
                  }
            }
      }
</script>

<style scoped>

</style>