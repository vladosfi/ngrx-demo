import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './state/customer/customer.reducer';

import { UserEffects } from './state/user/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { UserReducer } from './state/user/user.reducer';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ customers: CustomerReducer, users: UserReducer }),
    EffectsModule.forRoot([UserEffects]),
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
