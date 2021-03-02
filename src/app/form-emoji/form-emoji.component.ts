import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji/data/data.interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { ListEmoji } from './constants/list-emoji.constant';
import { ISaveStore } from './interfaces/save-store.interface';
import { FormEmojiService } from './services/form-emoji.service';


@Component({
  selector: 'app-form-emoji',
  templateUrl: './form-emoji.component.html',
  styleUrls: ['./form-emoji.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEmojiComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  /** process send message */
  isSendMessage = false;
  /** show list Smile */
  showListEmoji = false;
  /** list current smiles */
  listEmoji: EmojiData[] = ListEmoji;
  /** save story */
  saveStoreList: ISaveStore[] = [];
  /** form for smiles */
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private formEmojiService: FormEmojiService,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe.complete();
    this.unsubscribe.next();
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
    this.isSendMessage = true;
    this.formEmojiService.saveMessage
    (this.datePipe.transform(new Date(), 'MMM d, y, h:mm:ss a'), this.form.controls.message.value)
      .pipe(takeUntil(this.unsubscribe)).subscribe((data) => {
        this.saveStoreList.push(data[0]);
        this.form.controls.message.setValue('');
        this.isSendMessage = false;
        this.changeDetection.detectChanges();
    },
      (error) => this.handlerError(error));
  }

  changeShowList(): void {
    this.showListEmoji = !this.showListEmoji;
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      message: new FormControl(null, Validators.required),
    });
  }

  private handlerError(error: HttpErrorResponse): void {
    if (error.error && error.message) {
      console.error(error.message);
    }
  }

}
