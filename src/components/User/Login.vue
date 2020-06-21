<template>
    <div id="login" style="text-align: center">
        <a-alert v-if="onError" type="error" message="用户名或密码错误" banner />
        <a-row style="margin-top: 150px">
            <a-col :span="8"></a-col>
            <a-col :span="8">
                <a-card>
                    <span slot="title">登录</span>
                    <a-form :form="loginForm" @submit="handleSubmit" :label-col="{span:5}">
                        <a-form-item label="用户名">
                            <a-input v-decorator="['username',{rules:[{required:true, message:'请输入用户名'}]}]"></a-input>
                        </a-form-item>
                        <a-form-item label="密码">
                            <a-input-password v-decorator="['password',{rules:[{required:true, message:'请输入密码'}]}]"></a-input-password>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" html-type="submit" block>登录</a-button>
                        </a-form-item>
                    </a-form>
                </a-card>
            </a-col>
            <a-col :span="8"></a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: this.$form.createForm(this, {name: 'loginForm'}),
                onError: false,
            }
        },
        name: "Login",
        methods: {
            handleSubmit: function (e) {
                e.preventDefault();
                this.loginForm.validateFields((err, values)=>{
                    if(!err){
                        this.$axios.post('/login', {
                            username: values.username,
                            password: values.password,
                        }).then(successResponse => {
                            if(successResponse.data.code===200)
                                this.$router.replace({name:'Home'});
                            else if(successResponse.data.code===400)
                                this.onError=true;
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>