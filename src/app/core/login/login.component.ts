import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TuiValidationError } from "@taiga-ui/cdk";

import { AppFacadeService } from "../../services/app-facade.service";

import { ValidationError } from "../../utils/interfaces/validation.interfaces";

import { ROUTE_CONFIG } from "../../utils/consts/app.consts";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessages: ValidationError;

  public readonly ROUTE_CONFIG = ROUTE_CONFIG;

  public get isSaveButtonDisabled(): boolean {
    return !this.loginForm?.valid;
  }

  constructor(
    private fb: FormBuilder,
    private appFacadeService: AppFacadeService,
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.setErrorMessages();
  }

  public login(): void {
    const user = this.loginForm?.value;

    this.appFacadeService.login(user);
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required]
    })
  }

  private setErrorMessages(): void {
    this.errorMessages = {
      email: {
        required: new TuiValidationError('Это поле обязательно'),
      },
      password: {
        required: new TuiValidationError('Это поле обязательно'),
      }
    }
  }
}
