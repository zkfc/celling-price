package com.whtt.cellingprice.task;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.whtt.cellingprice.common.Constant;
import com.whtt.cellingprice.entity.pojo.SysAccount;
import com.whtt.cellingprice.service.SysAccountService;
import com.whtt.cellingprice.service.impl.SysAccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.List;


/**
 * 账号定时器
 */
@Configuration
@EnableScheduling
public class AccountCountScheduleTask {

    @Autowired
    private SysAccountService sysAccountService;

    /**
     * 凌晨1点重制次数
     */
    @Scheduled(cron = "0 0 1 * * *")
    private void configureTasks() {
        QueryWrapper<SysAccount> queryWrapper = new QueryWrapper<>();
        queryWrapper.lt("count", 4);
        SysAccountServiceImpl.index = 1;

        List<SysAccount> accountList = sysAccountService.list(queryWrapper);
        if (null != accountList) {
            accountList.forEach(a -> {
                a.setCount(4);
                a.setStatus(Constant.ACCOUNT_STATUS_LOGIN);
                a.setMsg("登录成功");
                a.updateById();
            });
        }
    }
}
