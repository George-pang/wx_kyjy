
/** 判断手机号码 */
function isPoneAvailable($phoneInput/*, $tanchuang*/) {
    var myreg = /^[1][34578][0-9]{9}$/;
    if (!myreg.test($phoneInput.val())) {
//          $tanchuang.css('display', 'flex');
        return false;
    } else {
        return true;
    }
}

/*判断身份证号码*/
function isCardNum($cardInput,$tanchuang) {
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    // return pattern.test(card);
    if (!pattern.test($cardInput.val())){
        $tanchuang.css("display","flex");
        return false;
    }else {
        return true;
    }
}

/** 关闭弹窗 */
function closeTc($btn, $tanchuang) {
    $btn.on('click', function () {
        $tanchuang.css('display', 'none');
        return false;
    })
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
