import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ColorService {
  public colorState: ReplaySubject<string> = new ReplaySubject<string>();

  changeColorState(color: string): void {
    this.colorState.next(color);
  }
}
