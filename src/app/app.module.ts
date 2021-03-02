import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEmojiModule } from './form-emoji/form-emoji.module';
import { FormEmojiService } from './form-emoji/services/form-emoji.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormEmojiModule
  ],
  providers: [ FormEmojiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
