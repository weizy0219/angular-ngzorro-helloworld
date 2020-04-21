import { NgModule } from '@angular/core';
// NOTE: It is very important to import CommonModule if you want to use Angular inner commands, pipes and other functions.
import {CommonModule} from '@angular/common';

// NOTE: If you want to bind data using [(ngModel)], it is necessary to import FormsModule first
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [DashboardRoutingModule,
    CommonModule,
    FormsModule,
    NzInputModule,
    NzListModule,
    NzButtonModule,
    NzSpaceModule,
    HttpClientModule],
  declarations: [DashboardComponent, HeroDetailComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
