import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables.component';

import { TablesRoutingModule } from './tables-routing.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    TablesRoutingModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule {}
