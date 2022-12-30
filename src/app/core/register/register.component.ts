import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TuiValidationError } from "@taiga-ui/cdk";

import { AppFacadeService } from "../../services/app-facade.service";

import { ValidationError } from "../../utils/interfaces/validation.interfaces";

import { Roles } from "../../utils/enums/app.enum";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessages: ValidationError;

  public readonly ROLES = Roles;

  public get isSaveButtonDisabled(): boolean {
    return !this.registerForm?.valid;
  }

  constructor(
    private fb: FormBuilder,
    private appFacadeService: AppFacadeService,
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.setErrorMessages();
  }

  public register(): void {
    const user = this.registerForm?.value;

    this.appFacadeService.register({ ...user, role: user.role ? Roles.ADMIN : Roles.USER });
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      role: [false, Validators.required],
    })
  }

  private setErrorMessages(): void {
    this.errorMessages = {
      name: {
        required: new TuiValidationError('This field is required'),
      },
      email: {
        required: new TuiValidationError('This field is required'),
      },
      password: {
        required: new TuiValidationError('This field is required'),
      }
    }
  }
}
