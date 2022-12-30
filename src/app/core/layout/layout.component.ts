import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { tuiPure } from "@taiga-ui/cdk";
import { TuiDurationOptions, tuiSlideInRight } from "@taiga-ui/core";

import { AppFacadeService } from "../../services/app-facade.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [tuiSlideInRight],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public isLoaderActive$: Observable<boolean> = this.appFacadeService.isLoaderActive$;

  public isMenuOpen: boolean;

  public get withMenuButton(): boolean {
    return this.router.url.includes('catalog');
  }

  constructor(
    private appFacadeService: AppFacadeService,
    private router: Router,
  ) { }

  public toggleMenu(clickedToButton: boolean): void {
    this.isMenuOpen = clickedToButton
      ? !this.isMenuOpen
      : false;
  }

  @tuiPure
  getAnimation(): TuiDurationOptions {
    return { value: '', params: { duration: 200 } };
  }
}
