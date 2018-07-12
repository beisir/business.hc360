<template lang="html">
  <div class="">
    <div class="Login_hd">
      <h1><a href="http://www.hc360.com/" target="_blank"></a></h1>
      <div class="Login_hd_rig">
          <dl>
              <dt>关注慧聪微商城<br>领取物流大礼包</dt>
                <dd><img id="qrcode" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHK7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyelFLTmRPTlk4UVQxa28yN05yYzIAAgT4JUdbAwQgHAAA"></dd>
            </dl>
        </div>
    </div>
    <div class="ConTent-box">
      <div class="login-banner" style="background-color: #ff5555">
        <div class="w990">
          <div class="i-inner" style="background:url(https://img02.hc360.com/news/201806/201806081546157397.jpg) left top no-repeat"></div>
          <a href="#" class="spread" ></a>
        </div>
      </div>
      <div class="content">
        <div class="w990 login">
          <div class="vip-login-cont">
            <div class="login-box">
              <div class="loginBoxNew">
                <div class="logonTab">
                  <dl>
                    <dd :class="{'tabCur':show.SignInClass == 1}" @click="SignIn(1)">账户登录</dd>
                    <dd :class="{'tabCur':show.SignInClass == 2}" identify-id="scanToLogin" @click="SignIn(2)">扫码登录</dd>
                  </dl>
                </div>
                <div class="ture-line-login" v-show="show.SignInClass == 1">
                  <form id="loginForm" name="loginForm" method="" identify-id="formSubmit">
                    <input type="hidden" name="Passwd" id="Passwd">
                    <div class="item-vip-txt userHover">
                      <div class="error-warning">
                        <div class="icon-c">
                          <p></p>
                          <span identify-id="loginErrorInfo">用户名不能为空</span>
                        </div>
                      </div>
                      <div class="vip-login-inptxt">
                        <input type="text" name="LoginID" id="LoginID">
                        <label identify-id="accountHint" style="display: block;">用户名/邮箱/手机号</label>
                      </div>
                      <div class="entry-hint">
                        <a id="timeDown" href="#" class="forget-userName" style="display:none;width:118px;">90秒后重试</a>
                        <a id="forgetUname" href="#" target="_blank" class="forget-userName" data-useractivelogs="UserBehavior_sso_findname">忘记用户名？</a>
                        <a id="mpCode" href="#" class="forget-userName" style="display:none; color: #039;">发送动态口令</a>
                      </div>
                    </div>
                    <div class="item-vip-txt userHover">
                      <div class="User-passWord">
                        <input style="display:block;" type="password" name="" id="password" tabindex="2" autocomplete="off" autofill="off">
                        <label class="mg-l5">密码</label>
                      </div>
                      <div class="entry-hint">
                        <a href="#" class="forget-passWord">忘记密码？</a>
                      </div>
                    </div>
                    <div class="btm_submit">
                      <button class="J_Submit" tabindex="5">登 录</button>
                      <a class="J_RegBtn" href="#">立即注册</a>
                    </div>
                    <div class="Public">
                      <p>公告：慧聪已推出手机版~！快来体验！<a href="#" class="Moblie-hc"><s></s>手机慧聪</a></p>
                    </div>
                  </form>
                </div>
                <div class="ture-line-login" v-show="show.SignInClass == 2">
                  <p class="codePrompt">使用微信扫描下方二维码，安全登录慧聪账户</p>
                  <div class="codeImgCon">
                    <dl>
                      <dt style="left: 67px;">
                        <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGp7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyS1F6ZGRVTlk4UVQxalVxN3hyMWIAAgTwE0dbAwQIBwAA">
                        <div class="QR-code" style="display: block;">
                          <p class="codeBg"></p>
                          <div class="InvalidCon">
                            <p>二维码已失效</p>
                            <button type="submit">立即刷新</button>
                          </div>
                        </div>
                      </dt>
                      <dd style="display: block;">
                        <img src="">
                      </dd>
                    </dl>
                  </div>
                  <div class="ascendancyCon">
                    <span class="aIco1">免输入</span>
                    <span class="aIco2">更快</span>
                    <span class="aIco3">更安全</span>
                  </div>
                </div>
              </div>
              <div class="other-login">
                <div class="other-enter">
                  <p class="other-font">合作账户登录：</p>
                  <ul>
                    <li class="ico-qq" title="QQ登录"></li>
                    <li class="ico-sina" title="新浪微博登录"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="l-message">
      <div class="l-message-r">
        <a href="#"><s></s>登录页面，调查问卷</a>
      </div>
    </div>
    <div class="footer">
      <div class="footer_img" style="height: 90px;margin: 0 130px;overflow: hidden;width: 755px;">
        <a href="#" style="padding-right:25px;">
          <img src="355x70L.jpg">
        </a>
        <a href="#">
          <img src="355x70L.jpg">
        </a>
      </div>
      <div id="footer">
        <p>
          <a href="http://www.hc360.com" target="_blank">慧聪网首页</a> |
          <a href="http://hcgroup.hc360.com" target="_blank">关于慧聪</a> |
          <a href="http://hcgroup.hc360.com/hcjj_fzjg.htm" target="_blank">分支机构</a> |
          <a href="http://agent.hc360.com/" target="_blank">买卖通渠道</a> |
          <a href="http://www.hc360.com/ad/ad.htm" target="_blank">广告服务</a> |
          <a href="http://www.hc360.com/map-new.htm" target="_blank">网站导航</a> |
          <a href="http://job.hc360.com/" target="_blank">诚聘英才</a> |
          <a href="http://www.hc360.com/law.htm" target="_blank">法律声明</a> |
          <a href="mailto:b2b@hc360.com" target="_blank">意见投诉</a> |
          <a href="http://help.hc360.com" target="_blank">帮助中心</a> |
          <a href="http://www.hc360.com/link.htm" target="_blank">友情链接</a>
        </p>
        <P>
          ???????????400-6360-888 (?????) 010-80707000
          <br>
          ??????? ?????
          <a href="#">??ICP?010051??</a>
          ??澭?????????????????0029??
          <br>
          Copyright©2000-2018 hc360.com. All Rights Reserved
          <br>
        </P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: {
        SignInClass: 1
      }
    }
  },
  created() {
  },
  computed: {
  },
  methods: {
    SignIn (a) {
      this.show.SignInClass = a;
    }
  }
};
</script>

