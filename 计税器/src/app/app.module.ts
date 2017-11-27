import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';

// 导入工具模块
import {ToolsModule} from './tools/tools.module'

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    // 注入工具模块，工具模块中的指令、服务等会自动加入进来
    ToolsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
