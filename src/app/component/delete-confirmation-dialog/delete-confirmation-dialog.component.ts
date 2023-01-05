import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: '',
    templateUrl: './delete-confirmation-dialog.component.html',
    styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

    message;
    action;
    
    constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private popupConfigData: any) {
        this.message = this.popupConfigData.message;
        this.action = this.popupConfigData.action;
    }
 

    ngOnInit() {
    }

    confirm() {
        this.dialogRef.close("YES");
    }

    cancel() {
        this.dialogRef.close("NO");
    }

}