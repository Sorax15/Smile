import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ISaveStore } from '../interfaces/save-store.interface';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class FormEmojiService {

  constructor(private http: HttpClient) {
  }

  saveMessage(data: string | null, message: string): Observable<ISaveStore[]> {
    return timer(300).pipe(switchMap(() => {
      return of([{
        data,
        message
      }]);
    }));
  }

}
