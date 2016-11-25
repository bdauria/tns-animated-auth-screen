import { Directive, ElementRef } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Color } from 'color';
import { HintColorBaseDirective } from './hint-color.base.directive';

declare const NSAttributedString: any;
declare const NSDictionary: any;
declare const NSForegroundColorAttributeName: any;

@Directive({
  selector: '[hintColor]'
})
export class HintColorDirective extends HintColorBaseDirective {

  constructor(el: ElementRef) {
    super(el);
  }

  protected setColor(view: TextField, color: Color) {
    let dictionary = new NSDictionary(
      [color.ios],
      [NSForegroundColorAttributeName]
    );

    view.ios.attributedPlaceholder =
      NSAttributedString.alloc().initWithStringAttributes(view.hint, dictionary);
  }
}
