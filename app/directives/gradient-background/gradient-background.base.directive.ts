import { ElementRef, Input } from '@angular/core';
import { Layout } from 'ui/layouts/layout';
import { Color } from 'color';

export abstract class GradientBackgroundBaseDirective {
  constructor(private el: ElementRef) {}

  @Input() set gradientBackground(value: Array<string>) {
    const layout = <Layout>this.el.nativeElement;

    this.setGradientBackground(layout, value.map((v) => new Color(v)));
  }

  protected abstract setGradientBackground(view: Layout, colors: Array<Color>);
}
