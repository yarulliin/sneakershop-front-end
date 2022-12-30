import { Component, ChangeDetectionStrategy, Input, Optional, Output, EventEmitter } from '@angular/core';
import { NgControl } from "@angular/forms";

import { map, Observable, startWith, Subject } from "rxjs";

import { ValidationErrorTips } from "../../utils/interfaces/validation.interfaces";
import { SizeL, SizeS } from "../../utils/interfaces/sizes.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseControl {
  @Input() public set items(data: any[]) {
    this.initItems(data);
  }
  @Input() public displayName: string;
  @Input() public valueName: string;
  @Input() public placeholder: string;
  @Input() public label: string = 'Поиск...';
  @Input() public withVirtualScroll: boolean = false;
  @Input() public isStringArray: boolean = false;
  @Input() public multi: boolean = false;
  @Input() public size: SizeS | SizeL = 'l';
  @Input() public set errorMessages(messages: ValidationErrorTips) {
    this._errorTips = { ...messages };
  }

  @Output() emitSearch: EventEmitter<string | null> = new EventEmitter<string | null>();

  private readonly search$ = new Subject<string | null>();

  public items$: Observable<any>;

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

  public onSearchChange(search: string | null): void {
    this.search$.next(search);
    this.emitSearch.emit(search);
  }

  private initItems(data: any[]): void {
    this.items$ = this.search$.pipe(
      map(search => data?.filter(item =>
        (this.valueName ? item[this.valueName] : item).toString().toLowerCase()?.includes((search || '')?.toLowerCase()))
      ),
      startWith(data),
    )
  }
}
