layui.use(['form', 'layer', 'jquery'], function () {
    var form = layui.form,
        layer = layui.layer,
        $ = layui.jquery;

    //添加用户
    form.on('submit(addCustomer)', function (data) {
        var loadIndex = layer.load(2, {
            shade: [0.3, '#333']
        });
        $.ajax({
            type: "POST",
            url: "/admin/sysCustomer/saveAdd",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data.field),
            success: function (res) {
                layer.close(loadIndex);
                if (res.code == 200) {
                    parent.layer.msg("用户添加成功！", {time: 1000}, function () {
                        //刷新父页面
                        parent.location.reload();
                    });
                } else {
                    layer.msg(res.msg);
                }
            }
        });
        return false;
    });
});