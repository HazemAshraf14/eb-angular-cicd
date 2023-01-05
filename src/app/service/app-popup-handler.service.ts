import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../component/confirmation-dialog/confirmation-dialog.component';
import { DeleteConfirmationDialogComponent } from '../component/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AppPopupHandlerService {

  constructor(private dialogService: MatDialog) {

   }

public openConfirmationDialog(session) {
  let dialogConfig = this.initPopupConfig({ 'session': session});
  return this.dialogService.open(ConfirmationDialogComponent, dialogConfig);
}

public openDeleteConfirmationDialog(msg,action) {
  let dialogConfig = this.initPopupConfig({ 'message': msg,'action':action});
  return this.dialogService.open(DeleteConfirmationDialogComponent, dialogConfig);
}

private initPopupConfig(data: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = "30%"; 
    dialogConfig.minHeight = "30%";
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    return dialogConfig;
}

}
