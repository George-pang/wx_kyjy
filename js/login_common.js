    /* 登录 清空按钮显示隐藏 */
    $('#telInput').on('focus', function () {
        setTimeout(function () {
            $('.l-tel-qingkong').css('display', 'inline-block');
        }, 100)
    })
    $('#telInput').on('blur', function () {
        setTimeout(function () {
            $('.l-tel-qingkong').css('display', 'none');
        }, 100)
    })
    $('#pswInput').on('focus', function () {
        setTimeout(function () {
            $('.l-psw-qingkong').css('display', 'inline-block');
        }, 100)
    })
    $('#pswInput').on('blur', function () {
        setTimeout(function () {
            $('.l-psw-qingkong').css('display', 'none');
        }, 100)
    })
    /* 登录 一键清空输入内容 */
    $('.l-tel-qingkong').on('click', function () {
        $('#telInput').attr('value', '').focus();
    })
    $('.l-psw-qingkong').on('click', function () {
        $('#pswInput').attr('value', '').focus();
    })
    /** 登录 判断手机号 */
    $('#telInput').on('focus', function () {
        $('#telInput').on('blur', function () {
            var valLoginput = $('#telInput').val();
            if (!(isNaN(valLoginput))) {
                setTimeout(function () {
                    if ($('#telInput').val() != '') {
                        isPoneAvailable($('#telInput'), $('.tc-tel'))
                    }
                }, 200)
            }
        })
    })

    /** 关闭登录 手机 弹窗 */
    closeTc($('.tc-click-l'), $('.tc-box-l'))
    closeTc($('.tc-click'), $('.tc-box-l'))
    /* 账号密码登录 登录按钮切换*/
    var value_1;
    var value_2;

    $('#telInput').on('focus', function () {
        timer_3 = setInterval(function () {
            value_1 = $('#telInput').val();
            value_2 = $('#pswInput').val();
            if (value_1 != '' && value_2 != '') {
                $('.l-denglu-btn').addClass('active');
            } else if (value_1 == '' || value_2 == '') {
                $('.l-denglu-btn').removeClass('active');
            }
        }, 100)
    });
    $('#pswInput').on('focus', function () {
        timer_3 = setInterval(function () {
            value_1 = $('#telInput').val();
            value_2 = $('#pswInput').val();
            if (value_1 != '' && value_2 != '') {
                $('.l-denglu-btn').addClass('active');
            } else if (value_1 == '' || value_2 == '') {
                $('.l-denglu-btn').removeClass('active');
            }
        }, 100)
    });

    /** 注册 完善必填项 */
    $('.l-denglu-btn').on('click', function () {
        if (value_1 == '' || value_2 == '') {
            $('.tc-rq-l').css('display', 'flex');
        }
    })

/****************************************************************************************************** */
/* 注册 清空按钮显示隐藏 */
$('.r-form-item input').on('focus', function () {
    var thisEle = $(this);
    setTimeout(function () {
        thisEle.next('.iconfont').css('display', 'inline-block');
    }, 100)
})
$('.r-form-item input').on('blur', function () {
    var thisEle = $(this);
    setTimeout(function () {
        thisEle.next('.iconfont').css('display', 'none');
    }, 100)
})

/* 注册 一键清空输入内容 */
$('.r-form-item .iconfont').on('click', function () {
    $(this).siblings('input').attr('value', '').focus();
})
/** 注册 验证注册手机号码 */
$('#telInput_r').on('focus', function () {
    $('#telInput_r').on('blur', function () {
        setTimeout(function () {
            if ($('#telInput_r').val() != '') {
                isPoneAvailable($('#telInput_r'), $('.tc-tel-r'));
            }
        }, 200)
    })
})

/** 注册 关闭 手机号弹窗 */
closeTc($('.tc-click-r'), $('.tc-box-r'))
/* 注册 注册按钮切换*/
var value_3;
var value_4;
var value_5;
var value_6;
var value_7;

$('.r-form-item .r-re').on('focus', function () {
    timer_4 = setInterval(function () {
        value_3 = $('#telInput_r').val();
        value_4 = $('#yzmInput_r').val();
        value_5 = $('#pswInput_r').val();
        value_6 = $('#rePswInput_r').val();
        value_7 = $('#tjrInput_r').val();
        if (value_3 != '' && value_4 != '' && value_5 != '' && value_6 != '' && value_7 != '') {
            $('.r-denglu-btn').addClass('active');
        } else if (value_3 == '' || value_4 == '' || value_5 == '' || value_6 == '' || value_7 == '') {
            $('.r-denglu-btn').removeClass('active');
        }
    }, 100)
});
/** 注册 验证两次密码输入 */
$('.r-psw').on('blur',function(){
    if(value_5 != '' && value_6 != ''){
        if(value_5 != value_6){
            $('.tc-psw-r').css('display', 'flex');
        }
    }
})
/** 注册 完善必填项 */
$('.r-denglu-btn').on('click', function () {
    if (value_3 == '' || value_4 == '' || value_5 == '' || value_6 == '' || value_7 == '') {
        $('.tc-rq-r').css('display', 'flex');
    }
})

/********************************************************************************************************************************* */
/* 忘记密码 清空按钮显示隐藏 */
$('.f-form-item .f-item-input').on('focus', function () {
    var thisEle = $(this);
    setTimeout(function () {
        thisEle.next('.iconfont').css('display', 'inline-block');
    }, 100)
})

$('.f-form-item .f-item-input').on('blur', function () {
    var thisEle = $(this);
    setTimeout(function () {
        thisEle.next('.iconfont').css('display', 'none');
    }, 100)
})

/* 忘记密码 一键清空输入内容 */
$('.f-form-item .iconfont').on('click', function () {
    $(this).siblings('.f-item-input').attr('value', '').focus();
})

/** 忘记密码 验证注册手机号码 */
$('#telInput_r').on('focus', function () {
    $('#telInput_r').on('blur', function () {
        setTimeout(function () {
            if ($('#telInput_r').val() != '') {
                isPoneAvailable($('#telInput_r'), $('.tc-tel-r'));
            }
        }, 200)
    })
})
