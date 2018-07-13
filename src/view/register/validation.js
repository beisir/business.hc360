export default (_this) => {

    return {
        validatePass: (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (_this.ruleForm2.pwd !== '') {
                    _this.$refs.ruleForm2.validateField('pwd');
                };
                callback();
            }
        },
        validatePass2: (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== _this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            };
        },
        validatePhone: async (rule, value, callback) => {
            if (value.trim()) {
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (reg.test(value)) {
                    try {
                        let res = await _this.http.get('//newmyweb.hc360.com/user/checkphone?phone=' + value)
                        res.success ? callback() : callback(new Error(res.returnMsg));
                        _this.phoneStatus = !res.success;
                    } catch (e) {
                        callback(new Error('获取手机号失败'));
                        _this.phoneStatus = true;
                    };
                } else {
                    _this.phoneStatus = true;
                    callback(new Error('手机号码格式不正确'));
                };
            } else {
                callback(new Error('请输入手机号'));
                _this.phoneStatus = true;
            }
        },
        validCode: async (rule, value, callback) => {
            if (value.trim()) {
                try {
                    let res = await _this.http.get('//newmyweb.hc360.com/validCode/checkValidCode/' + value);
                    res.success ? callback() : callback(new Error('图形验证码错误'));
                    if (!_this.phoneStatus) {
                        _this.shortStatus = !res.success;
                    } else {
                        _this.shortStatus = true;
                    };
                } catch (e) {
                    callback('获取图形验证码失败');
                    _this.shortStatus = true;
                };
            } else {
                callback('请输入图中结果');
                _this.shortStatus = true;
            }
        },
        validMessage: async (rule, value, callback) => {
            let phone = _this.ruleForm.phone;
            try {
                let res = await _this.http.get(`//newmyweb.hc360.com/user/validateCode?phone=${phone}&code=${value}`);
                if (res.success) {
                    callback();
                } else {
                    callback(new Error('短信验证码错误'));
                    // _this.reflshImg();
                    // _this.shortStatus = false;
                    // _this.ruleForm.message = '';
                }
            } catch (e) {
                callback(new Error('短信验证码获取失败'));
                // _this.ruleForm.message = '';
            };
        },
        validateUsername: async (rule, value, callback) => {
            let username = _this.ruleForm2.username;
            try {
                let res = await _this.http.get(`//newmyweb.hc360.com/user/checkusername?username=${username}`);
                if (res.success) {
                    callback();
                } else {
                    callback(new Error('用户名验证失败'));
                }
            } catch (e) {
                callback(new Error('用户名验证失败'));
            };
        }
    }
};
