import { ElementRef, Input } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Color } from 'color';

export abstract class HintColorBaseDirective {
  constructor(private el: ElementRef) {}

  @Input() set hintColor(value: string) {
    const textField = <TextField>this.el.nativeElement;

    this.setColor(textField, new Color(value));
  }

  protected abstract setColor(view: TextField, color: Color);
}
