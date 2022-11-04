import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './store/reducers/customer.reducer';

import { UserEffects } from './store/effects/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './api/user.service';
import { UserReducer } from './store/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomersViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ customers: CustomerReducer, users: UserReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
