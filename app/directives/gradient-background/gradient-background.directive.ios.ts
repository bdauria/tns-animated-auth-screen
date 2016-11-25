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
    let nativeColors = NSMutableArray.alloc().initWithCapacity(colors.length);
    colors.forEach((c) => {
      nativeColors.addObject(interop.types.id(c.ios.CGColor));
    });
    let gradientLayer = CAGradientLayer.layer();
    gradientLayer.colors = nativeColors;
    gradientLayer.frame = view.page.ios.view.bounds;
    view.ios.layer.insertSublayerAtIndex(gradientLayer, 0);
  }
}
