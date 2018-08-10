import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './resumeDialog.component.html',
})
export class ResumeDialog {

  public email: string = '';

  constructor(
    public dialogRef: MatDialogRef<ResumeDialog>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}


  public close(): void{
    this.dialogRef.close();
  }
}
