import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ResumeDialog } from "../resumeDialog/resumeDialog.component";

@Component({
  selector: 'aa-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  constructor(
    public dialog: MatDialog
  ) {}

  getResume(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '500px';

    const dialogRef = this.dialog.open(ResumeDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
