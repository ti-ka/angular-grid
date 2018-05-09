import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgGridComponent } from './ng-grid/ng-grid.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgGridModule } from './ng-grid/ng-grid.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgGridModule
    ],
    providers: [
        HttpClient
    ],
    exports: [
        NgGridModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
