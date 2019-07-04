import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsAndCondtionsPage } from './terms-and-condtions.page';

const routes: Routes = [
  {
    path: '',
    component: TermsAndCondtionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermsAndCondtionsPage]
})
export class TermsAndCondtionsPageModule {}
