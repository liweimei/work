import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 创建一个工具模块，把我们用到的工具（指令、服务、管道）先在工具模块中进行声明、注入等操作，最后把工具模块导入到根模块中使用，避免根模块导入的内容过于零散，不利于后期优化
import {ShowDirective} from './directive/show.directive'

import {ShebaoService} from './service/shebao.service';
import {CalcService} from './service/calc.service'

@NgModule({
  declarations:[
    ShowDirective
  ],
  exports:[
    ShowDirective
  ],
  providers: [CalcService,ShebaoService]
})
export class ToolsModule { }
