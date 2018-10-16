//表单输入验证函数封装   
    
    // 验证姓名
    function isName(name) {
        var pattern = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
        return pattern.test(name);
    }
    // 验证年龄 0~99岁
        function isAge(age) {
        var pattern = /^\d{1,2}$/;
        return pattern.test(age);
    }
    // 验证性别
        function isSex(sex) {
        var pattern = /^(男|女)$/;
        return pattern.test(sex);
    }
    // 验证身高
        function isHeight(height) {
        var pattern = /^\d{1,3}$/;
        return pattern.test(height);
    }
     // 验证体重
        function isWeight(weight) {
        var pattern = /^\d{1,3}$/;
        return pattern.test(weight);
    }
    // 验证手机号
    function isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
    }
    // 验证身份证
    function isCardNo(card) {
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return pattern.test(card);
    }
        