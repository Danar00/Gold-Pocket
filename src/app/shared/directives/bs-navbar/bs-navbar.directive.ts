import { Directive, HostBinding, HostListener } from '@angular/core';

enum NavbarStyle{
  transparent = 'bg-transparent',
  default = 'bg-light'
}

enum TextStyle {
  textWhite = 'text-white',
  textDark = 'text-dark'
}

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  defaultStyle: string = NavbarStyle.transparent

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.defaultStyle = NavbarStyle.default
    } else {
      this.defaultStyle = NavbarStyle.transparent
    }
  }

  @HostBinding('class')
  get applyStyles(): string {
    return `navbar navbar-expand-lg navbar-light fixed-top ${this.defaultStyle}`
  }

}

@Directive({
  selector: '[appBsTextNavbar]'
})
export class BsNavbarTextDirective {

  defaultTextStyle: string = TextStyle.textDark

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.defaultTextStyle = TextStyle.textDark
    } else {
      this.defaultTextStyle = TextStyle.textWhite
    }
  }

  @HostBinding('class')
  get applyStyles(): string {
    return `nav-link ${this.defaultTextStyle}`
  }

}