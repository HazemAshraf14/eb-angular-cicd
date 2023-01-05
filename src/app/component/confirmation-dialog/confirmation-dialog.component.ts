import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TagsInfoService } from 'src/app/service/tags-info.service';


@Component({
    selector: '',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

    sessionNote;
    sessionId;
    
    constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        private tagsInfoService: TagsInfoService,
        @Inject(MAT_DIALOG_DATA) private popupConfigData: any) {
        this.sessionNote = this.popupConfigData.session.note;
        this.sessionId = this.popupConfigData.session.sessionId;
    }
 

    ngOnInit() {
    }

    confirm() {
        console.log(this.sessionNote);
        let saveNoteObj = {
          sessionId: this.sessionId,
          noteText: this.sessionNote
        };
        this.tagsInfoService.setDeviceSessionNote(saveNoteObj).subscribe(
          (data) => {
            if (data.status == 201) {
                this.dialogRef.close("YES");
            }
          },
          (err) => {
            console.log(err);
            this.dialogRef.close("NO");
          }
        );
        
    }

    cancel() {
        this.dialogRef.close("NO");
    }

}