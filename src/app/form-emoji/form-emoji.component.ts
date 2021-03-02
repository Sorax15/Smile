import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji/data/data.interfaces';

import { ListEmoji } from './consts/listEmoji.const';
import { ISaveStore } from './types/saveStore.interface';

@Component({
  selector: 'app-form-emoji',
  templateUrl: './form-emoji.component.html',
  styleUrls: ['./form-emoji.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEmojiComponent implements OnInit {

  /** show list Smile */
  showListEmoji = false;
  /** list current smiles */
  listEmoji: EmojiData[] = ListEmoji;
  /** save story */
  saveStoreList: ISaveStore[] = [];
  /** form for smiles */
  form!: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  addEmoji(emojiData: EmojiData): void {
    const textArea = document.querySelector('textarea');
    if (textArea) {
      const startCursor = textArea.selectionStart;
      const end = textArea.selectionEnd;
      textArea.value = textArea.value.substring(0, startCursor) + emojiData.native + textArea.value.substring(end);
      this.form.controls.message.setValue(textArea.value);
      textArea.focus();
    }
  }

  saveStory(): void {
    const result = {
      data: this.datePipe.transform(new Date(), 'MMM d, y, h:mm:ss a'),
      message: this.form.controls.message.value
    };
    this.saveStoreList.push(result);

    this.changeShowList();
  }

  changeShowList(): void {
    this.showListEmoji = !this.showListEmoji;
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      message: new FormControl('', Validators.required),
    });
  }

}
