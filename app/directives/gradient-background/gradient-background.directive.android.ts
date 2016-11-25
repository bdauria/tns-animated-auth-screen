import { Directive, ElementRef } from '@angular/core';
import { Layout } from 'ui/layouts/layout';
import { Color } from 'color';
import { GradientBackgroundBaseDirective }
from './gradient-background.base.directive';

@Directive({
  selector: '[gradientBackground]'
})
export class GradientBackgroundDirective
extends GradientBackgroundBaseDirective {

  constructor(el: ElementRef) {
    super(el);
  }

  protected setGradientBackground(view: Layout, colors: Array<Color>) {
    let backgroundDrawable = new android.graphics.drawable.GradientDrawable();
    let nativeColors = colors.map(c => c.android);
    backgroundDrawable.setColors(nativeColors);
    backgroundDrawable.setGradientType(0); // Linear Gradient
    let orientation = android.graphics.drawable.GradientDrawable.Orientation.
      TOP_BOTTOM;
    backgroundDrawable.setOrientation(orientation);
    view.android.setBackgroundDrawable(backgroundDrawable);
  }
}
