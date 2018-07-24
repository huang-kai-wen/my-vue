<template >


    <div class="loginPage1">
        
        <el-form>
            <el-form-item label="昵称">
                <el-input type="text" id="user" v-model="formName.username" @change="inputBlur('user',formName.username)"  placeholder="清输入名称"></el-input>
                <p>{{formName.userError}}</p>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" id="password" v-model="formName.password" @change="inputBlur('password',formName.password)"  placeholder="清输入密码"></el-input>
                <p>{{formName.passwordError}}</p>
            </el-form-item>
            <el-button type="primary" @click="submitForm(formName)" v-bind:disabled="formName.beDisabled">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form>             
    </div>
 
</template>	

	
</template>

<script>

    export default {
        name: '',
        data () {
            return {
                formName: {//表单中的参数
                    username: '',
                    userError: '',
                    password: '',
                    passwordError: '',
                    beDisabled: true
                }
                
            }           
        },
        
        methods: {
            resetForm:function(){
                this.formName.username = '';
                this.formName.userError = '';
                this.formName.password = '';
                this.formName.passwordError = '';
            },
            
            inputBlur:function(errorItem,inputContent){
                if (errorItem === 'user') {
                    if (inputContent === '') {
                        this.formName.userError = '用户名不能为空'
                    }else{
                        this.formName.userError = '';
                    }
                }else if(errorItem === 'password') {
                    if (inputContent === '') {
                        this.formName.passwordError = '密码不能为空'
                    }else{
                        this.formName.passwordError = '';
                    }
                }
                //对于按钮的状态进行修改
                if (this.formName.username != '' && this.formName.password != '') {
                    this.formName.beDisabled = false;
                }else{
                    this.formName.beDisabled = true;
                }
            },
            submitForm:function(formName){
               this.$store.dispatch('resetuser',formName)
               this.$store.dispatch('toogleusestate','usesee')
            },
        }
    }

</script>

<style scoped>

    .loginPage1{
        position: absolute;
        
        
        margin-left: -2.0rem;
        width: 350px;
        min-height: 300px;
        padding: 30px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
       
    }
    .loginPage1 p{
       margin-top:1rem; 
       font-size:16px; 
       width: 15rem;
       margin-left: 1rem;
        color: red;
        text-align: left;
    }
	
</style>