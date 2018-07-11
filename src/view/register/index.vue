<template lang="html">
    <div class="register-wrap">
        <div class="regTop">
            <a href="https://www.hc360.com" target="_blank" class="logo"></a> <span>我是会员，点此<a href="https://sso.hc360.com/ssologin">登录</a></span>
        </div>
        <div class="regTop">
            <el-steps :active="active">
                <el-step title="验证手机"></el-step>
                <el-step title="填写账号信息"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>
        <div class="" v-if="active === 1">
            <div class="register-center">
                <el-form label-position="right" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="130px" class="demo-ruleForm">
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="valid">
                        <el-input class="valid-code" v-model="ruleForm.valid" type="password"></el-input>
                        <div class="valid-img"><img src="http://reg.hc360.com/reg/code/validimage.html?type=new" /></div>
                        <a class="valid-next" href="javascript:;">看不清楚，换一张</a>
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="message">
                        <el-input class="valid-messcode" v-model="ruleForm.message" type="text"></el-input>
                        <el-button class="valid-message" type="info" :disabled="false">获取短信验证码</el-button>
                    </el-form-item>
                    <div class="regRig">
                        <el-checkbox v-model="checked">您确认阅读并接受</el-checkbox>
                        <a href="http://my.b2b.hc360.com/my/turbine/template/firstview,regtxt.html" target="_blank">《慧聪网会员注册协议》</a>
                        <a href="https://www.hc360.com/law.htm" target="_blank">《慧聪网隐私政策条款》</a>
                        <a href="http://info.kf.hc360.com/2014/11/1318391302.shtml" target="_blank">《慧聪网在线交易服务条款》</a>
                        <a href="http://info.kf.hc360.com/2014/11/1318391301.shtml" target="_blank">《慧付宝服务协议》</a>
                        <div class="promptBox promptBox_2">
                            <div class="tips-errow" style="display:none;">请勾选确认已阅读服务协议</div>
                        </div>
                    </div>
                </el-form>
                <el-button class="valid-success" type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            </div>
        </div>
        <div class="" v-else-if="active === 2">
            <div class="register-center">
                <el-form label-position="right" label-width="130px" class="demo-ruleForm">
                    <el-form-item label="会员名" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="登录密码" prop="phone">
                        <el-input v-model="ruleForm.phone" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <el-button class="valid-success" type="primary" @click="active=3">下一步</el-button>
            </div>
        </div>
        <div class="" v-else-if="active === 3">
            <div class="register-center" style="text-align: center;">
                <div class="open-icon">
                    <i class="el-icon-success"></i>
                </div>
                <p class="open-text">恭喜您，已经成功注册慧聪网</p>
                <el-button class="open-button" type="primary" >进入会员中心</el-button>
            </div>
        </div>
        <div class="regBottom">
            <ul class="regBottom-inner">
                <li>
                    <div class="icon_1 icon_11"></div>
                    <div class="word">
                        <p class="fs16">3600W求购信息</p>
                        <p>汇集B2B网站所有买家情报，快速成交</p>
                    </div>
                </li>
                <li>
                    <div class="icon_1 icon_12"></div>
                    <div class="word">
                        <p class="fs16">全网流量推广</p>
                        <p>SEO免费搜索优化,提升商品在线排名</p>
                    </div>
                </li>
                <li>
                    <div class="icon_1 icon_13"></div>
                    <div class="word">
                        <p class="fs16">专业商铺经营工具</p>
                        <p>从开店--成交，商铺经营工具一应俱全</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="regRigBox">
            <div class="regRigBoxCon">
                <img src="https://style.org.hc360.com/images/my/images/regist/new/regCodeImg.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: 1,
            checked: false,
            ruleForm: {
                phone: '',
                valid: '',
                message: ''
            },
            rules: {
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    {
                        message: '手机号码格式不正确',
                        trigger: 'blur',
                        pattern: /^[1][3,4,5,7,8][0-9]{9}$/
                    }
                ],
                valid: [
                    { required: true, message: '请输入图中结果', trigger: 'blur' }
                ],
                message: [
                    { required: true, message: '请输入手机验证码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                // console.log(valid);
                if (valid) {
                    let active = this.active;
                    this.active = active + 1;
                }
            });
        }
    }
};
</script>

