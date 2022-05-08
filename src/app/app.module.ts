import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' ;

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './layouts/index.component';
import { PageNotFoundComponent } from './layouts/page-not-found.component';
import { TreeComponent } from './tree/tree.component';
import { ChangeColorDirective } from './change-color.directive';
import { FormComponent } from './form/form.component';
import { WellsComponent } from './wells/wells.component';
import { WellComponent } from './well/well.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
     HeaderComponent,
     FooterComponent,
     AboutComponent,
     MainComponent,
     IndexComponent,
     PageNotFoundComponent,
     TreeComponent,
     ChangeColorDirective,
     FormComponent,
     WellsComponent,
     WellComponent,
     LoginComponent,
     NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
