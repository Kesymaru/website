import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

const imports = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatTooltipModule
];

@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialModule { }
