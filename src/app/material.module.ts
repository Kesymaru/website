import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatChipsModule
} from '@angular/material';

const imports = [
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatChipsModule
];

@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialModule { }
