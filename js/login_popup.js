function alert_box(text, jump,type) {

    //text 展示提示语

    // jump  跳转连接 如不需要则传空

    // type 确定按钮的样式


    var html =
        '<div class="tc-rq-l tc-box-l" style="display:flex;" ><div class="tc-content-box"><div class="tc-content"><span class="tc-text">' +
        text + '</span><div class="tc-click-box"> <span id="close_btn" class="'+type+'">确定</span></div></div></div></div>';
    $('body').append(html);

    $('#close_btn').on('click', function() {
        if (jump !== '') {
            window.location.href = jump
        } else {
            $(".tc-rq-l").remove();
        }
    })
}
