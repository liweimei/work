import { Component, OnInit } from '@angular/core';

import {CalcResult,CalcService} from '../../tools/service/calc.service'

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  show:boolean = false;
  // 工资绩效奖金
  gongzi:number;
  jixiao:number;
  jiangjin:number;
  // 计算结果
  result:CalcResult;
  constructor(
    private calcService:CalcService
  ) { }

  ngOnInit() {
  }

  calc(){
    this.show = true;
    this.result = this.calcService.doCalc(this.gongzi,this.jixiao,this.jiangjin);
    console.log(this.result);
  }

}
