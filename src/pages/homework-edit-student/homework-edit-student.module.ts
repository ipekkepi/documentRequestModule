import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkEditStudentPage } from './homework-edit-student';

@NgModule({
  declarations: [
    HomeworkEditStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkEditStudentPage),
  ],
})
export class HomeworkEditStudentPageModule {}
