import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatTableModule, MatFormFieldModule],
    exports: [MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatTableModule, MatFormFieldModule],
})
export class MaterialModule { }