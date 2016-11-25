import { Directive, ElementRef } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Color } from 'color';
import { HintColorBaseDirective } from './hint-color.base.directive';

@Directive({
    selector: '[hintColor]'
})
export class HintColorDirective extends HintColorBaseDirective {

    constructor(el: ElementRef) {
        super(el);
    }

    protected setColor(view: TextField, color: Color) {
        view.android.setHintTextColor(color.android);
    }
}
