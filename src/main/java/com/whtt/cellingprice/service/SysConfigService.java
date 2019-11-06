package com.whtt.cellingprice.service;

import com.whtt.cellingprice.entity.pojo.SysConfig;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.constraints.NotNull;

/**
 * <p>
 * 系统配置表 服务类
 * </p>
 *
 * @author 
 * @since 2019-11-06
 */
public interface SysConfigService extends IService<SysConfig> {

    //更改扣除的用户积分信息
    public Boolean updateDeductIntegral(Integer deductIntegral);
}
