import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: 'details',        component: DetailsComponent },
  { path: '',   redirectTo: '/details', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}