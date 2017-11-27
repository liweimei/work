import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import {CalcComponent} from './components/calc/calc.component'

interface TabItem {
  title:string,
  icon:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // 可以只作用于当前组件，也可以作用于全局
  styleUrls: ['./app.component.css'],
  // 组件的css样式不受外部的影响
  // encapsulation:ViewEncapsulation.Emulated
  // 组件的css样式对所有组件生效
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  // tab的索引值，默认选中第一项
  public tabIndex:number = 0;
  // 底部导航栏的图标和数组
  public tabItems:TabItem[] = [
    {
      title:'计算',
      icon:'fa fa-calculator'
    },{
      title:'设置',
      icon:'fa fa-cog'
    },{
      title:'关于',
      icon:'fa fa-tasks'
    }
  ]

  // ViewChild 声明一个对子元素的引用，需要一个参数来选择元素，根据传递的参数类型来获取匹配的子元素
  @ViewChild(CalcComponent)
  private calcCom:CalcComponent;

  changeFromSettings(){
    console.log('监听了 ratechange 事件');
    // calc()
    // 调用 calc() 重新计算
    this.calcCom.calc();
  }
}
