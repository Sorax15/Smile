import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormEmojiComponent } from './form-emoji.component';
import { ListEmojiComponent } from './components/list-emoji/list-emoji.component';
import { SaveListEmojiComponent } from './components/save-list-emoji/save-list-emoji.component';


@NgModule({
  declarations: [
    FormEmojiComponent,
    ListEmojiComponent,
    SaveListEmojiComponent
  ],
  imports: [
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EmojiModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule
  ],
  exports: [
    FormEmojiComponent
  ],
  providers: [
    DatePipe
  ]
})
export class FormEmojiModule {
}
