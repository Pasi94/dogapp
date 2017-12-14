import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatListModule],
    exports: [MatButtonModule, MatToolbarModule, MatListModule],
})
export class MaterialModule { }