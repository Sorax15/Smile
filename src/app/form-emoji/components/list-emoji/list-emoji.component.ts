import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji/data/data.interfaces';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-list-emoji',
  templateUrl: './list-emoji.component.html',
  styleUrls: ['./list-emoji.component.scss']
})
export class ListEmojiComponent {

  @Input() showListEmoji?: boolean;
  @Input() listEmoji?: EmojiData[];


  @Output() addEmoji: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addEmojiSmile($event: EmojiEvent): void {
    this.addEmoji.emit($event.emoji);
  }

}
