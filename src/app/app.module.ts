import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEmojiComponent } from './form-emoji/form-emoji.component';
import { ListEmojiComponent } from './form-emoji/components/list-emoji/list-emoji.component';
import { SaveListEmojiComponent } from './form-emoji/components/save-list-emoji/save-list-emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEmojiComponent,
    ListEmojiComponent,
    SaveListEmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EmojiModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
