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
            if (value) {
                try {
                    let res = await _this.http.get('http://10.158.33.188:81/user/checkphone?phone=' + value)
                    res.success ? callback() : callback(new Error('手机号码验证失败'));
                } catch (e) {
                    callback(new Error('获取手机号失败'));
                };
            } else {
                callback(new Error('err'));
            }
        },
        validCode: async (rule, value, callback) => {
            try {
                let res = await _this.http.get('http://10.158.33.230/validCode/checkValidCode/' + value);
                res.success ? callback() : callback(new Error('图形验证码错误'));
                _this.shortStatus = res.success;
            } catch (e) {
                callback('失败')
                _this.shortStatus = false;
            };
        },
        validMessage: async (rule, value, callback) => {
            let phone = _this.ruleForm.phone;
            try {
                let res = await _this.http.get(`http://10.158.33.188:81/user/validateCode?phone=${phone}&code=${value}`);
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
        }
    }
};
