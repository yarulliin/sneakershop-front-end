import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-line-clamp',
  templateUrl: './line-clamp.component.html',
  styleUrls: ['./line-clamp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineClampComponent {
  @Input() public content: string;
  @Input() public lineHeight: number = 20;
  @Input() public linesLimit: number = 1;
}
