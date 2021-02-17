import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent
  }
];

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class EmailModule {}
