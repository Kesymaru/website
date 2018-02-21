import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-share-dialog',
  templateUrl: 'share.dialog.html',
})
export class ShareDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
