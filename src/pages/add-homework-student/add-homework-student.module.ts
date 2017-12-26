import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHomeworkStudentPage } from './add-homework-student';

@NgModule({
  declarations: [
    AddHomeworkStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHomeworkStudentPage),
  ],
})
export class AddHomeworkStudentPageModule {}
