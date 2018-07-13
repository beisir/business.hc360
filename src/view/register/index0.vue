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

            <Steps :current="active">
                <Step title="已完成" content="验证手机"></Step>
                <Step title="进行中" content="填写账号信息"></Step>
                <Step title="待进行" content="注册成功"></Step>
            </Steps>

        </div>
        <div class="" v-if="active === 1">
            <div class="register-center transition-box">
                <Form
                    :status-icon="true"
                    ref="ruleForm"
                    label-position="right"
                    :model="ruleForm"
                    :rules="rules"
                    :validate-on-rule-change="false"
                    label-width="130">
                    <!-- <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item> -->
                    <FormItem label="手机号码" prop="phone">
                        <Input v-model="ruleForm.phone"></Input>
                    </FormItem>
                    <!-- <el-form-item label="验证码" prop="valid">
                        <el-input class="valid-code" v-model="ruleForm.valid"></el-input>
                        <div class="valid-img"><img :src="'http://10.158.33.230/validCode/validimage?valid=' + refresCode" /></div>
                        <a class="valid-next" href="javascript:;" @click="reflshImg">看不清楚，换一张</a>
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="message">
                        <el-input class="valid-messcode" v-model="ruleForm.message" type="text"></el-input>
                        <el-button class="valid-message" type="info" :disabled="(!shortStatus && !phoneStatus) && (shortCode === '获取短信验证码')" @click="verifyingCode">{{shortCode}}</el-button>
                    </el-form-item>
                    <el-form-item label="确认阅读并接受" prop="type">
                        <div class="regRig">
                            <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox class="valid-checkbox" name="type"></el-checkbox>
                                <a href="http://my.b2b.hc360.com/my/turbine/template/firstview,regtxt.html" target="_blank">《慧聪网会员注册协议》</a>
                                <a href="https://www.hc360.com/law.htm" target="_blank">《慧聪网隐私政策条款》</a>
                                <a href="http://info.kf.hc360.com/2014/11/1318391302.shtml" target="_blank">《慧聪网在线交易服务条款》</a>
                                <a href="http://info.kf.hc360.com/2014/11/1318391301.shtml" target="_blank">《慧付宝服务协议》</a>
                                <div class="promptBox promptBox_2">
                                    <div class="tips-errow" style="display:none;">请勾选确认已阅读服务协议</div>
                                </div>
                            </el-checkbox-group>

                        </div>
                    </el-form-item> -->
                </Form>
                <el-button class="valid-success" type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            </div>
        </div>
        <div class="" v-else-if="active === 2">
            <div class="register-center">
                <el-form ref="ruleForm2"
                    :status-icon="true"
                    label-position="right"
                    :model="ruleForm2"
                    :rules="rules2"
                    label-width="130px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model.number="ruleForm2.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="pwd">
                        <el-input type="password" v-model="ruleForm2.pwd"></el-input>
                    </el-form-item>
                    <el-button class="valid-success" type="primary" @click="submitForm('ruleForm2')">下一步</el-button>
                </el-form>
            </div>
        </div>
        <!-- <div class="" v-else-if="active === 3">
            <div class="register-center" style="text-align: center;">
                <div class="open-icon">
                    <i class="el-icon-success"></i>
                </div>
                <p class="open-text">恭喜您，已经成功注册慧聪网</p>
                <el-button class="open-button" type="primary" >
                    <router-link to="/home">进入会员中心</router-link>
                </el-button>
            </div>
        </div> -->
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
    </div>
</template>

