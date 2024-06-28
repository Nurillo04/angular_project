import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {
  MatFormField,
  MatInputModule,
  MatLabel,
} from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PipesPipe } from './pipes.pipe';

import { SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartsFormComponent } from './carts-form/carts-form.component';
import { BackgroundDirective } from './directives/background.directive';
import { IfDirective } from './directives/if.directive';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SidenavComponent,
    CartsFormComponent,
    PipesPipe,
    BackgroundDirective,
    IfDirective,
    CartComponentComponent,
    HomeComponent,
    NotFoundComponent,
    CartDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormField,
    MatLabel,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
