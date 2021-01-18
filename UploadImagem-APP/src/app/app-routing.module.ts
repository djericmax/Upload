import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImagesComponent } from './_components/UploadImages/UploadImages.component';


const routes: Routes = [
  {path: '', redirectTo: 'upload', pathMatch: 'full'},
  {path: 'upload', component: UploadImagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
