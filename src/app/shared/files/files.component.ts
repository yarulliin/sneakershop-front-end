import { Component, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { NgControl } from "@angular/forms";

import { FileContent } from "../../utils/interfaces/files.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent extends BaseControl {
  @Input() public max: number = 3;
  @Input() public maxFileSize: number = 512000;
  @Input() public accept: string = 'image/*';
  @Input() public multiple: boolean = true;
  @Input() public withInput: boolean = true;
  @Input() public showSize: boolean = true;

  public rejectedFiles: FileContent[];

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

  public removeFile({ name }: File): void {
    this.formValue = this.formValue.filter((current: File) => current.name !== name);
  }

  public clearRejected({ name }: FileContent): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      rejected => rejected.name !== name,
    );
  }

  public onReject(files: FileContent | readonly FileContent[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as FileContent[])];
  }
}
