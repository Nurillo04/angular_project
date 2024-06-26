import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartsFormComponent } from './carts-form/carts-form.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: CartsFormComponent,
  },
  {
    path: 'carts',
    component: CartComponentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
