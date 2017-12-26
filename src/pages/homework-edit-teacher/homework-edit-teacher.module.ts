import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkEditTeacherPage } from './homework-edit-teacher';

@NgModule({
  declarations: [
    HomeworkEditTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkEditTeacherPage),
  ],
})
export class HomeworkEditTeacherPageModule {}
