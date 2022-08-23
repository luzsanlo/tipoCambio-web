import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {MonedaService} from "./services/moneda.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CreateMonedaComponent } from './components/modal/moneda/create-moneda/create-moneda.component';
import {CommonModule} from "@angular/common";
import {InputTextModule} from 'primeng/inputtext';
import {TipoCambioService} from "./services/tipo-cambio.service";
import { TipoCambioComponent } from './components/modal/tipo-cambio/tipo-cambio/tipo-cambio.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    CreateMonedaComponent,
    TipoCambioComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PanelModule,
        CardModule,
        TableModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        ButtonModule,
        DynamicDialogModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        InputNumberModule,
    ],
  providers: [
    MonedaService,
    TipoCambioService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateMonedaComponent,
  ]
})
export class AppModule { }
