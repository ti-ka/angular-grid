import { NgModule } from '@angular/core';
import { NgGridComponent } from './ng-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    exports: [
        NgGridComponent
    ],
    declarations: [
        NgGridComponent
    ],
    providers: [],
})

export class NgGridModule {
}
