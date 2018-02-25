import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

const imports = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialModule { }
