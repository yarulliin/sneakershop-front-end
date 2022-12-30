import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CreateUser } from "../../utils/interfaces/profile-info.interfaces";

import { ProfileInfoFormControlNames } from "../../utils/enums/profile-info.enums";
import { Roles } from "../../../../../../utils/enums/app.enum";

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoEditComponent implements OnInit {
  @Input() public withSearch: boolean;
  @Input() public item: CreateUser;

  @Output() public emitSave: EventEmitter<CreateUser> = new EventEmitter<CreateUser>();
  @Output() public emitGetData: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup;

  public readonly ProfileInfoFormControlNames = ProfileInfoFormControlNames;
  public readonly Roles = Roles;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public save(): void {
    const data = this.form?.value;

    this.emitSave.emit(data);
  }

  public getData(id: string): void {
    this.emitGetData.emit(id)
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      phone: [],
      dateOfBirth: [],
      sex: [true],
      role: [Roles.USER],
      card: [],
    })

    this.form.patchValue(this.item);
  }
}
