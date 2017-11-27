import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ShebaoService,SheBao} from '../../tools/service/shebao.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  shebao:SheBao;

  constructor(private shebaoService:ShebaoService) { }

  ngOnInit() {
    // 得到五险一金的比例
    this.shebao = this.shebaoService.rate;
  }

  // @Input() 装饰器，接受外部输入的值
  // @Output() 装饰器，向外部输出内容

  // EventEmitter 向父组件发射事件
  @Output()
  public ratechange = new EventEmitter<any>();

  // 改变利率的时候。通知个税的计算方法，重新计算
  changeRate(){
    // 发射 ratechange 事件
    this.ratechange.emit();
  }
}