<style lang="css">
.footer{
  width: 990px;
  margin:0 auto;
  clear:both;
}
/* by zhaoj 2015-1-7*/
.Login_hd{
  width: 990px;
  height:67px;
  margin:0 auto;
  padding:10px 0 15px;/* overflow:hidden; */
}
.Login_hd h1{
  float:left;
}
.Login_hd h1 a{
  display:block;
  width: 280px;
  height: 48px;
  background-image: url(https://styles.hc360.com/images/logo/logo280x48-login.png);
  background-image: url(https://styles.hc360.com/images/logo/logo280x48-login.svg), none;
  background-repeat: no-repeat;
  overflow:hidden;
  margin-top: 12px;
}
.ConTent-box{
  z-index:5;
  width:100%;
  height:475px;
  position: relative;
}
.content{
  z-index:5;
  width:990px;
  height:475px;
  margin:0 auto;
  position: relative;
}
.w990{
  width:990px;
  margin:0 auto;
}
.ConTent-box .i-inner{
  position: relative;
  z-index:3;
  height: 475px;
}
.ConTent-box .login-banner{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 475px;
  background: #E93854 none repeat scroll 0% 0%;
}
.ConTent-box .login-banner .w990{
  position: relative;
}
.ConTent-box .login-banner .spread{
  display: block;
  position: absolute;
  top:20px;
  left:0px;
  width: 630px;
  height: 440px;
  border: medium none;
  outline: medium none;
  z-index:10;
}
.login{
  position:relative;
  left:0;
  top:0;
  height:475px;
  width:990px;
}
.login-ban-max iframe{
  width:600px;
  height:443px;
}
.vip-login-cont{
  width: 346px;
  position:relative;
  background:#fff;
  z-index:4;
  float:right;
  padding: 0px 0px;
  margin-top: 20px;
  height: 436px;
  font-family:"MicroSoft YaHei";
}
.vip-login-cont span.right-icon{
  width:60px;
  height:60px;
  display:block;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/right-b-icon1.png) center center no-repeat;
  position:absolute;
  right:0 ;
  bottom:0;
  cursor:pointer;
}
.login-box{
  width: 346px;
  z-index:4;
  height:auto;
  float:right;
}
.ture-line-login{
  height:auto;
  padding: 0 20px;
}
.item-vip-txt{
  width:306px;
  height:auto;
  clear:both;
  position:relative;
}
.error-warning{
  width:100%;
  height: 20px;
  background:#ffebeb;
  line-height: 20px;
  display:block;
  left:0px;
  position:absolute;
  top: -28px;
}
.error-warning{
  display:block;
}
.vip-login-inptxt,.User-passWord,.iphonNumb{
  width:306px;
  height:40px;
  font-size:12px;
  position:relative;
}
.vip-login-inptxt{
  margin-top: 34px;
}
.vip-login-inptxt input,.User-passWord input,.iphonNumb input{
  border:none;
  width:258px;
  height:18px;
  padding:10px 36px 10px 10px;
  border:1px solid #ccc;
  color:#333;
  font-size:14px;
  z-index:5px;
}
.vip-login-inptxt .item-txt-t,.User-passWord .item-txt-t,.ident-cord .item-txt-t,.iphonNumb .item-txt-t{
  color:#999 !important;
}
.vip-login-inptxt s,.User-passWord s,.iphonNumb s{
  position:absolute;
  display:block;
  width:18px;
  height:18px;
  right:10px;
  top:10px;
}
.vip-login-inptxt label,.User-passWord label{
  cursor:text;
  color:#999;
  transition: all 0.2s linear 0s;
}
.vip-login-inptxt label,.User-passWord label,.iphonNumb label{
  color: #999;
  font-size:14px;
  left:10px;
  position:absolute;
  top:9px;
}
.userHover .vip-login-inptxt input,.userHover .User-passWord input{
  border:1px solid #0090eb;
}
.userHover .vip-login-inptxt label{
  color:#0190eb;
  font-size:12px;
  left:10px;
  position:absolute;
  top:-8px;
  background:#fff;
  width:126px;
  height:18px;
  text-align:center;
  line-height:18px;
}
.userHover .User-passWord label{
  color:#0190eb;
  font-size:12px;
  left:10px;
  position:absolute;
  top:-8px;
  background:#fff;
  width:34px;
  height:18px;
  text-align:center;
  line-height:18px;
}
.userHover .User-passWord input{
  border:1px solid ##0190eb;
}
.userActive .vip-login-inptxt input,.userActive .User-passWord input{
  border:1px solid #d11120;
}
.userActive .vip-login-inptxt label{
  color: #d11120;
  font-size:12px;
  left:10px;
  position:absolute;
  top:-8px;
  background:#fff;
  width:126px;
  height:18px;
  text-align:center;
  line-height:18px;
}
.userActive .User-passWord label{
  color: #ee2e2c;
  font-size:12px;
  left:10px;
  position:absolute;
  top:-8px;
  background:#fff;
  width:34px;
  height:18px;
  text-align:center;
  line-height:18px;
}
.userActive .User-passWord input{
  border: 1px solid #ee2e2c;
}
.userHover .vip-login-inptxt s{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) no-repeat -20px -70px;
}
.userHover .vip-login-inptxt input,.userHover .ident-cord-ture input{
  border: 1px solid #61affd;
}
.userActive .User-passWord s{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) no-repeat -40px -92px;
}
.item-vip-txt .userHover input{
  border:1px solid #61affd;
}
.entry-hint{
  height:20px;
  padding-left:6px;
  width:300px;
  padding-bottom: 4px;
}
.entry-hint s{
  display:inline-block;
}
.icon-c{
  font-size:12px;
  width: 294px;
  overflow:hidden;
  float:left;
  margin-bottom:8px;
  padding-left:10px;
}
.icon-c p{
  width:16px;
  height:16px;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) no-repeat 0 -71px;
  margin-right:5px;
  margin-top: 3px;
}
.icon-c p,.icon-c span,.icon-c a{
  float:left;
}
.icon-c a:link,.icon-c a:visited{
  text-decoration:none;
  margin-left:7px;
  color:#003399;
}
.icon-c span{
  color: #d11120;
}
.forget-userName:link,.forget-userName:visited,.forget-passWord:link,.forget-passWord:visited{
  display:block;
  text-indent:11px;
  font:normal 12px/16px "MicroSoft YaHei";
  float:right;
  line-height:22px;
  text-decoration:none;
  color:#999;
  text-align:right;
}
.forget-userName{
  width:83px;
}
.forget-passWord{
  width:72px;
}
.ident-cord{
  width:306px;
  height:34px;
}
.ident-cord-ture{
  position:relative;
  float:left;
}
.ident-cord input{
  width:73px;
  height:16px;
  border:1px solid #ccc;
  text-align:left;
  color:#333;
  padding:8px;
  font-size:14px;
}
.Tiprure{
  background: url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) no-repeat 0 -90px;
  display:block;
  height:18px;
  float:left;
  width:18px;
  overflow:hidden;
  margin:10px 0 0 10px;
  text-decoration:none;
}
.ident-cord-ture label{
  position:absolute;
  left:10px;
  top:10px;
  font-size:14px;
  color:#999;
}
.ident-cord-img,.ident-cord-r{
  float:left;
  margin-left:5px;
}
.ident-cord-img{
  width:84px;
  height:34px;
  cursor:pointer;
}
.ident-cord-r{
  margin-top:10px;
}
.ident-cord-r a{
  text-decoration:none;
  color:#666;
}
.ident-cord-r a span{
  color:#999;
}
.safe-login{
  margin-bottom:5px;
}
.safe-login label{
  display:block;
  line-height:22px;
  color:#999;
  cursor:pointer;
  width:100px;
}
.safe-login label input{
  vertical-align:middle;
  margin:-2px 4px 0 0;
}
.btm_submit{
  padding: 5px 0 5px 0;
  margin-top: 10px;
}
.btm_submit button,.J_Submit{
  width:306px;
  height:40px;
  text-align:center;
  font:20px/40px "MicroSoft YaHei";
  color:#fff;
  border:0;
}
.btm_submit button{
  background: #d11120;
}
.J_Submit{
  background:#d11120;
}
.other-enter{
  height:60px;
  overflow:hidden;
  padding:0;
  float: left;
}
.Public{
  font:normal 12px/35px "MicroSoft YaHei";
  color:#666;
}
.Public p{
  height:35px;
  width:306px;
  background: url(https://styles.hc360.com/images/my/images/regist/login-2016/telImgBot.png);
  text-indent: 400px;
  overflow: hidden;
}
.Moblie-hc:link,.Moblie-hc:visited{
  display:inline-block;
  font-size:12;
  text-decoration:none;
  margin-left:4px;
}
.Moblie-hc s{
  display:inline-block;
  width:11px;
  height:14px;
  margin:0 4px 3px 0;
  vertical-align:middle;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) no-repeat -2px -154px;
}
.other-login{
  overflow:hidden;
  height: 40px;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  border-top: 1px solid #ddd;
  width: 306px;
}
.other-font{
  font-size: 14px;
  color: #333;
  line-height:24px;
  margin-top: 8px;
  float: left;
}
.other-login ul{
  margin: 7px 0;
  float: left;
}
.other-login ul li{
  cursor:pointer;
  width:24px;
  height:24px;
  margin-right:12px;
  float:left;
}
.other-login .ico-qq{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico1.png) 0 0;
}
.other-login .ico-wx{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico1.png) -38px 0;
}
.other-login .ico-sina{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico1.png) -76px 0;
}
.other-login .ico-wb{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico1.png) -116px 0;
}
.other-login .ico-qq:hover{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico.png) 0 0;
}
.other-login .ico-wx:hover{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico.png) -38px 0;
}
.other-login .ico-sina:hover{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico.png) -76px 0;
}
.other-login .ico-wb:hover{
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/login-ico.png) -116px 0;
}
.entry-hint a:hover,.vip-login-t a:hover{
  color:#cd2e21;
  text-decoration:underline;
}
/*QR-code*/
.QR-code{
  width: 100%;
  padding:55px 0px 80px;
  display:none;
  position: absolute;
  top: 0;
  left: 0;
  height: 178px;
}
.QR-code .title{
  font-size:14px;
  color:#999;
  text-align:center;
}
.QR-code .pic-help{
  position:relative;
}
.QR-code .pic-help .hide-pic{
  position:absolute;
  left:0;
  top:0;
  display:none;
}
.QR-code .pic{
  width:150px;
  height:150px;
  padding:15px;
  border:1px solid #ccc;
  text-align: center;
  margin:20px auto;
}
.QR-code span.help{
  width:100px;
  height:20px;
  display: block;
  text-align: center;
  line-height:20px;
  margin:0 auto;
  cursor:pointer;
}
.QR-code span.right-icon2{
  width:60px;
  height:60px;
  display:block;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/right-b-icon2.png) center center no-repeat;
  position:absolute;
  right:0 ;
  bottom:0;
  cursor:pointer;
}
.l-message{
  width:990px;
  height:40px;
  line-height:40px;
  margin:0 auto;
}
.l-message .l-message-r{
  float:right;
  cursor:pointer;
}
.l-message .l-message-r a{
  text-decoration:none;
  color:#666;
}
.l-message .l-message-r s{
  width:16px;
  height:16px;
  display:inline-block;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/new_login_bg.png) 0 -125px no-repeat;
  margin:13px 10px 0 0;
  float:left;
}
/*footer*/
.bottom{
  width:100%;
  margin:0 auto;
  border-top:1px solid #dfdfdf;
}
.bottom .footer{
  padding:10px 0 15px;
  border-top: 1px solid #fff;
  background: #f6f6f6;
}
.footer p a{
  text-decoration:none;
  color:#333;
}
/*right-icon*/
.login .btn-2login, .login .btn-2qrcode{
  display: block;
  width: 60px;
  height: 60px;
  line-height: 99em;
  position: absolute;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  background: transparent url(https://styles.hc360.com/images/my/images/regist/login-2016/login-qricon.png) no-repeat scroll 0% 0%;
  transition: background-position 0.2s cubic-bezier(0.25, 0.5, 0.5, 0.9) 0s;
}
.login .btn-2qrcode{
  background-position: -60px 0px;
}
.login .btn-2login{
  background-position: 0px -60px;
}
.codeInvalid{
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  z-index:50;
  font-family:MicroSoft YaHei;
}
.codeBg{
  filter: alpha(opacity=60);
  -moz-opacity: 0.6;
  opacity: 0.6;
  background: #000;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.InvalidCon{
  position:absolute;
  top: 45px;
  left:20px;
  right:20px;
  text-align:center;
  font-weight:bold;
}
.InvalidCon em{
  display:block;
  margin:0 auto;
  height:47px;
  width:47px;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/loginIco.png);
}
.InvalidCon p{
  font-size: 16px;
  color: #fff;
  line-height: 50px;
}
.InvalidCon button,.resetBox a{
  height: 30px;
  display: block;
  line-height: 30px;
  border:none;
  background: #ee2e2c;
  width: 80px;
  font-size: 14px;
  color:#fff;
  font-weight:normal;
  font-family:MicroSoft YaHei;
  text-align:center;
  text-decoration:none;
  cursor:pointer;
  border-radius: 3px;
  margin: 0 auto;
}
/* 2016.12.14 tian jia wei xin deng lu */
.QR-code{
  padding: 0;
}
/* 2017-8-10 tian jia ke fu dian hua yang shi */
.logonTab{
  height:48px;
  border-bottom:1px solid #ddd;
  overflow:hidden;
}
.logonTab dd{
  float:left;
  width:50%;
  margin-left:-1px;
  line-height:20px;
  border-left:1px solid #ddd;
  height:20px;
  margin-top:14px;
  font-size:18px;
  text-align:center;
  color:#333;
  cursor:pointer;
}
.logonTab dd.tabCur,.logonTab dd:hover{
  color:#ee2e2c;
  font-weight:bold;
}
.other-login a.regBtn{
  float:right;
  background: url(https://styles.hc360.com/images/my/images/regist/login-2016/icoNew.png) 51px 4px no-repeat;
  margin-top: 40px;
  padding-right: 15px;
  color: #ee2e2c;
  text-decoration: none;
}
.codePrompt{
  line-height:50px;
  padding-bottom:10px;
  font-size:14px;
  text-align:center;
}
.codeImgCon{
  width:306px;
  float:left;
  position:relative;
  margin-left: -5px;
  height: 180px;
}
.codeImgCon dt{
  float:left;
  width: 178px;
  height: 178px;
  border:1px solid #ddd;
  padding: 0;
  float:left;
  position: absolute;
  left: 67px;
}
.codeImgCon dt img{
  width:178px;
  height:178px;
}
.codeImgCon dd{
  float:left;
  position:absolute;
  right: -20px;
  top: -10px;
  display: none;
}
.ascendancyCon{
  padding-top:30px;
 width:306px;
 clear:both;
  height:25px;
 text-align:center;
 color:#999;
 font-size:12px;
 line-height:26px;
}
.ascendancyCon span{
  display:inline-block;
  text-align:left;
  padding-left:35px;
  background:url(https://styles.hc360.com/images/my/images/regist/login-2016/icoNew.png) no-repeat;
  padding-right: 13px;
}
.ascendancyCon span.aIco1{
  background-position:-94px -69px;
}
.ascendancyCon span.aIco2{
  background-position:-94px 1px;
}
.ascendancyCon span.aIco3{
  background-position:-94px -34px;
}
.btm_submit button:hover{
  background:#d11120;
}
.other-login a.regBtn:hover{
  color:#d11120;
}
.btm_submit a.J_RegBtn{
  width: 306px;
  height: 38px;
  text-align:center;
  font: 20px/38px "MicroSoft YaHei";
  margin-top:10px;
  background: #fff;
  border: 1px solid #d11120;
  color: #d11120;
  display: block;
  text-decoration: none;
  cursor: pointer;
}
.btm_submit a.J_RegBtn:hover{
  background: #d11120;
  color:#fff;
}
.Login_hd_rig{
  float:right;
}
.Login_hd_rig dt{
  float:left;
  font-size: 14px;
  color: #333;
  padding: 14px 20px;
}
.Login_hd_rig dd{
  float:left;
  width: 75px;
  height: 75px;
  box-shadow: 0 0 12px #d5d5d5;
}
.Login_hd_rig dd img{
  width:75px;
  height:75px;
}
.footer_img a{
  float:left;
  width: 355px;
  height: 70px;
}
#footer{
  margin-top: 10px;
  border-top: 1px solid #B0B0B0;
  padding-top: 8px;
  line-height: 22px;
  text-align: center;
}
#footer p a:hover{
  color: #C00
}
</style>
