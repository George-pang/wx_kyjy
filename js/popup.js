function alert_box(type, text, jump) {
    //type 弹窗外层包裹的类名

    //text 弹窗提示语

    // jump  跳转链接 如不需要则传空

    //设置未传实参时的初始值
    type = type || "tc-container";
    text = text || "请完善必填项！";
    jump = jump || "";

    var html =
        '<div class="' + type + '" style="display:flex;" ><div class="tc-content-box"><div class="tc-content"><span class="tc-text">' +
        text + '</span><div class="tc-click-box"> <span id="close_btn" class="tc-click">确定</span></div></div></div></div>';
    $('body').append(html);
    $('#close_btn').on('click', function () {
        if (jump !== '') {
            window.location.href = jump;
        } else {
            $("." + type + "").remove();
        }
    })
}
