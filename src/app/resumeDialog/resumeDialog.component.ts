import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './resumeDialog.component.html',
})
export class ResumeDialog {

  constructor(
    public dialogRef: MatDialogRef<ResumeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ): void {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public download(): void {
    console.log("download resume")
  }

  public email(): void{
    console.log("email")
  }
}
