import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { TuiSvgService } from "@taiga-ui/core";

import { logo } from "../assets/icons/logo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
    svgService.define({ logo });
  }
}
