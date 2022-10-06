import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/main/home/home.component';
import { TechnicComponent } from "./views/main/technic/technic.component";
import { AboutUsComponent } from "./views/main/about-us/about-us.component";
import { ContactComponent } from "./views/main/contact/contact.component";

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'technic', component:TechnicComponent },
  { path: 'about-us', component:AboutUsComponent },
  { path: 'contact', component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
