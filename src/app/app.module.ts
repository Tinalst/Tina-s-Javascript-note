import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SenceComponent } from './sence/sence.component';
import { ThirdComponent } from './third/third.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { JsonModelComponent } from './json-model/json-model.component';
import {CharacterComponent} from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SenceComponent,
    ThirdComponent,
    FastFoodComponent,
    JsonModelComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
