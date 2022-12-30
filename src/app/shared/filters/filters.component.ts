import { Component, ChangeDetectionStrategy, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

import { TuiDurationOptions, tuiHintOptionsProvider, tuiWidthCollapse } from "@taiga-ui/core";
import { tuiPure } from "@taiga-ui/cdk";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [tuiWidthCollapse],
  providers: [
    tuiHintOptionsProvider({
      tooltipIcon: 'tuiIconEyeOpen',
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Output() emitSearch: EventEmitter<any> = new EventEmitter<any>();

  // @HostListener('document:click', ['$event'])
  // public toggleFiltersForm(event: MouseEvent, clickedToButton?: boolean): void {
  //   event.stopPropagation();
  //
  //   this.isFiltersFormOpened = this.elementRef.nativeElement.contains(event.target) && clickedToButton
  //     ? !this.isFiltersFormOpened
  //     : this.elementRef.nativeElement.contains(event.target);
  // }

  public isFiltersFormOpened: boolean = false;

  constructor(private elementRef: ElementRef) { }

  public search(data: any): void {
    this.emitSearch.emit(data);
  }

  public toggleFiltersForm(event: MouseEvent, clickedToButton?: boolean): void {
    event.stopPropagation();

    this.isFiltersFormOpened = this.elementRef.nativeElement.contains(event.target) && clickedToButton
      ? !this.isFiltersFormOpened
      : this.elementRef.nativeElement.contains(event.target);
  }

  @tuiPure
  getAnimation(): TuiDurationOptions {
    return { value: '', params: { duration: 200 } };
  }
}
