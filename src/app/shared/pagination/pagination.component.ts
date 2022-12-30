import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { SizeS } from "../../utils/interfaces/sizes.interfaces";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() public currentPage: number;
  @Input() public totalPages: number;
  @Input() public customContent: string[];
  @Input() public size: SizeS = "m";

  @Output() public emitChangePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public changePage(index: number): void {
    this.emitChangePage.emit(index);
  }
}
