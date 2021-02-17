import { Injectable } from '@angular/core';
import { IIcon } from './icons/build/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconsRegistryService {
  private registry = new Map<string, string>();

  public registerIcons(icons: IIcon[]): void {
    icons.forEach((icon: IIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
