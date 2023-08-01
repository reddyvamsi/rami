import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdulistComponent } from './produlist/produlist.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { EmployelistComponent } from './kudvenkat-tasks/employelist/employelist.component';
import { CreateemployelistComponent } from './kudvenkat-tasks/createemployelist/createemployelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ProdulistComponent,
    ProductCardComponent,
    EmployelistComponent,
    CreateemployelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
