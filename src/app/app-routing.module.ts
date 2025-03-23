import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
   { path: 'home', redirectTo: '/', pathMatch: 'full' }
];

//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'contact', component: ContactComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
