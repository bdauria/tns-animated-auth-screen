import {
  Component,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Label } from 'ui/label';
import { screen } from 'platform';

@Component({
  selector: 'session',
  templateUrl: 'session/session.component.html',
  styleUrls: ['session/session.component.css']
})
export class SessionComponent implements OnInit {
  @ViewChild('loginWrapper') loginWrapperRef: ElementRef;

  private get loginWrapper(): StackLayout {
    return this.loginWrapperRef.nativeElement;
  }

  @ViewChild('registerWrapper') registerWrapperRef: ElementRef;

  private get registerWrapper(): StackLayout {
    return this.registerWrapperRef.nativeElement;
  }

  @ViewChild('footerLabel') footerLabelRef: ElementRef;

  private get footerLabel(): Label {
    return this.footerLabelRef.nativeElement;
  }

  private get screenWidth(): number {
    return screen.mainScreen.widthDIPs;
  }

  public footerText: string;

  private get registerText(): string {
    return 'No account yet? Tap here to register';
  }

  private get loginText(): string {
    return 'Already registered? Tap here to login';
  }

  private screenToggled = false;

  private get screenToggleDuration(): number { return 400; }

  public ngOnInit(): void {
    this.registerWrapper.translateX = this.screenWidth;
    this.footerText = this.registerText;
  }

  public toggleScreen(): void {
    if (!this.screenToggled) {
      this.translateToTheLeftOfTheScreen(this.loginWrapper);
      this.bringInsideTheScreen(this.registerWrapper);
      this.toggleFooter(this.loginText);
    } else {
      this.bringInsideTheScreen(this.loginWrapper);
      this.translateToTheRightOfTheScreen(this.registerWrapper);
      this.toggleFooter(this.registerText);
    }
    this.screenToggled = !this.screenToggled;
  }


  private bringInsideTheScreen(wrapper: StackLayout) {
    this.translateWrapper(wrapper, 0);
  }

  private translateToTheRightOfTheScreen(wrapper: StackLayout) {
    this.translateWrapper(wrapper, this.screenWidth);
  }

  private translateToTheLeftOfTheScreen(wrapper: StackLayout) {
    this.translateWrapper(wrapper, -this.screenWidth);
  }

  private translateWrapper(wrapper: StackLayout, x: number) {
    wrapper.animate({
      translate: { x: x, y: 0 },
      duration: this.screenToggleDuration
    });
  }

  private toggleFooter(newText: string) {
    this.fadeOutFooterText()
      .then(() => {
        this.footerText = newText;
        this.fadeInFooterText();
    });
  }

  private fadeOutFooterText() {
    return this.fadeFooterTextTo(0);
  }

  private fadeInFooterText() {
    return this.fadeFooterTextTo(1);
  }

  private fadeFooterTextTo(opacity: number) {
    return this.footerLabel.animate({
      opacity: opacity,
      duration: this.screenToggleDuration / 2
    });
  }
}
