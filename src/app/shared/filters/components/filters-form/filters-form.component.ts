import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { FiltersFormControlNames } from "../../utils/enums/filters.enums";

import { createFilters } from "../../../../utils/functions/app.functions";

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersFormComponent implements OnInit {
  @Output() emitSearch: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: FormGroup;
  public sizes: number[];

  public readonly filtersFormControlNames = FiltersFormControlNames;
  public readonly sex = ['Мужской', 'Женский'];
  public readonly brand = ['Nike', 'Adidas'];

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
    this.createSizeOptions();
  }

  public search(): void {
    const formValue = createFilters(this.searchForm?.value);

    this.emitSearch.emit(formValue);
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      name: [null],
      brand: [null],
      sex: [null],
      itemSize: [null],
      price: [[1, 50000]]
    })
  }

  private createSizeOptions(): void {
    this.sizes = Array.from({ length: 25 }, (_, i) => i + 25);
  }
}
