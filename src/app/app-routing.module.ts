import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    component: PageTwoComponent
  },
  {
    path: '',
    redirectTo: '/page-one',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
