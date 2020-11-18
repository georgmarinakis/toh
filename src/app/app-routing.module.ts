import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Routing functionality
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //make the app navigate to the dashboard automatically
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)], //  the initial navigation based on the current browser URL
  exports: [RouterModule]
})
export class AppRoutingModule { }


