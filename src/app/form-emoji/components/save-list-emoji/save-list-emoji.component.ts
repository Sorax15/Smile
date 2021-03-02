import { Component, Input } from '@angular/core';

import { ISaveStore } from '../../interfaces/save-store.interface';

@Component({
  selector: 'app-save-list-emoji',
  templateUrl: './save-list-emoji.component.html',
  styleUrls: ['./save-list-emoji.component.scss'],
})
export class SaveListEmojiComponent {

  @Input() saveStoreList?: ISaveStore[];

  constructor() { }

}
