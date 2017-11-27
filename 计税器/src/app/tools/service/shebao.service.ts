import { Injectable } from '@angular/core';

// 专门用来提供 五险一金 的比例

// 定义一个接口限制五险一金比例的类型
export interface SheBao {
  yanglao: number,
  yiliao: number,
  shiye: number,
  gongshang: number,
  shengyu: number,
  gongjijin: number
}

@Injectable()
export class ShebaoService {
  public rate:SheBao = {
    yanglao: 0.08,
    yiliao: 0.02,
    shiye: 0.005,
    gongshang: 0,
    shengyu: 0,
    gongjijin: 0.05
  }
}
