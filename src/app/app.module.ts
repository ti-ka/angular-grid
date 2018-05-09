import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgGridComponent } from './ng-grid/ng-grid.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        NgGridComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        HttpClient
    ],
    exports: [NgGridComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
