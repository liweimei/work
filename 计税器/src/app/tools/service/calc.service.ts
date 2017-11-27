import { Injectable } from '@angular/core';
// 用来提供 计算 的服务

import {SheBao,ShebaoService} from './shebao.service'

// 计算结果的接口
export interface CalcResult{
  total: number,  // 总工资
  shebao: SheBao, // 五险一金分别要交的钱
  shuiqian: number,
  shui: number,
  shifa: number
}

@Injectable()
export class CalcService {
  constructor(private getSheBao:ShebaoService) { }
  // 计算个税的方法
  doCalc(gongzi:number, jixiao:number, jiangjin:number):CalcResult{
    // 总工资
    let total = gongzi+jixiao+jiangjin;
    // 基准工资
    let jizhun = total<7662 ? total : 7662
    // 税前收入（扣除三险一金后的收入）
    let shuiqian = total - jizhun * (
      this.getSheBao.rate.yanglao + 
      this.getSheBao.rate.gongshang +
      this.getSheBao.rate.shengyu +
      this.getSheBao.rate.shiye +
      this.getSheBao.rate.yiliao +
      this.getSheBao.rate.gongjijin
    )
    // 计税工资（应纳税所得额）
    let jishui = shuiqian - 3500;
    // 计算税
    let shui = 0;
    if (jishui < 0) {
      shui = 0;
    }else if (jishui <= 1500) {
      shui = jishui*0.03
    }else if (jishui <= 4500) {
      shui = jishui*0.1-105
    }else if (jishui <= 9000) {
      shui = jishui*0.2-555
    }else if (jishui <= 35000) {
      shui = jishui*0.25-1005
    }else if (jishui <= 55000) {
      shui = jishui*0.3-2755
    }else if (jishui <= 80000) {
      shui = jishui*0.35-5505
    }else{
      shui = jishui*0.45-13505
    }
    // 实发工资
    let shifa = shuiqian - shui;

    return {
      total,shui,shuiqian,shifa,
      shebao:{
        yanglao: jizhun*this.getSheBao.rate.yanglao,
        yiliao: jizhun*this.getSheBao.rate.yiliao,
        gongshang: jizhun*this.getSheBao.rate.gongshang,
        shiye: jizhun*this.getSheBao.rate.shiye,
        shengyu: jizhun*this.getSheBao.rate.shengyu,
        gongjijin: jizhun*this.getSheBao.rate.gongjijin
      }
    }
  }

}
