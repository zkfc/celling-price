layui.use(['layer', 'form', 'table'], function () {
    var layer = layui.layer,
        $ = layui.jquery,
        form = layui.form,
        table = layui.table,
        t;              //表格变量
    t = {
        elem: '#recharge-table',
        even: true,
        url: '/admin/sysRecharge/list',
        method: 'post',
        page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
            layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'], //自定义分页布局
            //,curr: 5 //设定初始在第 5 页
            groups: 6, //只显示 1 个连续页码
            first: "首页", //显示首页
            last: "尾页", //显示尾页
            limits: [3, 10, 20, 30]
        },
        width: $(parent.window).width() - 223,
        cols: [[
            {type: 'checkbox'},
            {field: 'customerId', title: '充值用户名称',align:'center',templet:'<div>{{ d.customer.customerName }}</div>'},
            {field: 'integral', title: '充值积分',align:'center'},
            {field: 'money', title: '充值金额',align:'center'},
            {field: 'createTime', title: '充值时间',align:'center'},
            // {title: '操作', fixed: 'right', align: 'center', toolbar: '#customerBar'}
        ]]
        ,
        done: function () {
            $("[data-field='id']").css('display','none');
            // $('table.layui-table thead tr th:eq(1)').addClass('layui-hide');
        }
    };
    table.render(t);

    //搜索
    form.on("submit(searchForm)", function (data) {
        t.where = data.field;
        table.reload('recharge-table', t);
        return false;
    });
});