import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional
} from '@angular/core';
import { IconsRegistryService } from './registry-icons.service';
import { nameIcons } from './icons/build/icon.model';

@Component({
  selector: 'icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg { width: 32px; height: 32px }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestIconsComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: nameIcons) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private iconRegistry: IconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