<script>
import validtion from './validation.js';
export default {
    data () {
        let {validatePass, validatePass2, validatePhone, validCode, validMessage} = validtion(this);
        return {
            refresCode: '',
            shortCode: '获取短信验证码',
            shortStatus: false,
            phoneStatus: false,
            active: 1,
            checked: false,
            ruleForm: {
                phone: '',  // 手机号
                valid: '', // 验证码
                message: '', // 短信验证码
                type: [] // 服务协议勾选框
            },
            rules: {
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    {
                        message: '手机号码格式不正确',
                        trigger: 'blur',
                        pattern: /^[1][3,4,5,7,8][0-9]{9}$/,

                    },
                    { validator: validatePhone, trigger: 'blur' },
                ],
                valid: [
                    { required: true, message: '请输入图中结果', trigger: 'blur' },
                    { validator: validCode, trigger: 'blur' },
                ],
                message: [
                    { required: true, message: '请输入手机验证码', trigger: 'blur' },
                    { validator: validMessage, trigger: 'submit' }
                ],
                type: [
                    { required: true, message: '请勾选确认已阅读服务协议', trigger: 'change' }
                ]
            },

            ruleForm2: {
                pass: '',
                pwd: '',
                username: ''
            },
            rules2: {
                pass: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                pwd: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 提交表单
        submitForm (formName) {
            const _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    _this.submitNext(_this.active);
                } else {
                    return false;
                };
            });
        },
        async submitNext (active) {
            let result;
            switch (active) {
                case 1:
                    let phone = this.ruleForm.phone;
                    result = await this.http.get('http://10.158.33.188:81/user/regphone?phone=' + phone)
                    break;
                case 2:
                    let ruleForm2 = this.ruleForm2;
                        result = await this.http.post('http://10.158.33.188:81/user/register', {
                            userInfo: JSON.stringify(ruleForm2)
                        }, {
                            headers: {
                                'Content-type': 'application/x-www-form-urlencoded',
                            }
                        });
                    break;
            };
            console.log(result);
            if (result.success) {
                this.active = active + 1;
            };
        },
        async getSMS () {
            this.sendSms = await this.http.get('http://10.158.33.188:81/user/sendSms?phone='+ this.ruleForm.phone);
            console.log(this.sendSms);
        },
        async reflshImg () {
            this.refresCode = await this.http.get('http://10.158.33.230/validCode/refresCode');
        },
        verifyingCode () {
            let timeNum = 5;
            this.getSMS();
            let timer = setInterval(() => {
                timeNum --;
                if (timeNum <= 0) {
                    clearInterval(timer);
                    this.shortCode = '获取短信验证码';
                } else {
                    this.shortCode = `${timeNum}s秒后可重发`;
                };
            }, 1000);
        }
    },
    async created () {
        try {
            this.reflshImg();
            // this.imgurl = await this.http.get('http://10.158.33.230/validCode/validimage');
            // console.log(this.imgurl);
        } catch (e) {
            console.log(e);
        };
        // this.http.get('http://10.158.33.230/validCode/refresCode').then(res => {
        //     console.log(res);
        // })

        // this.http.get('http://10.158.33.188/sso/user/register', {
        //     body: {
        //         "phone": '13031115726',
        //         "pwd": '5211314',
        //         "username": 'beis'
        //     }
        // }).then((result) => {
        //     console.log(result);
        // });
    }
};
</script>

<style lang="less">

    .regTop {
        padding-top: 30px;
        width: 980px;
        margin: 0 auto;
        height: 55px;
        padding-bottom: 35px;
        .logo {
            background-image: url(https://style.org.hc360.com/images/logo/logo280x48-reg.png);
            background-image: url(https://style.org.hc360.com/images/logo/logo280x48-reg.svg), none;
            display: block;
            background-repeat: no-repeat;
            height: 48px;
            width: 280px;
            float: left;
        }
    }
    // .regTop span {
    //     float: right;
    //     font-size: 14px;
    //     color: #333;
    //     padding-top: 10px;
    //     line-height: 20px;
    // }
    .regTop span a {
        color: #0055aa;
        text-decoration: none;
        padding-left: 5px;
    }
    .regRig {
        float: left;
        /* margin-left: 143px; */
        /* padding-top: 15px; */
        /* padding-bottom: 15px; */
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
    .el-form-item .el-form-item__label:before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
    }
    .valid-checkbox {
        margin-right: 10px;
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
