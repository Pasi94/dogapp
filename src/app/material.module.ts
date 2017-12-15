import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatListModule,MatGridListModule],
    exports: [MatButtonModule, MatToolbarModule, MatListModule,MatGridListModule],
})
export class MaterialModule { }