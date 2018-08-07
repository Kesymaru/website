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
  MatTooltipModule,
  MatChipsModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatSlideToggleModule
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
  MatTooltipModule,
  MatChipsModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatSlideToggleModule
];

@NgModule({
  imports: imports,
  exports: imports,
})
export class MaterialModule { }
