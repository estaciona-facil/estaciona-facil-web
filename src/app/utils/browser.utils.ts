import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export function isBrowser(platformId?: Object): boolean {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') return true;
  if (platformId) return isPlatformBrowser(platformId);

  return false;
}

@Injectable({ providedIn: 'root' })
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  isBrowser(): boolean { return isPlatformBrowser(this.platformId); }
}