<style lang="css">
    .regTop {
        padding-top: 30px;
        width: 980px;
        margin: 0 auto;
        height: 55px;
        padding-bottom: 35px;
    }
    .regTop .logo {
        background-image: url(https://style.org.hc360.com/images/logo/logo280x48-reg.png);
        background-image: url(https://style.org.hc360.com/images/logo/logo280x48-reg.svg), none;
        display: block;
        background-repeat: no-repeat;
        height: 48px;
        width: 280px;
        float: left;
    }
    .regTop span {
        float: right;
        font-size: 14px;
        color: #333;
        padding-top: 10px;
        line-height: 20px;
    }
    .regTop span a {
        color: #0055aa;
        text-decoration: none;
        padding-left: 5px;
    }
    .regRig {
        float: left;
        margin-left: 143px;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 12px;
        color: #999;
        line-height: 20px;
    }
    .regRig a {
        color: #0c76f4;
        font-size: 12px;
    }

    .register-center {
        width: 500px;
        margin: 90px auto;
    }
    .el-form-item. .el-form-item__label:before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
    }
    .valid-code {
        width: 120px;
        float: left;
    }
    .valid-img {
        float: left;
        wdith: 30px;
        height: 40px;
        margin-left: 20px;
    }
    .valid-img img {
        width: 100px;
        height: 100%;
    }
    .valid-next {
        float: left;
        padding-left: 10px;
        padding-top: 10px;
        box-sizing: border-box;
        outline: none;
    }
    .valid-success {
        width: 370px;
        margin-left: 130px;
    }
    .valid-messcode {
        width: 220px
    }
    .open-icon {
        margin: 0 auto;
        margin-top: 60px;
    }
    .open-icon .el-icon-success {
        font-size: 110px;
        color: #409EFF;
    }
    .open-text {
        font-size: 16px;
        color: #409EFF;
        line-height: 120px;
    }
    .open-button {
        width: 370px
    }

    .regBottom {
        width: 100%;
        height: auto;
        padding: 40px 0;
        background: #f7f7f7;
    }
    .regBottom-inner {
        width: 1040px;
        height: auto;
        margin: 0 auto;
        overflow: hidden;
    }
    .regBottom-inner li {
        float: left;
        width: 313px;
        height: auto;
        margin-left: 20px;
    }
    .regBottom-inner li .icon_1 {
        width: 45px;
        height: 45px;
        background: url(//style.org.hc360.com/images/my/images/regist/new/regIcon_0407.png) no-repeat -20px -18px;
        float: left;
        margin-top: 15px;
    }
    .regBottom-inner li .word {
        float: left;
        width: 205px;
        padding-top: 20px;
        margin-left: 10px;
    }
    .regBottom-inner li .word p.fs16 {
        font-size: 16px;
        color: #262626;
    }

    .regBottom-inner li .word p {
        color: #666;
    }
    .regBottom-inner li .word p {
        color: #6c6c6c;
        font-size: 12px;
        line-height: 26px;
    }
    .regBottom-inner li:nth-of-type(2) .icon_1 {
        background-position: -20px -143px;
    }
    .regBottom-inner li .icon_12 {
        background-position: -20px -143px;
    }
    .regBottom-inner li:nth-of-type(3) .icon_1 {
        background-position: -20px -276px;
    }
    .regBottom-inner li .icon_13 {
        background-position: -20px -276px;
    }

    .regRigBox {
        background: url(https://style.org.hc360.com/images/my/images/regist/new/regRigCodeBg.png);
        height: 251px;
        width: 183px;
        overflow: hidden;
        position: fixed;
        top: 190px;
        right: 50px;
    }
    .regRigBoxCon {
        width: 140px;
        height: 140px;
        margin: 0 auto;
        padding: 20px 0;
        overflow: hidden;
    }
    .regRigBoxCon img {
        width: 140px;
        height: 140px;
    }
</style>
